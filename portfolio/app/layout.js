import "./css/globals.css";

import PathChecker from "./Components/PathChecker";

export const metadata = {
  title: "노크플레이스 : 당신의 브랜드가 완성되는 또 하나의 공간",
  siteName: "노크플레이스 | 홈페이지 제작",
  description: "당신의 브랜드가 완성되는 또 하나의 공간",
  keywords: [
    "웹사이트 제작",
    "노크플레이스",
    "아임웹 홈페이지",
    "홈페이지 제작",
    "대전 홈페이지",
    "대전 웹사이트",
    "랜딩페이지",
    "knockplace",
  ],

  ogImage: "/opengraph-image.png",
};

export default function RootLayout({ children }) {
  4;

  // JSON-LD 데이터 객체 생성
  const ldJsonData = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "노크플레이스",
        url: "https://knockplace.vercel.app/knockplace/home",
        // sameAs: ["https://www.instagram.com/competo"],
      },
      {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Organization",
              name: "MarkUp",
              image: "https://knockplace.vercel.app/img_portfolio17.png",
              url: "https://knockplace.vercel.app/knockplace/portfolio/img17",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Organization",
              name: "KOCAS",
              image: "https://knockplace.vercel.app/img_portfolio13.png",
              url: "https://knockplace.vercel.app/knockplace/portfolio/img13",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Organization",
              name: "AICA",
              image: "https://knockplace.vercel.app/img_portfolio14.png",
              url: "https://knockplace.vercel.app/knockplace/portfolio/img14",
            },
          },
        ],
      },
    ],
  };

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
        <meta
          name="naver-site-verification"
          content="e8278cc56ba3d53fa025f1fb04026a6df682b58d"
        />

        {/* JSON-LD 스크립트 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
        />
        <meta property="og:title" content="노크플레이스 | 홈페이지 제작" />
        <meta
          property="og:description"
          content="당신의 브랜드가 완성되는 또 하나의 공간"
        />
      </head>
      <body>
        <PathChecker>{children}</PathChecker>
      </body>
    </html>
  );
}
