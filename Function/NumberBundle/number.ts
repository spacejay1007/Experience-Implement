import { detailState, lastLine } from "./data";

// 기존 LineExtraction
const hideLine: number[] = [];
const startArr: number[] = [];
function PastLineExtraction() {
  detailState.forEach((item) => {
    let start = item.startLine - 1;
    const end = item.endLine - 1;
    // hideLine 을 위한
    let sView = start - 6 < 0 ? -1 : start - 6;
    const eView = end + 6;

    hideLine.push(sView);
    hideLine.push(eView);
    startArr.push(start);

    /** codeMirror 맨윗줄 highlight 제거   */
    if (startArr.length && !startArr.includes(0)) {
      // codeMirror?.removeLineClass(0, 'wrap', 'highlight');
    }

    for (; sView < eView; sView++) {
      // codeMirror?.addLineClass(sView, 'wrap', 'nearest');
    }

    // codeMirror?.setGutterMarker(start, 'pointer', makeMarker(item.state, start, end));

    if (start === end) {
      // codeMirror?.addLineClass(start, 'wrap', 'highlight');
    } else {
      for (; start <= end; start += 1) {
        // if (end !== 0) codeMirror?.addLineClass(start, 'wrap', 'highlight');
      }
    }
  });
}

// 변경된 ColorLine
function LineExtraction() {
  // detailState 에서 라인들을 모두 넣어준다.
  const yellowLine = detailState.map((item) => {
    // codeMirror에서는 0 부터 시작하고 data의 숫자는 1부터 시작함으로 1씩 빼준다.
    const startLineValue = item.startLine - 1;
    const endLineValue = item.endLine - 1;

    // // 코드 미러 안에 yellowLine의 gutterMaker Icon 넣어주고 toolTip 보여주기
    // codeMirror?.setGutterMarker(startLineValue, 'pointer', makeMarker(item.state, startLineValue, endLineValue));

    // data 의 start와 end 로만 배열로 묶어준다.
    return [startLineValue, endLineValue];
  }); // detailState 의 startLine, EndLine 의 데이터만 추출하여 배열에 넣어준다.

  const flatNumber = yellowLine.flat(1); // [][] 형태로 오는 line 의 데이터 배열 하나('[]')로 정리

  const uniqueArray = Array.from(new Set(flatNumber)); // 중복이 있다면 제거

  const greyLine = () => {
    const greyLines = 5; // 회색라인은 위 yellow 라인의 위아래로 5줄로 표기
    const smallNumbers: number[] = []; // 회색 줄로 들어갈 number배열

    // yellowLine의 형태로 위로 순서대로 5개의 번호 아래로 5개의 번호가 순서대로 표기
    for (let i = 0; i < uniqueArray.length; i++) {
      const numberToCheck = uniqueArray[i];
      for (let j = 1; j <= greyLines; j++) {
        const smallNumber = numberToCheck - j; // yellowLine보다 5 작은수
        const largeNumber = numberToCheck + j; // yellowLine보다 5 큰 수

        if (
          smallNumber > 0 &&
          !uniqueArray.includes(smallNumber) &&
          !smallNumbers.includes(smallNumber)
        ) {
          smallNumbers.push(smallNumber);
        }
        if (
          !uniqueArray.includes(largeNumber) &&
          !smallNumbers.includes(largeNumber)
        ) {
          smallNumbers.push(largeNumber);
        }
      }
    }
    return smallNumbers
      .filter((num) => !uniqueArray.includes(num))
      .sort((a, b) => a - b);
  };
  return [uniqueArray, greyLine()];
}

// 기존 HideLine
function PastHideLine(args) {
  if (hideLine.length) {
    hideLine.unshift(0);
    hideLine.push(lastLine + 1);

    if (args?.view) {
      // codeMirror.getAllMarks().forEach((marker) => marker.clear());
    } else {
      for (let i = 0; hideLine.length > i; i += 2) {
        const s = hideLine[i] - 1; // PastLineExtraction 에서 계산된 hideLine 그대로 넣어준다.
        const e = hideLine[i + 1] - 1;

        if (e > 0) {
          // if (codeMirror)
          // codeMirror.markText(
          // { line: s, ch: codeMirror.getLine(s) ? codeMirror.getLine(s).length : 0 },
          // { line: e, ch: codeMirror.getLine(e) ? codeMirror.getLine(e).length : 0 },
          // { inclusiveRight: true, inclusiveLeft: true, collapsed: true }
          // );
        }
      }
    }
  }
}

