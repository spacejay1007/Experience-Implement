// 업무에서 설치 다운로드, 수동진단 파일 다운로드의 경로를 ko, ja 일때에 변경이 되게 해야 하는 업무가 있었다.
// 하여 downLoadFunc를 만들어서 경로가 전달 될 수 있게 전달 하고 싶었다.
// 여기서 공부해야 할 것은 Record 라는 Typescript 의 제네릭 함수이다.

//
const langURL: Record<string, Record<string, string>> = {
  ko: {
    istallFile: `$/MIUP/manual/metieye_agent.pdf`,
    diagnosticFile: `$/MIUP/manual/metieye_manual.pdf`,
  },
  ja: {
    installFile: `$/MIUP/manual/metieye_agent_ja.pdf`,
    diagnosticFile: `$/MIUP/manual/metieye_manual_ja.pdf`,
  },
};
const downLoadFunc = (downText: "installFile" | "diagnosticFile") => {
  // const getLang = getCookie("lang");
  const getLang = "ko" || "ja";
  return langURL[getLang as string]?.[downText];
};
const downLoadFuncTypeDefence = (
  downText: "installFile" | "diagnosticFile"
) => {
  // const getLang = getCookie("lang") || "ko"; // getCookie 가 undifined가 될 수 있기 때문에 기본값을 ko로 준다
  const getLang = "ko" || "ja";
  // return langURL[getLang as string]?.[downText];
  return langURL[getLang][downText] || ""; // 방어를 해주었음에도 불구하고 undefined 일 때 "" 빈값으로 return 되게 해준다.
};
