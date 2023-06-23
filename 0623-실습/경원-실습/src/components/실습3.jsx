import React from "react";

function Random(props){
  const {min,max} = props;
  const randomNum = Math.floor(Math.random() * (max-min +1)) + min;

  return(
    <div>
      <h1>랜덤 숫자: {randomNum}</h1>
    </div>
  )
}

export default Random;