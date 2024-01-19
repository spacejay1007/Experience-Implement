### 별점주기

#### DragInterval 을 공부하면서 별점 주기 만들어보기

- type 부터 살펴보자

  ```
  type StarRateProps = {
    starNum: 5 | 10 | number;
    setStarState: (score: number) => void;
  };
  ```

  - starNum : 표시할 별 수를 결정하는 소품입니다. '5', '10' 또는 임의의 숫자를 허용합니다.
  - setStarState : import 하는 UI 를 보여주기 위함

- `const [score, setScore] = useState<number>(0);`
  - score: 현재 평가 점수를 보유하는 상태 변수입니다.
- `const [hoverScore, setHoverScore] = useState<number | null>(null);`

  - hoverScore: 별 위로 마우스를 가져갈 때 평가 점수를 임시로 저장하는 데 사용되는 상태 변수입니다.

  const handleStarClick = (newScore: number) => {
  setScore(newScore);
  setStarState(newScore);
  };

  - handleStarClick: 별을 클릭할 때 점수를 설정합니다.

  const handleMouseEnter = (newScore: number) => {
  setHoverScore(newScore);
  };

  - handleMouseEnter: 별 위로 마우스를 가져갈 때 hoverScore를 설정하여 별 반 개를 표시할 수 있도록 합니다.

  const handleMouseLeave = () => {
  setHoverScore(null);
  };

  - handleMouseLeave: 마우스가 별표를 떠날 때 hoverScore를 null로 재설정합니다.

- renderStar()
- renderStar 함수는 hoverScore 및 score를 기반으로 각 별이 표시되는 방식(가득 차거나, 절반 또는 비어 있음)을 결정한다.
- hoverScore가 null이 아닌 경우 score보다 우선하여 채워지는 것을 볼 수 있게 한다(클릭하지 않는다면).
- 'FaStarHalfAlt'는 반별에 사용되며, 'FaStar'는 가득 찬 별에, 'FaRegStar'는 빈 별에 사용됩니다.

- return 이후 UI 상
  - 구성 요소는 Array.from을 사용하여 starNum을 기반으로 별 배열을 만들었다. 각 별표는 두 개의 내부 div 요소가 있는 div 요소입니다. 왼쪽 절반(너비 50%)은 마우스 이벤트를 수신하여 별점 절반 등급을 설정합니다. 오른쪽 절반(너비 50%)은 만점 등급을 설정하기 위해 마우스 이벤트를 수신합니다. 두 절반 모두 왼쪽 절반에는 left: 0, 오른쪽 절반에는 right: 0으로 절대 위치 지정을 사용합니다. 평가 상호작용을 처리하기 위해 마우스 이벤트 핸들러(onClick, onMouseEnter, onMouseLeave)가 이 부분에 연결됩니다.
