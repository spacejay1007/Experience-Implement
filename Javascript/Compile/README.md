## Compile

### tsconfig.json

- strict: 타입 검사를 엄격하게 한다. false로 하면 타입스크립트를 사용하는 의미가 없다.
- include: ts 파일을 js로 컴파일할 폴더 지정
- exclude: js 컴파일 제외 폴더 지정
- target: 컴파일 js 버전. 보통 es5를 기준으로 한다.
- lib: 컴파일할 때 포함될 라이브러리 목록
- module: js 파일 간에 import 시 어떤 문법을 사용할지 지정한다. (commonjs는 require 문법, es2015와 esnext는 import 문법)
- outDir: 컴파일된 js가 생성되는 경로
- roodDir: 시작 경로
- allowJs: ts 파일을 컴파일할 때 js 파일도 포함할지 설정. 기존 자바스크립트 프로젝트에서 타입스크립트로 적용할 때 유용하다.
- esModuleInterop: export default가 없는 라이브러리도 \* as 없이 불러올 수 있다.
