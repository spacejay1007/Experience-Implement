/**
 현재 적용 되어있는 코드 > 에러 없이 잘 돌아 가고 있다. 
 */

import React, { Dispatch, useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { M_Detect } from "models/main";
import { Button, Loading } from "common/lib";
import { fileDownloader } from "common/functions";
import { CodeMirrorMergeView } from "common/lib/codeMirror/CodeMirrorMergeView";
import { textTrans } from "common/hooks";
import classNames from "classnames";
import sanitizer from "common/functions/sanitizer";
import { action, I_DetailInfoState } from "./DetectDetailInfo";
import "./DetailInfoSource.scss";

import "codemirror/addon/merge/merge.css";
import "codemirror/lib/codemirror?.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/neat.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/merge/merge";

export const DetailInfoSource: React.FC<{
  selectData: M_Detect.I_DetectDetailList;
  state: I_DetailInfoState;
  setState: Dispatch<action>;
}> = ({ state, selectData, setState }): JSX.Element => {
  const { idsState, detailIdsState, codeMirror } = state;

  // codeMirror tooltip
  function makeMarker(
    item: M_Detect.I_DetectDetailIds,
    start: number,
    end: number
  ) {
    const marker = document.createElement("div");
    marker.id = "tooltip__point";

    const Tooltip = document.createElement("div");
    Tooltip.id = "lint__tooltip";

    Tooltip.innerHTML = sanitizer(`<div class="tooltip_inner">
                          <div class="head">
                            <div class="head__wrap">
                              <div class="line__number">${start + 1}-${
      end + 1
    } </div>
                              <div class="head__title">${item.detectTitle}</div>
                              </div>
                            <div class="detect__id">${item.detectId}</div>
                          </div>
                          <div class="content">${item.detectDetail}</div>
                        </div>`);

    const Icon = document.createElement("i");
    Icon.classList.add("i_tooltip");

    marker.append(Icon);

    Icon.addEventListener("mouseover", () => {
      const IconRect = Icon.getBoundingClientRect();
      Tooltip.style.top = `${IconRect.top - 1}px`;
      Tooltip.style.left = `${IconRect.left + IconRect.width + 10}px`;
      document.body.append(Tooltip);
    });
    Icon.addEventListener("mouseleave", () => {
      Tooltip.remove();
    });

    return marker;
  }

  // Color Line
  function LineExtraction() {
    // detaulIdsState 에서 라인들을 모두 넣어준다.
    const yellowLine = detailIdsState.map((item) => {
      // codeMirror에서는 0 부터 시작하고 data의 숫자는 1부터 시작함으로 1씩 빼준다.
      const startLineValue = item.startLine - 1;
      const endLineValue = item.endLine - 1;

      // 코드 미러 안에 yellowLine의 gutterMaker Icon 넣어주고 toolTip 보여주기
      codeMirror?.setGutterMarker(
        startLineValue,
        "pointer",
        makeMarker(item.state, startLineValue, endLineValue)
      );

      // data 의 start와 end 로만 배열로 묶어준다.
      return [startLineValue, endLineValue];
    });

    const flatNumber = yellowLine.flat(1); // [][] 형태로 오는 line 의 데이터 배열 하나('[]')로 정리
    const uniqueArray = Array.from(new Set(flatNumber)); // 중복 제거

    const greyLine = () => {
      const greyLines = 5; // 회색라인은 위 yellow 라인의 위아래로 5줄로 표기
      const greyNuumbers: number[] = []; // 회색 줄로 들어갈 배열

      for (let i = 0; i < uniqueArray.length; i++) {
        const numberToCheck = uniqueArray[i];
        for (let j = 1; j <= greyLines; j++) {
          const smNum = numberToCheck - j; // yellowLine보다 5 작은수
          const lgNum = numberToCheck + j; // yellowLine보다 5 큰 수

          // smallNumber 는 codemirror에서 1은 0 이기때문에 0과 같은거까지는 포함시켜야한다.
          if (
            smNum >= 0 &&
            !uniqueArray.includes(smNum) &&
            !greyNuumbers.includes(smNum)
          ) {
            greyNuumbers.push(smNum);
          }
          if (!uniqueArray.includes(lgNum) && !greyNuumbers.includes(lgNum)) {
            greyNuumbers.push(lgNum);
          }
        }
      }
      return greyNuumbers
        .filter((num) => !uniqueArray.includes(num))
        .sort((a, b) => a - b);
    };
    return [uniqueArray, greyLine()];
  }

  // 요약보기 할 때 라인 제거
  function HideLine() {
    // 전체 라인 확인
    const lastLine = codeMirror && codeMirror.lastLine();
    // yellowLine 과 greyLine 을(요약text라인) 포함하여서 보여줄 라인을 하나로 합친다.
    const summaryLine = [...LineExtraction()[0], ...LineExtraction()[1]].sort(
      (a, b) => a - b
    );
    // summaryLine 의 해당하지 않는 라인들을 담아준다. type 은 배열의 배열 형태[][] 시작 - 끝으로
    const hideLineResult = [];
    let checkLineNum = 0;

    for (const line of summaryLine) {
      if (line > checkLineNum) {
        hideLineResult.push([checkLineNum, line]);
      }
      checkLineNum = line + 1;
    }

    // 마지막 으로 누락된 범위가 있는지 확인
    if (checkLineNum <= (lastLine as number)) {
      hideLineResult.push([checkLineNum, (lastLine as number) + 1]);
    }

    return hideLineResult;
  }

  // 코드미러 로드
  const loadCodeMirror = (args?: { view?: boolean; decode?: boolean }) => {
    return new Promise(() => {
      if (!codeMirror) return;

      // highlight 색상
      const highlight = () => {
        // decodeContent 가 없으면서, 원문보기 일 때 만
        // 옐로우선 넣기
        (() => {
          // eslint-disable-next-line array-callback-return
          LineExtraction()[0].map((item) => {
            codeMirror.addLineClass(item, "wrap", "highlight");
          });
        })();

        // 회색선 넣기
        (() => {
          // eslint-disable-next-line array-callback-return
          LineExtraction()[1].map((item) => {
            codeMirror.addLineClass(item, "wrap", "nearest");
          });
        })();
        // }
      };

      // highlight 색상 삭제 (decodeContent : 원문보기)
      const removeLight = () => {
        (() => {
          // eslint-disable-next-line array-callback-return
          LineExtraction()[0].map((item) => {
            codeMirror.removeLineClass(item, "wrap", "highlight");
          });
        })();

        // 회색선 넣기
        (() => {
          // eslint-disable-next-line array-callback-return
          LineExtraction()[1].map((item) => {
            codeMirror.removeLineClass(item, "wrap", "nearest");
          });
        })();
      };

      /** 요약보기일때 마크할 텍스트 지정 */
      /** 요약보기시 위, 아래 5줄 표시 */
      const setLines = () => {
        if (args?.view) {
          codeMirror.getAllMarks().forEach((marker) => marker.clear());
        } else {
          for (let i = 0; HideLine().length > i; i++) {
            const hideStart = (HideLine()[i][0] as number) - 1;
            const hideEnd = (HideLine()[i][1] as number) - 1;
            const startGetLine = codeMirror.getLine(hideStart);
            const endGetLine = codeMirror.getLine(hideEnd);

            if (hideEnd > 0) {
              if (codeMirror) {
                // line 은 몇번째 라인, ch 는 글자수를 제외
                codeMirror.markText(
                  {
                    line: hideStart === -1 ? 0 : hideStart,
                    ch: startGetLine ? startGetLine.length : 0,
                  },
                  { line: hideEnd, ch: endGetLine ? endGetLine.length : 0 },
                  { inclusiveRight: true, inclusiveLeft: true, collapsed: true }
                );
                // codeMirror.refresh();
              }
            }
          }
        }
        // }
      }; // 현재 원문보기(decodeContent 가 있을 때) 일 때 detailIds 의 Data의 startLine 과 endLine 이 DecodeContent 를 향해 있지 않고 content 를 향해 있거나 아니면 decodeContent 자체의 내용이 맞지 않게 넘어 오기때문에 요약 보기가 되어있을때 해당 Line을 제외한 나머지는 제외되므로 현재 빈페이지가 나타내져있다.

      /** 사이드바 select가 바뀌었을때 */
      codeMirror.scrollTo(0, 0);

      // decodeContent == 난독화 있을 경우 분기 처리
      if (
        !!selectData &&
        selectData.decodeContent &&
        !state.codeBtn.decodeContentView
      ) {
        if (args) {
          setLines();
          highlight();

          if (args.view === args.decode && args.decode === true) {
            codeMirror.refresh();
            removeLight();
          }
        }
      }

      // decodeContent가 없을 때
      if (!!selectData && !selectData.decodeContent) {
        codeMirror.clearGutter("pointer");

        if (idsState.length && detailIdsState.length) {
          setLines();
          highlight();
        }
      }
    });
  };

  // 포함된 기능 Line 눌렀을 때 소스보기 line 이동
  const onClickLine = () => {
    if (codeMirror && state.moveLine !== 1) {
      const lineState = state.moveLine;
      const line = codeMirror.charCoords(
        { line: lineState - 4, ch: 0 },
        "local"
      ).top;
      codeMirror.scrollTo(null, line - 30);

      setState({ type: "moveLineToggle", value: false });
    }
  };

  useEffect(() => {
    onClickLine();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.moveLineToggle === true]);

  // content 내용을 보여줄때 다운로드 버튼
  const onDownloadFile = async () => {
    fileDownloader({
      url: "detect/file",
      method: "get",
      data: { fmDataDetailNo: selectData?.fmDataDetailNo },
    });
  };

  /**
   * codeMirror 일반 or 변경 전.후로 보여주는 조건
   * `fileState` => 탐지구분
   * 1: 파일 변경
   * 2: 웹쉘
   * 4: 백업 파일
   * `scanType` => 탐지종류(탐지현황)
   * 2: 웹쉘
   */
  const codeMirrorCodition: boolean =
    !!selectData &&
    (selectData.fileState === 1 ||
      selectData.fileState === 2 ||
      selectData.fileState === 4 ||
      selectData.scanType === 1);

  useEffect(() => {
    if (!codeMirrorCodition) {
      loadCodeMirror({ view: false, decode: false });
    }

    return () => {
      if (codeMirror) {
        codeMirror.clearGutter("pointer");
        codeMirror.refresh();

        // if (toggle === true) setToggle(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailIdsState, state.codeBtn.decodeContentView]);

  return (
    <>
      {/* <div className="detail__info__source__wrapper"> */}
      <div
        className={classNames("detail__info__source__wrapper", {
          merge: codeMirrorCodition,
        })}
      >
        <div className="detail__info__source__box">
          <div className="source__inner">
            <div className="source__title">
              {textTrans({ key: "ss_715", defaultMsg: "소스 보기" })}
            </div>
            {state.loading && <Loading />}

            {codeMirrorCodition ? (
              <div className="source__merge__codemirror__wrap">
                <div className="merge__wrapper">
                  <div className="source__code__merge__title__wrapper">
                    <div className="title__wrap change__before">
                      <div className="source__code__change__title">
                        {textTrans({ key: "ss_530", defaultMsg: "변경 전" })}
                      </div>
                    </div>
                    <div className="title__wrap">
                      <div className="source__code__change__title">
                        {textTrans({ key: "ss_531", defaultMsg: "변경 후" })}
                      </div>
                    </div>
                  </div>
                  <div className="source__codemirror">
                    <CodeMirrorMergeView
                      id="view"
                      origLeft={selectData?.orgContent as string}
                      value={selectData?.content as string}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="source__codemirror">
                {!!selectData && (
                  <CodeMirror
                    value={
                      selectData.decodeContent &&
                      !state.codeBtn.decodeContentView
                        ? selectData.decodeContent
                        : selectData.content
                    }
                    editorDidMount={(editor) => {
                      setState({ type: "codeMirror", value: editor });
                    }}
                    className="source__codemirror__desc"
                    options={{
                      lineNumbers: true,
                      lineWrapping: true,
                      readOnly: "nocursor",
                      gutters: ["pointer", "CodeMirror-linenumber"],
                    }}
                    autoCursor={false}
                  />
                )}
              </div>
            )}
          </div>
          {!codeMirrorCodition && (
            <div className="source__button__inner">
              {!state.codeBtn.decodeContentView && (
                <Button
                  disabled={!selectData}
                  text={
                    state.codeBtn.allView
                      ? textTrans({ key: "ss_930", defaultMsg: "요약보기" })
                      : textTrans({ key: "ss_1154", defaultMsg: "전체보기" })
                  }
                  styles={{ width: 70, height: 20, fontWeight: 400 }}
                  onClick={() => {
                    setState({
                      type: "codeBtn",
                      value: { text: "all", flag: !state.codeBtn.allView },
                    });
                    loadCodeMirror({
                      view: !state.codeBtn.allView,
                      decode: state.codeBtn.decodeContentView,
                    });
                  }}
                />
              )}

              {!!selectData && !!selectData.decodeContent ? (
                <Button
                  className="decode__btn"
                  disabled={!selectData}
                  text={
                    !state.codeBtn.decodeContentView
                      ? textTrans({ key: "ss_946", defaultMsg: "원문보기" })
                      : textTrans({ key: "ss_363", defaultMsg: "난독화 해제" })
                  }
                  styles={{
                    width: 70,
                    height: 20,
                    marginLeft: 10,
                    fontWeight: 400,
                  }}
                  onClick={() => {
                    setState({
                      type: "codeBtn",
                      value: {
                        text: "decode",
                        flag: !state.codeBtn.decodeContentView,
                      },
                    });

                    loadCodeMirror({
                      view: !state.codeBtn.decodeContentView,
                      decode: !state.codeBtn.decodeContentView,
                    });

                    // setToggle(!toggle);
                  }}
                />
              ) : (
                <Button
                  text={textTrans({ key: "ss_372", defaultMsg: "다운로드" })}
                  disabled={!selectData}
                  styles={{
                    width: 70,
                    height: 20,
                    marginLeft: 10,
                    fontWeight: 400,
                  }}
                  onClick={() => {
                    onDownloadFile();
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
