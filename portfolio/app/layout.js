import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "PORTPOLIO",
  description: "SNAGGEON PORTPOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <header>
          <div className="header__left">
            <Link href="/">
              <img src="/img_logo.svg" alt="로고" />
            </Link>
          </div>
          <div className="header__right">
            <img src="/img_circle.svg" alt="" />
            <div>
              <Link data-cursor="block" href="/">
                HOME
              </Link>
              <Link data-cursor="block" href="/sanggeon/story">
                STORY
              </Link>
              <Link data-cursor="block" href="/sanggeon/portfolio">
                Portfolio
              </Link>
              <Link data-cursor="block" href="">
                contact
              </Link>
              <Link data-cursor="block" href="">
                SIGN IN
              </Link>
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
