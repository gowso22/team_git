import React, { useState } from "react";
import img01 from "./img/01.jpg"
import img02 from "./img/02.jpg"
import img03 from "./img/03.jpg"

function Practice04(){

   const images = [img01, img02, img03];
   const [imgIndex, setImgIndex] = useState(0);

   const onPrevClick = () =>{
    if(imgIndex === 0){
        setImgIndex(images.length - 1);
    }else{
        setImgIndex((current) => current - 1);
    }
   }

   const onNextClick = () =>{
    if(imgIndex === images.length - 1){
        setImgIndex(0);
    }else{
        setImgIndex((current) => current + 1);
    }
   }
   console.log(imgIndex)
    return(
        <div>
          <h1>실습4</h1>
          <button onClick={onPrevClick}>이전</button>
          <img src = {images[imgIndex]}/>
          <button onClick={onNextClick}>다음</button>
        </div>
    );

}

export default Practice04;