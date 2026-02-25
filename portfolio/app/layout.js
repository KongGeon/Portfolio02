import "./css/globals.css";

import PathChecker from "./Components/PathChecker";

export const metadata = {
  metadataBase: new URL("https://www.knockplace.com"),
  title: {
    default: "노크플레이스 | 홈페이지·웹사이트 제작",
    template: "%s | 노크플레이스",
  },
  description: "홈페이지, 웹사이트, 개발, 디자인 전문기업입니다.",
  keywords: [
    "웹사이트 제작",
    "노크플레이스",
    "아임웹 홈페이지",
    "홈페이지 제작",
    "대전 홈페이지",
    "대전 웹사이트",
    "랜딩페이지",
    "퍼블리싱",
    "대전 퍼블리싱",
    "퍼블리셔",
    "웹디자인",
    "대전 웹디자인",
    "대전 디자인",
    "knockplace",
  ],
  openGraph: {
    title: "노크플레이스 | 홈페이지 제작",
    description: "홈페이지, 웹사이트, 개발, 디자인 전문기업입니다.",
    url: "https://www.knockplace.com",
    siteName: "노크플레이스",
    images: [
      {
        url: "https://www.knockplace.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "노크플레이스 | 홈페이지 제작",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "노크플레이스 | 홈페이지 제작",
    description: "홈페이지, 웹사이트, 개발, 디자인 전문기업입니다.",
    images: ["https://www.knockplace.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.knockplace.com",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD 데이터 객체 생성 (Organization - 홈 브랜드 강화용)
  const ldJsonData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "노크플레이스",
    url: "https://www.knockplace.com",
    logo: "https://www.knockplace.com/opengraph-image.png",
    description: "홈페이지, 웹사이트, 개발, 디자인 전문기업입니다.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "대전광역시",
      addressLocality: "서구",
    },
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
          content="e8278cc56ba3d53fa025f1fb04026a6df682b58d"
        />

        {/* JSON-LD 스크립트 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
        />
      </head>
      <body>
        <PathChecker>{children}</PathChecker>
      </body>
    </html>
  );
}
