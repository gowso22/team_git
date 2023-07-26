import React, { useState, useEffect } from "react";

const RandomNumberGenerator = ({ min, max }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setNumber(randomNumber);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [min, max]);

  return (
    <div>
      <h1>랜덤 번호 생성기</h1>
      <p>
        범위: {min}-{max}
      </p>
      <p>현재 번호: {number}</p>
    </div>
  );
};

function Training03() {
  return <RandomNumberGenerator min={1} max={100} />;
}
export default Training03;
