export const Header = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(""); // Tag 이름 변경하여 css 를 변경하려고 한다

  let prevScrTop = 0;

  useEffect(() => {
    // scroll 이 움직이는 event
    window.addEventListener("scroll", () => {
      let nextSctTop = window.scrollY || 0; // window.scrollY 는 현재 스크롤의 위치를 말해준다.

      if (nextSctTop > prevScrTop) {
        // 스크롤 내리는 중에 실행 코드
        setScrollPosition("down");
      } else if (nextSctTop < prevScrTop) {
        // 스크롤 올리는 중에 실행코드
        setScrollPosition("");
      }
      prevScrTop = nextSctTop;
    });
  }, []);

  return (
    <header className={`header__wrapper ${scrollPosition}`}>
      <div />
    </header>
  );
};
