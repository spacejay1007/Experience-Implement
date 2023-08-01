// 해당하는 타겟의 스크롤의 밑부분을 감지하면 이벤트 호출
import { useEffect, useState } from "react";

interface Props {
  threshold?: number; // 대상 요소가 root 에 지정된 요소 내 얼마나 들어올지 비율로 확인 => 0 ~ 1.0 으로 넣어야한다.
  // threshold: 1.0 은 대상 요소가 root 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미합니다
  rootMargin?: string; // 스크롤 대상 마진
  root: Element; // 스크롤 대상 타겟
  target: Element; // 타겟
  onIntersect: IntersectionObserverCallback; // 감지됐을때 콜백 이벤트
}

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
}: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!root || !target || threshold > 1) return;
    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(target);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold, mount]);
};
