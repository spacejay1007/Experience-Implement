import React, { Dispatch, useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { M_Detect } from "models/main";
import { Button, Loading } from "common/lib";
import { fileDownloader } from "common/functions";
import { cloneDeep, isEqual } from "lodash";
import { CodeMirrorMergeView } from "common/lib/codeMirror/CodeMirrorMergeView";
import { textTrans } from "common/hooks";
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
  const [toggle, setToggle] = useState(false); // decodeContent 일때 hightlight 삭제

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

    Tooltip.innerHTML = `<div class="tooltip_inner">
                            <div class="head">
                              <div class="head__wrap">
                                <div class="line__number">${start + 1}-${
      end + 1
    } </div>
                                <div class="head__title">${
                                  item.detectTitle
                                }</div>
                                </div>
                              <div class="detect__id">${item.detectId}</div>
                            </div>
                            <div class="content">${item.detectDetail}</div>
                          </div>`;

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

  // 코드미러 로드
  const loadCodeMirror = (args?: { view?: boolean; decode?: boolean }) => {
    return new Promise(() => {
      if (!codeMirror) return;

      const hideLine: number[] = [];
      const startArr: number[] = [];

      // highlight 색상
      const highlight = (decodeToggle?: boolean) => {
        detailIdsState.forEach((item) => {
          let start = item.startLine - 1;
          const end = item.endLine - 1;
          let sView = start - 6 < 0 ? -1 : start - 6;
          const eView = end + 6;

          hideLine.push(sView);
          hideLine.push(eView);
          startArr.push(start);

          /** codeMirror 맨윗줄 highlight 제거 - 예림  */
          if (startArr.length && !startArr.includes(0)) {
            codeMirror?.removeLineClass(0, "wrap", "highlight");
          }

          for (; sView < eView; sView++) {
            codeMirror?.addLineClass(sView, "wrap", "nearest");
          }

          codeMirror?.setGutterMarker(
            start,
            "pointer",
            makeMarker(item.state, start, end)
          );

          if (start === end) {
            codeMirror?.addLineClass(start, "wrap", "highlight");
          } else {
            for (; start <= end; start += 1) {
              if (end !== 0)
                codeMirror?.addLineClass(start, "wrap", "highlight");
            }
          }

          if (!decodeToggle) {
            codeMirror?.removeLineClass(sView, "nearest");
            codeMirror?.removeLineClass(sView, "wrap", "nearest");
          }
        });

        /**  codeMirror 마지막줄 highlight 제거 - 예림 */
        if (!startArr.includes(hideLine[hideLine.length - 1])) {
          codeMirror?.removeLineClass(
            hideLine[hideLine.length - 1],
            "wrap",
            "highlight"
          );
        } else {
          codeMirror?.addLineClass(
            hideLine[hideLine.length - 1],
            "wrap",
            "highlight"
          );
        }
      };

      /** 요약보기일때 마크할 텍스트 지정 */
      /** 요약보기시 위, 아래 6줄 표시 */
      const setLines = () => {
        if (hideLine.length) {
          hideLine.unshift(0);
          hideLine.push(codeMirror.lastLine() + 1);

          if (args?.view) {
            codeMirror.getAllMarks().forEach((marker) => marker.clear());
          } else {
            for (let i = 0; hideLine.length > i; i += 2) {
              const s = hideLine[i] - 1;
              const e = hideLine[i + 1] - 1;

              if (e > 0) {
                if (codeMirror)
                  codeMirror.markText(
                    {
                      line: s,
                      ch: codeMirror.getLine(s)
                        ? codeMirror.getLine(s).length
                        : 0,
                    },
                    {
                      line: e,
                      ch: codeMirror.getLine(e)
                        ? codeMirror.getLine(e).length
                        : 0,
                    },
                    {
                      inclusiveRight: true,
                      inclusiveLeft: true,
                      collapsed: true,
                    }
                  );
              }
            }
          }
        }
      };

      /** 사이드바 select가 바뀌었을때 */
      codeMirror.scrollTo(0, 0);

      // decodeContent == 난독화 있을 경우 분기 처리
      if (!!selectData && selectData.decodeContent) {
        let decodeCont = cloneDeep(selectData.decodeContent);

        if (
          state.codeBtn.decodeContentView === false ||
          args?.decode === false
        ) {
          decodeCont = selectData.decodeContent;
        } else if (
          (state.codeBtn.decodeContentView === true &&
            args?.decode === undefined) ||
          args?.decode === true
        ) {
          decodeCont = selectData.content;
        }

        // codeMirror.setValue(decodeCont);

        const isDiff = !isEqual(decodeCont, selectData.decodeContent);

        if (!toggle) highlight(toggle);

        /** 소스보기 미표기 방지 -예림 */
        // if (!isDiff && idsState.length && detailIdsState.length && !!hideLine.length) {
        //   setLines();
        // }
      }

      // decodeContent가 없을 때
      if (!!selectData && !selectData.decodeContent) {
        codeMirror.clearGutter("pointer");
        // const contentData = selectData.content;
        // codeMirror.setValue(selectData.content);

        if (idsState.length && detailIdsState.length) {
          highlight();
          setLines();
        }
      }
    });
  };

  // const getDecodeContent = () => {
  //   let decodeCont = cloneDeep(selectData.decodeContent);
  //
  //   if (state.codeBtn.decodeContentView === false || args?.decode === false) {
  //     decodeCont = selectData.decodeContent;
  //   } else if ((state.codeBtn.decodeContentView === true && args?.decode === undefined) || args?.decode === true) {
  //     decodeCont = selectData.content;
  //   }
  //
  // }

  // 포함된 기능 Line 눌렀을 때 소스보기 line 이동
  const onClickLine = () => {
    if (codeMirror && state.moveLine !== 1) {
      const lineState = state.moveLine;
      const line = codeMirror.charCoords(
        { line: lineState - 4, ch: 0 },
        "local"
      ).top;
      codeMirror.scrollTo(null, line - 30);
    }
  };

  useEffect(() => {
    onClickLine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.moveLine]);

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
      loadCodeMirror();
    }

    return () => {
      if (codeMirror) {
        codeMirror.clearGutter("pointer");
        codeMirror.refresh();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailIdsState, state.codeBtn.decodeContentView]);

  return (
    <>
      <div className="detail__info__source__wrapper">
        <div className="detail__info__source__box">
          <div className="source__inner">
            <div className="source__title">
              {textTrans({ key: "ss_715", defaultMsg: "소스 보기" })}
            </div>
            {state.loading && <Loading />}

            {codeMirrorCodition ? (
              <div className="source__change__codemirror__wrap">
                <div className="change__wrapper">
                  <div className="source__code__change__title__wrapper">
                    <div className="title__wrap">
                      <div className="source__code__change__title">
                        {textTrans({ key: "ss_530", defaultMsg: "변경전" })}
                      </div>
                    </div>
                    <div className="title__wrap">
                      <div className="source__code__change__title">
                        {textTrans({ key: "ss_531", defaultMsg: "변경후" })}
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
                    editorDidAttach={(editor) => {
                      console.log("editorDidAttach");
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
                  styles={{ width: 70, height: 20 }}
                  onClick={() => {
                    setState({
                      type: "allView",
                      value: !state.codeBtn.allView,
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
                  styles={{ width: 70, height: 20, marginLeft: 10 }}
                  onClick={() => {
                    setState({
                      type: "decodeContentView",
                      value: !state.codeBtn.decodeContentView,
                    });
                    setState({
                      type: "allView",
                      value: !state.codeBtn.allView,
                    });
                    loadCodeMirror({
                      view: !state.codeBtn.allView,
                      decode: !state.codeBtn.decodeContentView,
                    });

                    setToggle(!toggle);
                  }}
                />
              ) : (
                <Button
                  text={textTrans({ key: "ss_372", defaultMsg: "다운로드" })}
                  disabled={!selectData}
                  styles={{ width: 70, height: 20, marginLeft: 10 }}
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
