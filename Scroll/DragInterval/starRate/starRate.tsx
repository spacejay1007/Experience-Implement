import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa6";
import styled from "styled-components";

type StarRateProps = {
  starNum: 5 | 10 | number;
  setStarState: (score: number) => void;
};

export function StarRate({ starNum = 5, setStarState }: StarRateProps) {
  const [score, setScore] = useState<number>(0);
  const [hoverScore, setHoverScore] = useState<number | null>(null);

  const handleStarClick = (newScore: number) => {
    setScore(newScore);
    setStarState(newScore);
  };

  const handleMouseEnter = (newScore: number) => {
    setHoverScore(newScore);
  };

  const handleMouseLeave = () => {
    setHoverScore(null);
  };

  const renderStar = (idx: number) => {
    const currentScore = hoverScore !== null ? hoverScore : score;
    if (idx + 0.5 === currentScore) {
      return <FaStarHalfAlt key={idx} size={32} color="gold" />;
    } else if (idx < currentScore) {
      return <FaStar key={idx} size={32} color="gold" />;
    } else {
      return <FaRegStar key={idx} size={32} color="lightgray" />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: starNum }, (_, idx) => (
        <div
          key={idx}
          style={{ position: "relative" }}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              left: 0,
            }}
            onClick={() => handleStarClick(idx + 0.5)}
            onMouseEnter={() => handleMouseEnter(idx + 0.5)}
          />
          <div
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              right: 0,
            }}
            onClick={() => handleStarClick(idx + 1)}
            onMouseEnter={() => handleMouseEnter(idx + 1)}
          />
          {renderStar(idx)}
        </div>
      ))}
    </div>
  );
}
