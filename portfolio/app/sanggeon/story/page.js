"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// pointer
import { initCursor, updateCursor } from "@/app/Event/cursor";

// import "../../main.css";
import "../../css/story.css";

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
    console.log("story");
    //마우스포인터
    initCursor({
      enableAutoTextCursor: true,
      enableLighting: true,
      blockStyle: {
        radius: "auto",
      },
    });
    updateCursor();

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
    <div className="story">
      <div className="story-contents">
        <div className="story-contents__left">
          <p className="contents-title">CAREER</p>
          <ul>
            <li>
              <p>콜라보스튜디오</p>
              <p>웹에이전시</p>
              <p>대리</p>
              <p>2021. 3 ~ </p>
              <p>웹디자인/프론트엔드</p>
            </li>
            <li>
              <p>크몽·아이디어스</p>
              <p>재능판매플랫폼</p>
              <p>작가</p>
              <p>2019. 8 ~ </p>
              <p>캘리그라피·폰트·일러스트 제작</p>
            </li>
            <li>
              <p>(유)미광기획</p>
              <p>광고대행사</p>
              <p>사원</p>
              <p>2016.4 ~ 2019.3</p>
              <p>옥외광고디자인</p>
            </li>
          </ul>
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
      <div className="story-contents__bottom">
        <div className="story-contents__bottom-top">
          <p className="contents-title">LISENSE</p>
          <ul>
            <li>
              <p>정보처리기사</p>
              <p>한국산업인력공단</p>
              <p>2022.09</p>
            </li>
            <li>
              <p>웹디자인기능사</p>
              <p>한국산업인력공단</p>
              <p>2018.09</p>
            </li>
            <li>
              <p>컴퓨터그래픽스운용기능사</p>
              <p>한국산업인력공단</p>
              <p>2015.12</p>
            </li>
            <li>
              <p>컴퓨터활용능력 2급</p>
              <p>대한상공회의소</p>
              <p>2019.08</p>
            </li>
          </ul>
        </div>
        <div className="story-contents__bottom-bottom">
          <p className="contents-title">ETC</p>
          <p>
            GTQ일러스트 1급, 그래픽기술자격(GTQ) 1급, 워드프로세스 1급, 1종보통
            운전면허
          </p>
        </div>
      </div>
    </div>
  );
}
