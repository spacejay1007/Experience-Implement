export default function Timer() {
  const now = Date.now();
  const sec = new Date(now).getSeconds();

  return <h3>현재 {sec} 초 입니다.</h3>;
}
