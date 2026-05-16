'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/*
  애니메이션 단계:
  0 = 대기
  1 = 블록 3개 위에서 떨어져 쌓임
  2 = 블록들 좌우로 벌어지며 흩어짐
  3 = 블록 퇴장 + 텍스트 & 목업 페이드인
*/

/* 컬러 블록 정의 (blue=큰, green=중간, red=작은) */
const blocks = [
  { color: '#3B82F6', id: 'blue' },
  { color: '#22C55E', id: 'green' },
  { color: '#EF4444', id: 'red' },
];

/* 각 단계별 블록 상태 */
const blockStates: Record<string, {
  stack: { y: number; x: number; w: string; h: string; rotate: number; opacity: number };
  spread: { y: number; x: number; w: string; h: string; rotate: number; opacity: number };
  exit: { y: number; x: number; w: string; h: string; rotate: number; opacity: number };
}> = {
  blue: {
    stack: { y: 80, x: 0, w: '65%', h: '55%', rotate: -1, opacity: 1 },
    spread: { y: 120, x: -320, w: '20%', h: '70%', rotate: -3, opacity: 1 },
    exit: { y: 300, x: -500, w: '20%', h: '70%', rotate: -8, opacity: 0 },
  },
  green: {
    stack: { y: 30, x: 10, w: '58%', h: '45%', rotate: 1.5, opacity: 1 },
    spread: { y: 120, x: 320, w: '20%', h: '70%', rotate: 3, opacity: 1 },
    exit: { y: 300, x: 500, w: '20%', h: '70%', rotate: 8, opacity: 0 },
  },
  red: {
    stack: { y: -10, x: -5, w: '52%', h: '10%', rotate: -0.5, opacity: 1 },
    spread: { y: 0, x: 0, w: '70%', h: '55%', rotate: 0, opacity: 1 },
    exit: { y: 100, x: 0, w: '70%', h: '55%', rotate: 0, opacity: 0 },
  },
};

function getBlockStyle(id: string, phase: number) {
  const s = blockStates[id];
  if (phase <= 0) {
    return { y: -800, x: 0, width: s.stack.w, height: s.stack.h, rotate: s.stack.rotate * 3, opacity: 0 };
  }
  if (phase === 1) {
    return { y: s.stack.y, x: s.stack.x, width: s.stack.w, height: s.stack.h, rotate: s.stack.rotate, opacity: s.stack.opacity };
  }
  if (phase === 2) {
    return { y: s.spread.y, x: s.spread.x, width: s.spread.w, height: s.spread.h, rotate: s.spread.rotate, opacity: s.spread.opacity };
  }
  return { y: s.exit.y, x: s.exit.x, width: s.exit.w, height: s.exit.h, rotate: s.exit.rotate, opacity: s.exit.opacity };
}

export default function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const showContent = phase >= 3;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* 떨어지는 컬러 블록들 */}
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
        {blocks.map((block) => {
          const s = getBlockStyle(block.id, phase);
          return (
            <motion.div
              key={block.id}
              initial={{ y: -800, x: 0, opacity: 0, rotate: 0 }}
              animate={{
                y: s.y,
                x: s.x,
                opacity: s.opacity,
                rotate: s.rotate,
              }}
              transition={
                phase === 1
                  ? { type: 'spring', stiffness: 180, damping: 18, mass: 1.4 }
                  : phase === 2
                    ? { type: 'spring', stiffness: 120, damping: 20, mass: 1 }
                    : { duration: 0.6, ease: 'easeIn' }
              }
              style={{
                position: 'absolute',
                width: s.width,
                height: s.height,
                background: block.color,
                borderRadius: 16,
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              }}
            />
          );
        })}
      </div>

      {/* 메인 콘텐츠 — 블록이 사라진 후 페이드인 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
        {/* 타이틀 */}
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

        {/* 서브카피 */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: '#64748b',
            lineHeight: 1.7,
            marginBottom: 56,
          }}
        >
          AI가 리서치부터 작성, 수정, 발행까지 함께하는 노트 에이전트, 틸노트
        </p>

        {/* 목업 이미지 영역 */}
        <div
          style={{
            width: '100%',
            maxWidth: 920,
            aspectRatio: '16 / 10',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow:
              '0 25px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
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

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            marginTop: 48,
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
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <span style={{ color: '#fbbf24' }}>★</span>
          4.8 · Chrome 1,000+ 리뷰 · 45,000개 노트 생성됨
        </p>
      </motion.div>
    </section>
  );
}
