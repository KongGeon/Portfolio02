"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Contact from "./Contact";
export default function PathChecker({ children }) {
  const pathname = usePathname();
  let path = "";

  if (pathname.includes("/sanggeon")) {
    path = "sanggeon";
  } else if (pathname.includes("/") || pathname.includes("/knockplace")) {
    path = "knockplace";
  } else {
    path = "other";
  }

  return (
    <div>
      {path === "knockplace" && (
        <>
          <header>
            <div className="header__left">
              <Link href="/knockplace/home" data-cursor="block">
                <img src="/img_logo.svg" alt="로고" />
              </Link>
            </div>
            <div className="header__right">
              <img src="/img_circle.svg" alt="" />
              <div>
                <Link data-cursor="block" href="/knockplace/home">
                  HOME
                </Link>
                <Link data-cursor="block" href="/knockplace/story">
                  STORY
                </Link>
                <Link data-cursor="block" href="/knockplace/portfolio/img18">
                  Portfolio
                </Link>
                <Contact></Contact>
                {/* <Link data-cursor="block" href="">
                  SIGN IN
                </Link> */}
              </div>
              <img src="/img_circle.svg" alt="" />
            </div>
          </header>
          <div className="s__container">
            <div className="s__contents">{children}</div>
            <footer>
              <p>copyright 2024. knockplace. all rights reserved.</p>
            </footer>
          </div>
        </>
      )}
      {path === "sanggeon" && (
        <>
          <header>
            <div className="header__left">
              <Link href="/sanggeon/home" data-cursor="block">
                <img src="/img_logo2.svg" alt="로고" />
              </Link>
            </div>
            <div className="header__right">
              <img src="/img_circle.svg" alt="" />
              <div>
                <Link data-cursor="block" href="/sanggeon/home">
                  HOME
                </Link>
                <Link data-cursor="block" href="/sanggeon/story">
                  STORY
                </Link>
                <Link data-cursor="block" href="/sanggeon/portfolio/img18">
                  Portfolio
                </Link>
                <Contact></Contact>
                {/* <Link data-cursor="block" href="">
                  SIGN IN
                </Link> */}
              </div>
              <img src="/img_circle.svg" alt="" />
            </div>
          </header>
          <div className="s__container">
            <div className="s__contents">{children}</div>
            <footer>
              <p>copyright 2024. sanggeon. all rights reserved.</p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
