"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// pointer
import { initCursor, updateCursor, disposeCursor } from "@/app/Event/cursor";

// tab
import CategoryFilter from "@/app/Components/CategoryFilter";

import "../../css/portfolio.css";

export default function page() {
  // 모바일여부
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const user = navigator.userAgent;
    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
      setMobile(false);
      console.log("모바일임");
    } else {
      console.log("PC임");
      //마우스포인터
      console.log("포인터온");
      initCursor({
        enableAutoTextCursor: true,
        enableLighting: true,
        blockStyle: {
          radius: "auto",
        },
      });
      updateCursor();
    }
  }, [mobile]);

  // tool
  const categories = [
    {
      name: "ALL",
      value: "all",
    },
    {
      name: "PLAN",
      value: "plan",
    },
    {
      name: "DESIGN",
      value: "design",
    },
    {
      name: "MARKUP",
      value: "markup",
    },
    {
      name: "PRONT",
      value: "pront",
    },
    {
      name: "BACK",
      value: "back",
    },
  ];
  const categoryList = [
    {
      category: "design,markup,front",
      imgName: "SI",
      imgFileName: "img_portfolio_SI.svg",
      imgDetail: "img_portfolio_detailSI.png",
    },
    {
      category: "plan,design",
      imgName: "외국어학습앱",
      imgFileName: "img_portfolio01.png",
      imgDetail: "img_portfolio_detail01.png",
    },
    {
      category: "design,pront,back",
      imgName: "금강회계법인",
      imgFileName: "img_portfolio02.png",
      imgDetail: "img_portfolio_detail02.png",
    },
    {
      category: "plan,design",
      imgName: "아비스몰웹앱",
      imgFileName: "img_portfolio03.png",
      imgDetail: "img_portfolio_detail03.png",
    },
    {
      category: "markup",
      imgName: "청년인제데이터베이스",
      imgFileName: "img_portfolio04.png",
      imgDetail: "img_portfolio_detail04.png",
    },
    {
      category: "design",
      imgName: "신한 시나몬",
      imgFileName: "img_portfolio05.png",
      imgDetail: "img_portfolio_detail05.png",
    },
    {
      category: "markup,front",
      imgName: "아비스몰웹",
      imgFileName: "img_portfolio06.png",
      imgDetail: "img_portfolio_detail06.png",
    },
    {
      category: "markup",
      imgName: "공직박람회",
      imgFileName: "img_portfolio07.png",
      imgDetail: "img_portfolio_detail07.png",
    },
    {
      category: "design,markup",
      imgName: "인드음악플랫폼",
      imgFileName: "img_portfolio08.png",
      imgDetail: "img_portfolio_detail08.png",
    },
    {
      category: "markup,pront",
      imgName: "오늘의나관리자페이지",
      imgFileName: "img_portfolio09.png",
      imgDetail: "img_portfolio_detail09.png",
    },
    {
      category: "plan,design,markup,pront,back",
      imgName: "제이로그",
      imgFileName: "img_portfolio10.png",
      imgDetail: "img_portfolio_detail10.png",
    },
    {
      category: "design,markup,pront",
      imgName: "상상아이디",
      imgFileName: "img_portfolio11.png",
      imgDetail: "img_portfolio_detail11.png",
    },
    {
      category: "plan,design,pront",
      imgName: "애완동물용품플랫폼",
      imgFileName: "img_portfolio12.png",
      imgDetail: "img_portfolio_detail12.png",
    },
  ];
  const [multiCategory, setMultiCatecory] = useState("all");
  const [showMultiList, setMultiShowList] = useState(categoryList);
  const [imgSrc, setImgSrc] = useState("img_portfolio_detail01.png");
  const getCategory = (item, index) => {
    return (
      <Link
        className="category-box"
        key={item.imgName}
        href="#"
        data-cursor="block"
        onClick={() => {
          setImgSrc(item.imgDetail);
          document.querySelector(".portfolio-contents__left").scrollTop = 0;
        }}
      >
        <img
          className="category-skill"
          src={"/" + item.imgFileName}
          alt={item.imgName}
        />
      </Link>
    );
  };
  // 멀티
  useEffect(() => {
    setMultiShowList(
      categoryList.filter((item) => {
        if (multiCategory === "all") return true;
        if (!Array.isArray(multiCategory)) {
          setMultiCatecory(multiCategory.split(","));
        }
        //multiCategory01에 선택된 것이 모두 포함되어 있는 것 선택
        let listArray = item.category.split(",");
        // 카테고리 단일 선택한 경우
        if (multiCategory.length === 1) {
          if (listArray.includes(multiCategory[0])) {
            return true;
          }
        } else {
          // 카테고리 다중 선택한 경우
          let a = listArray;
          let b = multiCategory;
          if (Array.isArray(b) && b.every((item) => a.includes(item))) {
            return true;
          }
        }
        return false;
      })
    );
    setTimeout(() => {
      const user = navigator.userAgent;
      if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        console.log("포인터 오프");
      } else {
        console.log("포인터 다시 온");
        disposeCursor();
        initCursor({
          enableAutoTextCursor: true,
          enableLighting: true,
          blockStyle: {
            radius: "auto",
          },
        });
      }
    }, 100);
  }, [multiCategory]);

  useEffect(() => {
    document.querySelector("header").classList.add("active-on");
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio-contents">
        <div className="portfolio-contents__left">
          <img src={"/" + imgSrc} alt="포트폴리오전체화면" />
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
      <div className="portfolio-contents__bottom">
        <CategoryFilter
          categories={categories}
          category={multiCategory}
          setMultiCatecory={setMultiCatecory}
        />
        <div className="category02">
          {showMultiList.map((item, index) => getCategory(item, index))}
        </div>
      </div>
    </div>
  );
}
