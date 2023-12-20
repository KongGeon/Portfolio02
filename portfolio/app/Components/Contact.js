"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [animationContact, setAnimationContact] = useState("");
  const [showContact, setShowContact] = useState("none");

  const handleClick = () => {
    alert('성공적으로 메일을 전송했습니다.')
  }

  return (
    <>
      <Link
        data-cursor="block"
        href="#"
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
            <form action="/api/apiMail" method="POST" onSubmit={handleClick}>
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
            <a href="https://github.com/KongGeon" data-cursor="block">
              GITHUB
              <img src="/icon_github_w.svg" alt="깃허브바로가기" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
