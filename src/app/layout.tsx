import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "TILNOTE — AI 노트 비서 | 리서치부터 발행까지",
  description:
    "AI가 자료 수집부터 글 작성, 수정, 블로그 발행까지 한 번에 끝내주는 똑똑한 지식 관리 비서. 무료로 시작하세요.",
  keywords: [
    "AI 노트",
    "틸노트",
    "tilnote",
    "지식 관리",
    "AI 글쓰기",
    "웹 클리핑",
    "노트 앱",
    "PKM",
  ],
  openGraph: {
    title: "TILNOTE — AI 노트 비서",
    description:
      "리서치부터 작성, 편집, 발행까지. AI가 함께하는 지식 워크플로우.",
    siteName: "TILNOTE",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TILNOTE — AI 노트 비서",
    description:
      "리서치부터 작성, 편집, 발행까지. AI가 함께하는 지식 워크플로우.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
