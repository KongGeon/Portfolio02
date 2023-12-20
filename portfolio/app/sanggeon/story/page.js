"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// swiper
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// pointer
import { initCursor, updateCursor } from "@/app/Event/cursor";

// tab
import CategoryFilter from "@/app/Components/CategoryFilter";

import "../../css/story.css";

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

  // tool
  const categories = [
    {
      name: "ALL",
      value: "all",
    },
    {
      name: "DESIGN",
      value: "design",
    },
    {
      name: "PRONT",
      value: "pront",
    },
    {
      name: "BACK",
      value: "back",
    },
    {
      name: "ETC",
      value: "etc",
    },
  ];

  const categoryList = [
    {
      category: "design",
      imgName: "포토샵",
      imgFileName: "img_ps.png",
    },
    {
      category: "design",
      imgName: "일러스트레이터",
      imgFileName: "img_ai.png",
    },
    {
      category: "design",
      imgName: "어도비XD",
      imgFileName: "img_xd.png",
    },
    {
      category: "design",
      imgName: "피그마",
      imgFileName: "img_fi.png",
    },
    {
      category: "pront",
      imgName: "HTML",
      imgFileName: "img_html.png",
    },
    {
      category: "pront",
      imgName: "CSS",
      imgFileName: "img_css.png",
    },
    {
      category: "pront",
      imgName: "자바스크립트",
      imgFileName: "img_js.png",
    },
    {
      category: "pront",
      imgName: "제이쿼리",
      imgFileName: "img_jq.png",
    },
    {
      category: "pront",
      imgName: "넥스트js",
      imgFileName: "img_next.png",
    },
    {
      category: "pront",
      imgName: "리액트",
      imgFileName: "img_react.png",
    },
    {
      category: "pront",
      imgName: "리액트네이티브",
      imgFileName: "img_react_native.png",
    },
    {
      category: "back",
      imgName: "몽고DB",
      imgFileName: "img_mong.png",
    },
    {
      category: "back",
      imgName: "AWS",
      imgFileName: "img_aws.png",
    },
    {
      category: "back",
      imgName: "파이어베이스",
      imgFileName: "img_fire.png",
    },
    {
      category: "back",
      imgName: "노드js",
      imgFileName: "img_node.png",
    },

    {
      category: "etc",
      imgName: "에프터이팩트",
      imgFileName: "img_ae.png",
    },
    {
      category: "etc",
      imgName: "프리미어프로",
      imgFileName: "img_pr.png",
    },
    {
      category: "etc",
      imgName: "VSCODE",
      imgFileName: "img_vs.png",
    },
    {
      category: "etc",
      imgName: "그누보드",
      imgFileName: "img_gnu.png",
    },
    {
      category: "etc",
      imgName: "카페24",
      imgFileName: "img_cafe24.png",
    },
  ];

  //tap
  const [category, setCatecory] = useState("all");
  const [showList, setShowList] = useState(categoryList);
  const getCategory = (item, index) => {
    return (
      <div className="category-box" key={item.imgName}>
        <img
          className="category-skill"
          src={"/" + item.imgFileName}
          alt={item.imgName}
        />
      </div>
    );
  };
  useEffect(() => {
    setShowList(
      categoryList.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  useEffect(() => {
    console.log("story");
    document.querySelector("header").classList.remove("active-on");

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
    }, 5000);

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
          <CategoryFilter
            categories={categories}
            category={category}
            setCatecory={setCatecory}
          />
          <div className="category01">
            {showList.map((item, index) => getCategory(item, index))}
          </div>
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
