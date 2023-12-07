"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./main.css";

export default function Home() {
  const [marginLeft, setMarginLeft] = useState(0);
  const [images, setImages] = useState([
    "/UIUX.svg",
    "/img_dia.svg",
    "/Web standards.svg",
    "/img_dia.svg",
    "/DESIGN.svg",
    "/img_dia.svg",
    "/development.svg",
    "/img_dia.svg",
  ]);

  const swiperStyle = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
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
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div>
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
      <div className="main-contents">
        <div className="main-contents__left" onMouseMove={handleMouseMove}>
          <p className="main-contents__left-title">WORK DETAIL</p>
          <Swiper
            // install Swiper modules
            style={swiperStyle}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Link href="#" className="swiper_link">
                <img src="/img_portfolio01.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
        <div className="main-contents__right">
          <div className="main-contents__right-top">
            <p className="contents-title">ABOUT</p>
            <h2>카카오 워크보드</h2>
            <span>
              워크보드는 업무 정보와 자료를 편리하게 공유하기 위한 웹
              서비스입니다. "카카오워크"라는 종합 업무 플랫폼에 속한 서비스 중
              하나로, 업무 내용을 빠르게 확인할 수 있는 게시판 형태로
              개발되었습니다.
            </span>
            <Link href="" className="btn-bk">
              STORY
              <img src="/icon_down_btn.svg" alt="스토리이동" />
            </Link>
          </div>
          <div className="main-contents__right-bottom">
            <video muted autoPlay loop>
              <source src="/main_play.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div
        className="cuser-pointer"
        style={{
          transform: `translate(${mousePosition.x - 34}px, ${
            mousePosition.y - 34
          }px)`,
        }}
      >
        LINK
      </div>
    </div>
  );
}
