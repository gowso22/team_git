import React, { useState } from "react";
import img01 from "img/01.jpg";
import img02 from "img/02.jpg";
import img03 from "img/03.jpg";
import img04 from "img/04.jpg";
import img05 from "img/05.jpg";

function GalleryApp() {
  const images = [img01, img02, img03, img04, img05];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevImage) => {
      if (prevImage === 0) {
        return images.length - 1;
      } else {
        return prevImage - 1;
      }
    });
  };
  const nextImage = () => {
    setCurrentImageIndex((prevImage) => {
      if (prevImage === images.length - 1) {
        return 0;
      } else {
        return prevImage + 1;
      }
    });
  };
  return (
    <div>
      <h1>이미지 슬라이더</h1>
      <button onClick={prevImage}>이전</button>
      <img
        src={images[currentImageIndex]}
        alt="slider"
        style={{ width: "300px" }}
      />
      <button onClick={nextImage}>다음</button>
    </div>
  );
}

function Training04() {
  return <GalleryApp />;
}
export default Training04;
