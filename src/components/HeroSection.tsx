'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* ── 떨어지는 정보 카드 ── */
const cards = [
  { color: '#3B82F6', label: 'AI 뉴스' },
  { color: '#22C55E', label: '논문 요약' },
  { color: '#EF4444', label: '트렌드 리포트' },
  { color: '#8B5CF6', label: '뉴스레터' },
  { color: '#F59E0B', label: 'RSS 피드' },
  { color: '#EC4899', label: 'YouTube 강의' },
  { color: '#06B6D4', label: '블로그 포스트' },
  { color: '#10B981', label: 'PDF 문서' },
  { color: '#6366F1', label: 'Slack 메시지' },
  { color: '#14B8A6', label: '팟캐스트 노트' },
  { color: '#F97316', label: 'X 스레드' },
  { color: '#A855F7', label: '리서치 메모' },
  { color: '#0EA5E9', label: '위키 문서' },
  { color: '#E11D48', label: '북마크' },
  { color: '#84CC16', label: '회의록' },
  { color: '#D946EF', label: 'Notion 페이지' },
];

/* 카드 크기 랜덤 느낌 (큰 카드 위주) */
const cardSizes = [
  { w: 300, h: 200 }, { w: 280, h: 190 }, { w: 320, h: 210 }, { w: 270, h: 185 },
  { w: 290, h: 195 }, { w: 310, h: 205 }, { w: 260, h: 180 }, { w: 300, h: 200 },
  { w: 280, h: 190 }, { w: 290, h: 195 }, { w: 310, h: 205 }, { w: 270, h: 185 },
  { w: 300, h: 200 }, { w: 280, h: 190 }, { w: 260, h: 180 }, { w: 310, h: 205 },
];

/* 화면을 덮도록 넓게 분포된 착지 위치 */
const landPositions = [
  { x: -380, y: -200, rotate: -7 },
  { x: 320, y: -180, rotate: 5 },
  { x: -120, y: -100, rotate: -3 },
  { x: 400, y: -50, rotate: 6 },
  { x: -350, y: 30, rotate: -5 },
  { x: 150, y: -150, rotate: 4 },
  { x: -200, y: 120, rotate: -4 },
  { x: 280, y: 100, rotate: 7 },
  { x: -450, y: -80, rotate: -6 },
  { x: 450, y: 60, rotate: 5 },
  { x: 0, y: 50, rotate: -2 },
  { x: -280, y: 180, rotate: -5 },
  { x: 350, y: 200, rotate: 4 },
  { x: -50, y: -220, rotate: 3 },
  { x: 200, y: -250, rotate: -3 },
  { x: -400, y: 220, rotate: 6 },
];

/* 흩어질 때 방향 — 더 멀리 */
const scatterDirections = [
  { x: -900, y: -400, rotate: -30 },
  { x: 900, y: -350, rotate: 35 },
  { x: -700, y: 300, rotate: -25 },
  { x: 800, y: 200, rotate: 30 },
  { x: -1000, y: 0, rotate: -35 },
  { x: 700, y: -500, rotate: 25 },
  { x: -600, y: 500, rotate: -20 },
  { x: 1000, y: 400, rotate: 40 },
  { x: -800, y: -300, rotate: -30 },
  { x: 900, y: 300, rotate: 35 },
  { x: -500, y: -500, rotate: -25 },
  { x: 600, y: 500, rotate: 30 },
  { x: -1000, y: 200, rotate: -35 },
  { x: 800, y: -400, rotate: 25 },
  { x: -700, y: 400, rotate: -20 },
  { x: 1000, y: -200, rotate: 40 },
];

export default function HeroSection() {
  /* phase: 0=wait, 1=drop, 2=scatter, 3=reveal */
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 2600);
    const t3 = setTimeout(() => setPhase(3), 3300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const getCardAnim = useCallback((i: number) => {
    const land = landPositions[i];
    const scatter = scatterDirections[i];
    if (phase === 0) return { y: -700, x: 0, rotate: 0, opacity: 0, scale: 0.7 };
    if (phase === 1) return { y: land.y, x: land.x, rotate: land.rotate, opacity: 1, scale: 1 };
    /* phase 2+ scatter */
    return { y: scatter.y, x: scatter.x, rotate: scatter.rotate, opacity: 0, scale: 0.6 };
  }, [phase]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 200,
        paddingBottom: 80,
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* ── 떨어지는 카드 레이어 ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: phase < 3 ? 20 : 0,
        }}
      >
        {cards.map((card, i) => {
          const anim = getCardAnim(i);
          return (
            <motion.div
              key={card.label}
              initial={{ y: -700, x: 0, rotate: 0, opacity: 0, scale: 0.7 }}
              animate={anim}
              transition={
                phase === 1
                  ? {
                      type: 'spring',
                      stiffness: 220,
                      damping: 20,
                      mass: 1,
                      delay: i * 0.08,
                    }
                  : {
                      duration: 0.5,
                      ease: [0.4, 0, 1, 1],
                      delay: i * 0.03,
                    }
              }
              style={{
                position: 'absolute',
                width: cardSizes[i].w,
                height: cardSizes[i].h,
                borderRadius: 16,
                background: card.color,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 16,
              }}
            >
              {/* 카드 내부 — 가짜 콘텐츠 라인 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div
                  style={{
                    width: '70%',
                    height: 8,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.5)',
                  }}
                />
                <div
                  style={{
                    width: '45%',
                    height: 8,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.3)',
                  }}
                />
              </div>
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 16,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.02em',
                }}
              >
                {card.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* ── 메인 콘텐츠 (카드 퇴장 후 페이드인) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 1100,
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            marginBottom: 20,
          }}
        >
          쏟아지는 정보,
          <br />
          내 지식으로 만드세요
        </h1>

        <p
          style={{
            textAlign: 'center',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: '#64748b',
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          AI가 리서치부터 작성, 수정, 발행까지 함께하는 노트 에이전트, 틸노트
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <a
            href="https://tilnote.io/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            지금 무료로 시작하기
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://chromewebstore.google.com/detail/%ED%8B%B8%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A6%BD/focbaalelhmfiddakohmchapddnhbdkp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 5h6.5M3.2 11.75l3.25-5.63M9.55 11.75l-3.25-5.63"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Chrome 확장 설치
          </a>
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: 'var(--muted)',
            marginBottom: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <span style={{ color: '#fbbf24' }}>★</span>
          4.8 · Chrome 1,000+ 리뷰 · 45,000개 노트 생성됨
        </p>

        {/* 목업 */}
        <div
          style={{
            width: '100%',
            maxWidth: 920,
            aspectRatio: '16 / 10',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow:
              '0 25px 60px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)',
            border: '1px solid rgba(15,23,42,0.06)',
            position: 'relative',
            background: '#f1f5f9',
          }}
        >
          <Image
            src="/mockups/mockup1.png"
            alt="틸노트 앱 스크린샷"
            fill
            sizes="(max-width: 768px) 100vw, 920px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
