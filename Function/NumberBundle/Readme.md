## 사용한 이유

- CodeMirror 라이브러리를 사용했을 때 고민해서 만들게 되었다.
- 전체 코드 중 데이터로 들어오는 중요 라인을 노란색상 및 아이콘, 툴팁을 적용 해주어야 하며, 그 중요라인의 위로 5줄과 아래의 5줄로는 회색선이 들어가야 한다.
- 요약으로 볼 시에는 중요 하지 않은 코드들은 숨겨주고 중요, 중요 주위 5줄 코드는 보여주게 되어야 한다.

### 오류발생

- 처음에 계획 했던 코드 자체는

### 고민

### 파일 설명

editorDidMount={(editor) => {
setState({ type: 'codeMirror', value: editor });
}}

- data.ts 의 lastLine 은 codeMirror의 method 의 `lastLine();` 을 사용
