import "./css/globals.css";
import Link from "next/link";
import Contact from "./Components/Contact";
export const metadata = {
  title: "PORTFOLIO",
  description: "SNAGGEON PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <header>
          <div className="header__left">
            <Link href="/sanggeon/home" data-cursor="block">
              <img src="/img_logo.svg" alt="로고" />
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
              <Link data-cursor="block" href="/sanggeon/portfolio/first">
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
      </body>
    </html>
  );
}
