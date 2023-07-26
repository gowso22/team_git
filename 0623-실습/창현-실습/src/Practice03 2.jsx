import React, { useState } from "react";

function RandomNumber(props) {
    const [num, setNum] = useState(0);

    const randomNumClick = () =>{
        // random 0~1
        // 만약 50 ~ 100
        // random * 100 - 50
        // random 0~50
        // + 50 >> 50.xxxxxxxx < ran <= 100
        setNum(Number(Math.floor(Math.random() * (props.max - props.min + 1 ) + props.min)))
    }

    console.log(num);
    
    return (
      <div>
        <h1>실습 3</h1>
        <button onClick={randomNumClick}>번호 생성</button>
        <h3>나온 값 : {num}</h3>
      </div>
    );
  }



function Practice03(){
   
    return(
        <div>
            <RandomNumber min={1} max={100} />
        </div>
    );

}

export default Practice03;