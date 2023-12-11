"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// pointer
import { initCursor } from "@/app/Event/cursor";

// import "../../main.css";
import "../../story.css";

export default function page() {
  const [marginLeft, setMarginLeft] = useState(0);
  const [images, setImages] = useState([
    "/img_stroy_text01.svg",
    "/img_dia_b.svg",
    "/img_stroy_text02.svg",
    "/img_dia_b.svg",
    "/img_stroy_text01.svg",
    "/img_dia_b.svg",
    "/img_stroy_text02.svg",
    "/img_dia_b.svg",
  ]);

  useEffect(() => {
    //마우스포인터
    initCursor({
      enableAutoTextCursor: true,
      enableLighting: true,
      blockStyle: {
        radius: "auto",
      },
    });
    //마우스포인터

    // 텍스트이동바
    const interval = setInterval(() => {
      setMarginLeft((prevMarginLeft) => prevMarginLeft + 5);
    }, 100);

    let imgNum = 0;
    let imgMaxNum = images.length;
    const imageInterval = setInterval(() => {
      setImages((prevImages) => {
        console.log(prevImages[imgNum]);
        const updatedImages = [
          ...prevImages,
          prevImages[imgNum],
          prevImages[imgNum + 1],
        ];
        imgNum += 2;
        if (imgMaxNum < imgNum) {
          imgNum = 0;
        }
        return updatedImages;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
    };
    // 텍스트이동바
  }, []);
  return (
    <div>
      <div className="story-contents">
        <div className="story-contents__left">
          <p className="contents-title">CAREER</p>
        </div>
        <div className="story-contents__right">
          <p className="contents-title">TOOL</p>
        </div>
      </div>
      <div className="move-text-wrap">
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              style={{ transform: `translate(-${marginLeft}px)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