// HideLine
function HideLine() {
  // 전체 라인 확인
  // const lastLine = codeMirror && codeMirror.lastLine();

  // yellowLine 과 greyLine 을(요약text라인) 포함하여서 보여줄 라인을 하나로 합친다.
  const summaryLine = [...LineExtraction()[0], ...LineExtraction()[1]].sort(
    (a, b) => a - b
  );
  // summaryLine 의 해당하지 않는 라인들을 담아준다. type 은 배열의 배열 형태[][] 시작 - 끝으로
  const hideLineResult: number[][] = [];

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

const setLine = () => {
  // 위에서 HideLine 의 정리되어있는 내용을 받아서 넣어준다.
  for (let i = 0; HideLine().length > i; i++) {
    const hideStart = (HideLine()[i][0] as number) - 1;
    const hideEnd = (HideLine()[i][1] as number) - 1;
    // const startGetLine = codeMirror.getLine(hideStart);
    // const endGetLine = codeMirror.getLine(hideEnd);

    if (hideEnd > 0) {
      //   if (codeMirror) {
      //     // line 은 몇번째 라인, ch 는 글자수를 제외
      //     codeMirror.markText(
      //       { line: hideStart === -1 ? 0 : hideStart, ch: startGetLine ? startGetLine.length : 0 },
      //     { line: hideEnd, ch: endGetLine ? endGetLine.length : 0 },
      //     { inclusiveRight: true, inclusiveLeft: true, collapsed: true }
      //   );
      //   // codeMirror.refresh();
      // }
    }
  }
};

// function HideLine_() {
//   // 전체 라인 확인
//   const lastLine = codeMirror && codeMirror.lastLine();

//   console.log(lastLine);
//   const allLine = [...LineExtraction()[0], ...LineExtraction()[1]].sort((a, b) => a - b);
//   const hideLineResult = [];
//   let currentGroup: number[] = [];
//   console.log(allLine);
//   for (let i = 0; i < allLine.length; i++) {
//     if (i === 0) {
//       currentGroup.push(allLine[i]);
//     } else if (allLine[i] - allLine[i - 1] === 1) {
//       currentGroup.push(allLine[i]);
//     } else {
//       hideLineResult.push([currentGroup[0], currentGroup[currentGroup.length - 1]]);
//       currentGroup = [allLine[i]];
//     }
//   }

//   if (currentGroup.length > 0) {
//     hideLineResult.push([currentGroup[0], currentGroup[currentGroup.length - 1]]);
//   }
//   return hideLineResult;
// }
//   function HideLine_2() {
//     // 전체 라인 확인
//     // const lastLine = codeMirror && codeMirror.lastLine();

//     // yellowLine 과 greyLine 을(요약text라인) 포함하여서 보여줄 라인을 하나로 합친다.
//     const summaryLine = [...LineExtraction()[0], ...LineExtraction()[1]].sort((a, b) => a - b);
//     const hideLineResult:number[][] = [];

// // 삭제된 0,1,2,3, ... 으로 돌아서 확인 뒤 null 로 변경 summaryLine 을 하나씩 0부터 확인
//     let missingStart:any = null;

//     if (lastLine) {
//       for (let i = 0; i < (lastLine as number); i++) {
//         if (!summaryLine.includes(i)) {
//           if (missingStart === null) {
//             missingStart = i;
//           }
//         } else if (missingStart !== null) {
//           hideLineResult.push([missingStart, i]);
//           missingStart = null;
//         }
//       }

//       if (missingStart !== null) {
//         hideLineResult.push([missingStart, lastLine + 1]);
//       }
//     }
//     return hideLineResult;
//   }
