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

import "../../../css/portfolio.css";

export default function page(props) {
  // 모바일여부
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const user = navigator.userAgent;
    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
      setMobile(false);
      // console.log("모바일임");
    } else {
      // console.log("PC임");
      //마우스포인터
      // console.log("포인터온");
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
      name: "Front",
      value: "front",
    },
    {
      name: "BACK",
      value: "back",
    },
  ];
  const categoryList = [
    {
      id: "img18",
      category: "design,markup,front",
      imgName: "포트폴리오 사이트",
      imgFileName: "img_portfolio18.png",
      imgDetail: "img_portfolio_detail18.png",
      date: "2024.1 ~ 2024.1",
      stack: ["PIGMA", "NEXTjs", "Vercel"],
      step: "step1-4",
      per: "100%",
      text: "기획, UI/UX 설계, UI/UX 디자인, Markup, frontend 개발",
      link: "https://portfolio-ebon-one-82.vercel.app/knockplace/home",
    },
    {
      id: "img17",
      category: "design,markup,front",
      imgName: "Knock MarkUp",
      imgFileName: "img_portfolio17.png",
      imgDetail: "img_portfolio_detail17.png",
      date: "2023.10 ~ 2023.12",
      stack: ["PIGMA", "NEXTjs", "Vercel"],
      step: "step1-4",
      per: "100%",
      text: "기획, UI/UX 설계, UI/UX 디자인, Markup, frontend 개발",
      link: "https://mark-up-mu.vercel.app/",
    },
    {
      id: "img13",
      category: "design,markup",
      imgName: "KOCAS 암생존자헬스케어연구단",
      imgFileName: "img_portfolio13.png",
      imgDetail: "img_portfolio_detail13.png",
      date: "2023.7 ~ 2023.12",
      stack: ["PIGMA", "전자정부프레임워크", "JAVASCRIPT", "JQUERY"],
      step: "step2-3",
      per: "100%",
      text: "UI/UX 설계, UI/UX 디자인, Markup, MDI 시스템 제작",
    },
    {
      id: "img14",
      category: "design,markup",
      imgName: "AICA 안심구역포털",
      imgFileName: "img_portfolio14.png",
      imgDetail: "img_portfolio_detail14.png",
      date: "2023.7 ~ 2023.12",
      stack: ["PIGMA", "전자정부프레임워크", "JAVASCRIPT", "JQUERY", "REACT"],
      step: "step2-3",
      per: "100%",
      text: "Markup 제작, CK에디터 테이블 커스텀 생성 기능 추가(react, js버전)",
    },
    {
      id: "img15",
      category: "design,markup",
      imgName: "건국대학교 데이터 심의포털",
      imgFileName: "img_portfolio15.png",
      imgDetail: "img_portfolio_detail15.png",
      date: "2023.4 ~ 2023.5",
      stack: ["PIGMA", "전자정부프레임워크", "JAVASCRIPT", "JQUERY"],
      step: "step2-3",
      per: "70%",
      text: "UI/UX 디자인, Markup 제작",
    },
    {
      id: "img16",
      category: "design,markup,front",
      imgName: "OPENLAB",
      imgFileName: "img_portfolio16.png",
      imgDetail: "img_portfolio_detail16.png",
      date: "2022.12 ~ 2023.3",
      stack: ["PIGMA", "전자정부프레임워크", "JAVASCRIPT", "JQUERY"],
      step: "step2-4",
      per: "40%",
      text: "UI/UX 설계, UI/UX 디자인, Markup, 게시판·일정 등 frontend 개발",
    },
    {
      id: "img01",
      category: "plan,design",
      imgName: "TTMIK",
      imgFileName: "img_portfolio01.png",
      imgDetail: "img_portfolio_detail01.png",
      date: "2022.2 ~ 2022.6",
      stack: ["PIGMA"],
      step: "step2",
      per: "50%",
      text: "TTMIK은 100만 유튜브 TALK TO ME IN KOREAN의 학습어플리케이션입니다. 자체적으로 제작하는 책을 읽고 듣고 문제를 풀며 학습할 수 있도록 개발되고 있습니다.(개발중)",
      link: "https://www.figma.com/file/6ozvAj4VnAmxf27wfiz45X/%ED%8B%B0%ED%8B%B0%EB%AF%B9?type=design&node-id=2%3A7797&mode=design&t=GEvAoidVcByCc6n0-1",
    },
    {
      id: "img02",
      category: "design,front,back",
      imgName: "금강회계법인",
      imgFileName: "img_portfolio02.png",
      imgDetail: "img_portfolio_detail02.png",
      date: "2022.5 ~ 2022.7",
      stack: ["PIGMA", "IMWEB"],
      step: "step2-4",
      per: "100%",
      text: "금강회계법인의 소개사이트를 아임웹을 이용하여 개발했습니다.",
      link: "https://keumkangcpa.com/",
    },
    {
      id: "img03",
      category: "plan,design",
      imgName: "아비스몰웹앱",
      imgFileName: "img_portfolio03.png",
      imgDetail: "img_portfolio_detail03.png",
      date: "2022.4 ~ 2022.5",
      stack: ["PIGMA"],
      step: "step2",
      per: "70%",
      text: "아비스몰웹앱은 현대모비스 앱 내부에 자동차용품이나 썬팅과 같은 서비스를 구매하는 사이트입니다. 현대의 아이덴티티와 같은 디자인을 통일되게 적용하여 디자인하였습니다.",
      link: "https://abys-service.co.kr/hyundai/cmapp.php",
    },
    {
      id: "img04",
      category: "markup",
      imgName: "청년DB",
      imgFileName: "img_portfolio04.png",
      imgDetail: "img_portfolio_detail04.png",
      date: "2022.9 ~ 2022.10",
      stack: ["JAVASCRIPT"],
      step: "step3",
      per: "100%",
      text: "청년DB는 국무조정실에서 관리하는 청년과 정책담당자를 이어주는 쌍방향 매칭 플랫폼입니다. WA인증을 위해 웹표준과 웹접근성에 맞도록 개발하였습니다.",
      link: "https://www.2030db.go.kr/",
    },
    {
      id: "img05",
      category: "design",
      imgName: "신한 시나몬",
      imgFileName: "img_portfolio05.png",
      imgDetail: "img_portfolio_detail05.png",
      date: "2022.8 ~ 2022.10",
      stack: ["PIGMA"],
      step: "step2",
      per: "5%",
      text: "시나몬은 신한은행에서 개발한 메타버스 서비스입니다. 서비스 UI중 아이콘 디자인과 홍보배너 디자인에 참여했습니다.",
      link: "https://shinamon.co.kr/",
    },
    {
      id: "img06",
      category: "markup,front",
      imgName: "아비스몰",
      imgFileName: "img_portfolio06.png",
      imgDetail: "img_portfolio_detail06.png",
      date: "2022.9 ~ 2022.11",
      stack: ["PIGMA", "CAFE24"],
      step: "step3-4",
      per: "70%",
      text: "카페24의 레퍼런스 구매 후 수정하여 아비스몰 쇼핑몰 사이트를 개발했습니다.",
      link: "https://abysmall.cafe24.com/",
    },
    {
      id: "img07",
      category: "markup",
      imgName: "2022 온라인공직박람회",
      imgFileName: "img_portfolio07.png",
      imgDetail: "img_portfolio_detail07.png",
      date: "2022.11 ~ 2023.11",
      stack: ["JAVASCRIPT", "JQUERY"],
      step: "step3",
      per: "70%",
      text: "온라인으로 개최된 2022 공직박람회는 도트게임풍의 독특한 UI를 여러 디바이스에 대응하여 제대로 반응형이 되게 하는 것에 집중하여 개발되었습니다.",
      link: "https://publicservicefair.codexbridge.co.kr/2022_index/pages/page04/quest.php",
    },
    {
      id: "img08",
      category: "design,markup",
      imgName: "인디음악플랫폼 웹&웹앱",
      imgFileName: "img_portfolio08.png",
      imgDetail: "img_portfolio_detail08.png",
      date: "2022.7 ~ 2022.12",
      stack: ["PIGMA", "JAVASCRIPT"],
      step: "step2-3",
      per: "100%",
      text: "HOOK는 인디음원을 펀딩구매 및 등록할 수 있는 플랫폼입니다. 사용자, 업로더, 관리자에 맞춰 다른 디자인으로 개발되었습니다.",
      link: "https://www.figma.com/file/dxgG61G2IfiiMUguNC3Rec/HOOK-%EC%9D%B8%EB%94%94%EC%9D%8C%EC%95%85?type=design&node-id=0%3A1&mode=design&t=8eQa5bZdlE8C1HdA-1",
    },
    {
      id: "img09",
      category: "markup,front",
      imgName: "오늘의나 관리자페이지",
      imgFileName: "img_portfolio09.png",
      imgDetail: "img_portfolio_detail09.png",
      date: "2023.6 ~ 2023.6",
      stack: ["JAVASCRIPT", "REACT"],
      step: "step3-4",
      per: "100%",
      text: "오늘의 나 SNS 관리자페이지를 리액트를 이용하여 프론트엔드 개발했습니다.",
      link: "https://play.google.com/store/apps/details?id=com.todaysme.most&hl=ko&gl=US",
    },
    {
      id: "img10",
      category: "plan,design,markup,front,back",
      imgName: "제이로그",
      imgFileName: "img_portfolio10.png",
      imgDetail: "img_portfolio_detail10.png",
      date: "2022.10 ~ 2023.4",
      stack: ["PIGMA", "JAVASCRIPT", "REACT_NATIVE", "EXPO"],
      step: "step1-5",
      per: "100%",
      text: "제이로그는 현재 1인개발중인 기독교 묵상 어플리케이션으로 현재 배포중 에러로 수정중에 있습니다.",
      link: "https://www.figma.com/file/3Ooa14H2jDSvYKWrh8DfkJ/%EB%82%98%EB%88%94%EC%95%B1?type=design&node-id=373%3A1125&mode=design&t=znxZkF0iEnntYicy-1",
    },
    {
      id: "img11",
      category: "design,markup,front,back",
      imgName: "상상아이디",
      imgFileName: "img_portfolio11.png",
      imgDetail: "img_portfolio_detail11.png",
      date: "2022.7 ~ 2022.9",
      stack: ["ADOBE_XD", "GNUBOARD"],
      step: "step2-4",
      per: "100%",
      text: "인테리어 업체 상상아이디의 회사소개 페이지를 그누보드를 이용해 개발했습니다.",
      link: "http://www.sangsangid.co.kr/",
    },
    {
      id: "img12",
      category: "plan,design,markup",
      imgName: "올댓펫",
      imgFileName: "img_portfolio12.png",
      imgDetail: "img_portfolio_detail12.png",
      date: "2021.8 ~ 2022.8",
      stack: ["ADOBE_XD", "JAVASCRIPT"],
      step: "step1-3",
      per: "50%",
      text: "올댓펫은 SNS, 쇼핑, 커뮤니티 기능을 가진 펫 인테리어플랫폼입니다. 기획에 일부 참여했으며 디자인, 마크업을 담당해 개발했습니다.",
      link: "https://www.allthat.pet/",
    },
  ];

  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const [thisPage, setThisPage] = useState("");
  const [thisCategory, setThisCategory] = useState();

  // thisPage의 값이 바뀌면 thisCategory 값이 해당 내용으로 지정

  useEffect(() => {
    setThisPage(props.params.id);
    // console.log("현재페이지", props.params.id);
    let arr = categoryList.find((e) => {
      if (e.id === props.params.id) {
        return true;
      }
    });
    if (!arr) {
      alert("없는 포트폴리오 이름입니다.");
      arr = categoryList.find((e) => {
        if (e.id === "img01") {
          return true;
        }
      });
    }
    setThisCategory(arr);
  }, [thisPage]);

  // console.log(thisCategory);
  // console.log(thisCategory && thisCategory.imgDetail);
  const [multiCategory, setMultiCatecory] = useState("all");
  const [showMultiList, setMultiShowList] = useState(categoryList);
  const getCategory = (item, index) => {
    return (
      <Link
        className="category-box"
        key={item.imgName}
        href={item.id}
        data-cursor="block"
        onClick={() => {
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
        // console.log("포인터 오프");
      } else {
        // console.log("포인터 다시 온");
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
    //포폴리스트 선택시 active-on 클래스 추가
    let thisList =
      thisCategory &&
      document.querySelector("a[href='" + thisCategory.id + "']");
    thisCategory &&
      thisList &&
      document
        .querySelector("a[href='" + thisCategory.id + "']")
        .classList.add("active-on");
  }, [showMultiList]);

  useEffect(() => {
    document.querySelector("header").classList.add("active-on");
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio-contents">
        <div className="portfolio-contents__left">
          {thisCategory && (
            <img
              src={"/" + thisCategory?.imgDetail}
              alt={thisCategory?.imgName + " 이미지"}
            />
          )}
        </div>
        <div className="portfolio-contents__right">
          <p className="contents-title">WORK DETAIL</p>
          <h2 className="portfolio-title" data-cursor="text">
            {thisCategory?.imgName}
          </h2>
          <div className="portfolio-skill">
            {thisCategory?.stack.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <ul className="portfolio-data">
            <li>
              <span>작업일</span>
              <p>{thisCategory?.date}</p>
            </li>
            {/* 회사페이지에서는 제외 */}
            {/* <li>
              <span>기여도</span>
              <p>{thisCategory?.per}</p>
            </li> */}
          </ul>
          <p className="portfolio-text">{thisCategory?.text}</p>
          <div className={"portfolio-step-wrap " + thisCategory?.step}>
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
              <p className="step-title">마크업</p>
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
          {thisCategory?.link && (
            <Link
              className="btn-bk"
              data-cursor="block"
              href={thisCategory?.link}
            >
              LINK
              <img
                src="/icon_down_btn.svg"
                alt="포트폴리오 상세페이지로 이동"
              />
            </Link>
          )}
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
