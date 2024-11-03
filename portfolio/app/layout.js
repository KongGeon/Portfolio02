import "./css/globals.css";
import Link from "next/link";

import PathChecker from "./Components/PathChecker";

export const metadata = {
  title: "노크플레이스",
  // title: "FrontEnd Developer Portfolio",
  // description: "Developer KnockPlace",
  description: "노크플레이스와 함께 웹사이트 제작",
  keywords: "웹사이트 제작, 노크플레이스, 아임웹 홈페이지, 홈페이지 제작",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 검색엔진 */}
        <meta
          name="google-site-verification"
          content="KVRA1l3kW68HU9Gvq4f0tBRu3lYBwLgbKdjrZJ0mfm8"
        />
        {/* 네이버 검색엔진 */}
        <meta
          name="naver-site-verification"
          content="6bd0de74e9b5ec69b18d21fb4c614fbdef0b0280"
        />
      </head>
      <body>
        <PathChecker>{children}</PathChecker>
      </body>
    </html>
  );
}
