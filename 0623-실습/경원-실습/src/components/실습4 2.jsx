import React, { useState } from "react";

function Slider(){
  const images = [
    "bk.jpg",
    "jk.jpg",
    "jk2.jpg",
    "jk3.jpg",
    "mh.jpg",
    "sk.jpg",
    "sk2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handlePrevClick}>이전</button>
      <img src={images[currentImageIndex]} alt="Slide" style={{ width: '500px'}}/>
      <button onClick={handleNextClick}>다음</button>
    </div>
  );
}

export default Slider;