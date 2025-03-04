"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Components/ConsoleLog";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

// pointer
import { initCursor, updateCursor } from "./Event/cursor";

import MainSwiperData from "./Components/MainSwiperData";

import { usePathname } from "next/navigation";

import "./css/main.css";

export default function Home() {
  // 모바일여부
  const [mobile, setMobile] = useState(true);

  const pathname = usePathname();

  const isSanggeon = pathname.startsWith("/sanggeon");
  // const isKnockplace = pathname.startsWith("/knockplace");
  const isKnockplace = pathname.startsWith("/");

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
  const [categoryList, setCategoryList] = useState([
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
  ]);

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
    // spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
  };
  // 스와이퍼

  // 스와이퍼 정보 더보기 버튼
  const [swiperDataOpen, setSwiperDataOpen] = useState("main-portfolio-wrap");

  function swiperOpen(e) {
    // e.target.closest(".main-portfolio-wrap").classList.toggle("active-on");
    if (swiperDataOpen === "main-portfolio-wrap") {
      setSwiperDataOpen("main-portfolio-wrap active-on");
    } else {
      setSwiperDataOpen("main-portfolio-wrap");
    }
  }

  // 스와이퍼 정보 더보기 버튼

  useEffect(() => {
    // console.log("home");
    document.querySelector("header").classList.remove("active-on");

    // 텍스트이동바
    const interval = setInterval(() => {
      setMarginLeft((prevMarginLeft) => prevMarginLeft + 5);
    }, 100);

    let imgNum = 0;
    let imgMaxNum = images.length;
    const imageInterval = setInterval(() => {
      setImages((prevImages) => {
        // console.log(prevImages[imgNum]);
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

  // 텍스트 타이핑 효과

  // const textList = [
  //   "Web",
  //   "FrontEnd",
  //   "UI/UX",
  //   "React",
  //   "Homebody",
  //   "Mark Up",
  // ];
  const textList = [
    "공공기관",
    "병원",
    "변호사, 법무사",
    "인테리어",
    "뷰티",
    "제조업",
    "프렌차이즈",
    "모든 회사",
  ];
  const [actionText, setActionText] = useState("");
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [textBack, setTextBack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      let thisText = textList[textIndex].split("");
      //텍스트 타이핑 삭제
      if (textBack) {
        if (count === 0) {
          //모두 삭제했을 경우
          setTimeout(() => {
            setTextBack(false);
            setTextIndex((textIndex + 1) % textList.length);
          }, 1000);
        } else {
          //더 삭제해야할 경우
          setCount(count - 1);
          setActionText(actionText.slice(0, -1));
        }
      }
      //텍스트타이필 추가인데 텍스트 꽉참
      else if (thisText.length === count) {
        setTimeout(() => {
          setTextBack(true); //이제부터 삭제로 변경
        }, 1000);
      }
      //텍스트타이필 추가
      else {
        setCount(count + 1);
        setActionText(actionText + thisText[count]);
      }
    }, 100);
  }, [count, textIndex, textBack]);

  return (
    <div className="home">
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
            {categoryList.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  data-cursor="link"
                  href={"portfolio/" + item.id}
                  className="swiper_link"
                >
                  <img src={"/" + item.imgFileName} alt={item.imgName} />
                </Link>
                <div className={swiperDataOpen}>
                  <button onClick={swiperOpen}>
                    <div data-cursor="block">
                      <img
                        src="/icon_down_arrow_w.svg"
                        alt="열기"
                        title="열기"
                      />
                    </div>
                  </button>
                  <MainSwiperData
                    title={item.imgName}
                    skill={item.stack}
                    date={item.date}
                    per={item.per}
                    step={item.step}
                  ></MainSwiperData>
                </div>
              </SwiperSlide>
            ))}
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
            <h2>
              {actionText}
              <p className="typing"></p>
              {/* Developer */}
              홈페이지
            </h2>
            {isKnockplace && (
              <span>
                당신의 브랜드가 완성되는 공간
                <br />
                노크플레이스
              </span>
            )}
            {isSanggeon && (
              <span>
                안녕하세요! 디자이너 & 프론트엔드개발자 양상건입니다.
                <br />
                저에게 관심이 있거나 궁금한 점이 있으신 분은
                <br />
                'CONTACT' 메뉴를 통해 메일을 보내주세요! :)
              </span>
            )}
            {/* <Link
              className="btn-bk"
              data-cursor="block"
              href="/knockplace/story"
            >
              STORY
              <img src="/icon_down_btn.svg" alt="스토리이동" />
            </Link> */}
            <button
              className="btn-bk"
              data-cursor="block"
              onClick={() => document.querySelector(".contact").click()}
            >
              CONTACT
              <img src="/icon_down_btn.svg" alt="문의하기" />
            </button>
          </div>
          <div className="main-contents__right-bottom">
            <video muted autoPlay loop playsInline>
              <source src="/main_play.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
