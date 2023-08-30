// 클릭 하였을 때 닫힘이 일어 날 수 있게 hook 함수를 만든다.

export const clickOutSideEffect = ({
  target, // useRef > ref.current 를 받는다
  close, // setState 의 false 를 받는다.
}: {
  target: HTMLElement | null;
  close: () => void;
}) => {
  const mouseDownHandler = (e: MouseEvent) => {
    if (target && !target.contains(e.target as Node)) {
      close();
    }
  };
  document.addEventListener("mousedown", mouseDownHandler);

  return () => {
    document.removeEventListener("mousedown", mouseDownHandler);
  };
};

// const selectRef = useRef<HTMLDivElement>(null);
// tsx 에서 넘겨주는 녀석
// useEffect(() => {
// clickOutSideEffect({
//   target: selectRef.current,
//   close: () => setSelect(false),
// });
// }, []);
