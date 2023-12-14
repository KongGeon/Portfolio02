"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// pointer
import { initCursor, updateCursor } from "@/app/Event/cursor";

import "../../css/portfolio.css";

export default function page() {
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
  }, []);
  return (
    <div className="portfolio">
      <div className="portfolio-contents">
        <div className="portfolio-contents__left">
          <img src="/img_portfolio_detail01.png" alt="포폴1" />
        </div>
        <div className="portfolio-contents__right">
          <p className="contents-title">WORK DETAIL</p>
          <h2 className="portfolio-title" data-cursor="text">
            타이틀
          </h2>
          <div className="portfolio-skill">
            <p>REACT</p>
            <p>JQUERY</p>
            <p>DESIGN</p>
          </div>
          <ul className="portfolio-data">
            <li>
              <span>작업일</span>
              <p>2023.01 ~ 2023.05</p>
            </li>
            <li>
              <span>기여도</span>
              <p>100%</p>
            </li>
          </ul>
          <p className="portfolio-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt
            quos porro dolor est, quisquam nostrum quas voluptatem ab,
            voluptatibus nam praesentium cumque alias eius debitis recusandae
            provident enim? Placeat?
          </p>
          <div className="portfolio-step-wrap step4-5">
            <div className="portfolio-step step01">
              <div className="circle"></div>
              <p className="step-title">기획</p>
            </div>
            <div className="portfolio-step step02">
              <div className="circle"></div>
              <p className="step-title">디자인</p>
            </div>
            <div className="portfolio-step step03">
              <div className="circle"></div>
              <p className="step-title">퍼블</p>
            </div>
            <div className="portfolio-step step04">
              <div className="circle"></div>
              <p className="step-title">프론트</p>
            </div>
            <div className="portfolio-step step05">
              <div className="circle"></div>
              <p className="step-title">백</p>
            </div>
            <div className="step-bar">
              <div className="step-bar-inner"></div>
            </div>
          </div>
          <Link
            className="btn-bk"
            data-cursor="block"
            href="https://www.naver.com/"
          >
            LINK
            <img src="/icon_down_btn.svg" alt="스토리이동" />
          </Link>{" "}
        </div>
      </div>
      <div className="portfolio-contents__bottom"></div>
    </div>
  );
}
