"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

// pointer
import { initCursor } from "./Event/cursor";

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

  // 스와이퍼
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
    style: swiperStyle,
    spaceBetween: 50,
    slidesPerView: 1,
  };
  // 스와이퍼

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
        <div className="main-contents__left">
          <p className="main-contents__left-title">WORK DETAIL</p>
          <Swiper {...swiperParams} ref={setSwiper}>
            <SwiperSlide>
              <Link
                data-cursor="link"
                href="https://www.naver.com/"
                className="swiper_link"
              >
                <img src="/img_portfolio01.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                data-cursor="link"
                href="https://www.naver.com/"
                className="swiper_link"
              >
                <img src="/img_portfolio02.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                data-cursor="link"
                href="https://www.naver.com/"
                className="swiper_link"
              >
                <img src="/img_portfolio03.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                data-cursor="link"
                href="https://www.naver.com/"
                className="swiper_link"
              >
                <img src="/img_portfolio04.png" alt="" />
              </Link>
            </SwiperSlide>
            <a
              href="#"
              className="swiper-button-prev"
              data-cursor="block"
              ref={navigationPrevRef}
            ></a>
            <a
              href="#"
              className="swiper-button-next"
              data-cursor="block"
              ref={navigationNextRef}
            ></a>
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
            <Link
              className="btn-bk"
              data-cursor="block"
              href="https://www.naver.com/"
            >
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
    </div>
  );
}
