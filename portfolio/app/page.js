"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    // setInterval을 이용하여 1초마다 실행되는 함수 생성
    const moveElements = setInterval(() => {
      // 현재 marginLeft 값을 가져와서 10px 증가
      setMarginLeft((prevMarginLeft) => prevMarginLeft + 5);
    }, 100);

    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 메모리 누수 방지
    return () => clearInterval(moveElements);
  }, []); // 빈 배열을 넣어 useEffect가 최초 한 번만 실행되도록 함

  return (
    <div>
      <div className="move-text-wrap">
        <div style={{ transform: `translate(-${marginLeft}px)` }}>
          <p>uiux</p>
          <img src="/img_dia.svg" alt="" />
          <p>Web standards</p>
          <img src="/img_dia.svg" alt="" />
          <p>DESIGN</p>
          <img src="/img_dia.svg" alt="" />
          <p>development</p>
          <img src="/img_dia.svg" alt="" />
          <p>markup</p>
          <img src="/img_dia.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
