'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ── 떨어지는 카드 데이터 ── */
const fallingCards = [
  { src: '/mockups/mockup1.png', label: 'Lazyweb', sub: 'calendly' },
  { src: '/mockups/mockup2.png', label: 'Lazyweb', sub: 'userlane' },
  { src: '/mockups/mockup3.png', label: 'Lazyweb', sub: 'livlastic' },
  { src: '/mockups/mockup4.png', label: 'Lazyweb', sub: 'atlassian' },
  { src: '/mockups/mockup5.png', label: 'Lazyweb', sub: 'suessme' },
  { src: '/mockups/mockup6.png', label: 'Lazyweb', sub: 'raycast' },
];

/* 카드별 최종 위치/회전 — 쌓이는 느낌 */
const cardLayout = [
  { x: -20, y: 0, rotate: -4 },
  { x: 15, y: -10, rotate: 3 },
  { x: -8, y: -20, rotate: -2 },
  { x: 22, y: -30, rotate: 5 },
  { x: -15, y: -40, rotate: -3 },
  { x: 5, y: -50, rotate: 2 },
];

export default function HeroSection() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= fallingCards.length) {
      /* 모든 카드가 떨어진 후 잠시 대기, 리셋 후 반복 */
      const reset = setTimeout(() => setVisibleCount(0), 3000);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 600 : 500,
    );
    return () => clearTimeout(timer);
  }, [visibleCount]);

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
        padding: '120px 24px 80px',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(95,101,240,0.07) 0%, transparent 60%), #ffffff',
      }}
    >
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1100 }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 14px',
              borderRadius: 999,
              border: '1px solid rgba(95,101,240,0.2)',
              background: 'rgba(95,101,240,0.07)',
              color: 'var(--accent)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px rgba(107,112,255,0.7)',
              }}
            />
            AI 노트 에이전트
          </span>
        </div>

        {/* 타이틀 */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: 'clamp(36px, 6.5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: 16,
          }}
        >
          쏟아지는 정보,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #5f65f0 0%, #3d41cc 60%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            내 지식
          </span>
          으로 만드세요
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: 56,
          }}
        >
          AI가 리서치부터 작성, 수정, 발행까지 함께하는
          <br />
          노트 에이전트, 틸노트
        </p>

        {/* 떨어지는 카드 영역 */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 740,
            height: 480,
            margin: '0 auto',
          }}
        >
          <AnimatePresence>
            {fallingCards.slice(0, visibleCount).map((card, i) => {
              const layout = cardLayout[i];
              return (
                <motion.div
                  key={`${i}-${visibleCount > fallingCards.length ? 'reset' : 'play'}`}
                  initial={{
                    y: -600,
                    x: layout.x,
                    rotate: layout.rotate * 3,
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    y: layout.y,
                    x: layout.x,
                    rotate: layout.rotate,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 22,
                    mass: 1.2,
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: 0,
                    marginLeft: -280,
                    width: 560,
                    zIndex: i + 1,
                    transformOrigin: 'center bottom',
                  }}
                >
                  {/* 카드 프레임 */}
                  <div
                    style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      border: '10px solid #1a1a1a',
                      boxShadow:
                        '0 20px 50px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.08)',
                      background: '#fff',
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '16 / 10' }}>
                      <Image
                        src={card.src}
                        alt={card.sub}
                        fill
                        sizes="560px"
                        style={{ objectFit: 'cover' }}
                        priority={i < 2}
                      />
                    </div>
                  </div>

                  {/* 라벨 */}
                  <div
                    style={{
                      textAlign: 'center',
                      marginTop: 10,
                      fontSize: 13,
                      color: 'var(--muted-2)',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--muted)' }}>
                      {card.label}
                    </span>
                    {' · '}
                    {card.sub}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            marginTop: 56,
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

        {/* Social proof */}
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
      </div>

      {/* 배경 도트 패턴 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
