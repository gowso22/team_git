import React, { useState, useEffect } from "react";

function RandomNumberMaker({min, max}){
  const[number, setNumber] = useState(0);

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
      <h1>Number Maker</h1>
      <p>Range: {min} ~ {max}</p>
      <p>Current Number: {number}</p>
    </div>
  );
}

function NumberMaker(){
  return <NumberMaker min={1} max={100} />;
}

export default RandomNumberMaker;