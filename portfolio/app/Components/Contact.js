"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [animationContact, setAnimationContact] = useState("");
  const [showContact, setShowContact] = useState("none");

  const handleClick = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const from = form.from.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.website.value; // 봇 차단용 허니팟

    // 봇 차단: 허니팟 필드가 채워져 있으면 스팸으로 판단
    if (honeypot) return;

    // 빈 값 검증
    if (!name || !from || !message) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from)) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return;
    }

    // 한국어 포함 여부 확인 (봇은 보통 영어만 입력)
    const koreanRegex = /[가-힣]/;
    if (!koreanRegex.test(name) && !koreanRegex.test(message)) {
      alert("한국어로 작성해주세요.");
      return;
    }

    // 실제 폼 제출
    fetch("/api/apiMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, from, message }),
    })
      .then((res) => {
        if (res.ok) {
          alert("성공적으로 메일을 전송했습니다.");
          form.reset();
          setAnimationContact("active-off");
          setTimeout(() => setShowContact("none"), 1000);
        } else {
          alert("전송에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch(() => {
        alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <>
      <Link
        data-cursor="block"
        href="#"
        className="contact"
        onClick={() => {
          setShowContact("grid");
          setAnimationContact("active-on");
        }}
      >
        contact
      </Link>
      <div
        className={"contact-bar " + animationContact}
        style={{ display: showContact }}
      >
        <div className="contact-bg"></div>
        <div className="contact-wrap">
          <div className="contact-title-wrap">
            <h3>CONTACT</h3>
            <a
              href="#"
              data-cursor="block"
              onClick={() => {
                setAnimationContact("active-off");
                setTimeout(() => {
                  setShowContact("none");
                }, 1000);
              }}
            >
              <img src="/icon_close_w.svg" alt="닫기" />
            </a>
          </div>
          <div className="contact-body">
            <form onSubmit={handleClick}>
              {/* 허니팟: 봇 차단용 - 사람 눈에는 안 보이는 필드 */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />
              <p>FROM</p>
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                required
              />
              <input
                type="email"
                name="from"
                placeholder="Your email*"
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Your message*"
                required
              />
              <button className="send-btn" data-cursor="block">
                SEND
              </button>
            </form>
            <div className="contact-bottom-btn">
              <a
                download={true}
                href="/download/웹사이트에_꼭_필요한_5가지.pdf"
                data-cursor="block"
              >
                TIP. 웹사이트에 꼭 필요한 5가지 다운로드
              </a>
              {/* <a href="https://github.com/KongGeon" data-cursor="block">
                GITHUB
                <img src="/icon_github_w.svg" alt="깃허브바로가기" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
