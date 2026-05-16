'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const mockups = [
  '/mockups/mockup1.png',
  '/mockups/mockup2.png',
  '/mockups/mockup3.png',
  '/mockups/mockup4.png',
  '/mockups/mockup5.png',
  '/mockups/mockup6.png',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mockups.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        background:
          'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(95,101,240,0.07) 0%, transparent 60%), linear-gradient(to bottom right, #f9fafb, #ffffff, #f4f4f5)',
      }}
    >
      <div className="relative z-10 w-full" style={{ maxWidth: 1100 }}>
        {/* 상단 카테고리 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              padding: '6px 16px',
              background: '#fff',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            Tech
          </span>
          <span style={{ fontSize: 13, color: '#a1a1aa' }}>Lazyweb</span>
        </div>

        {/* 메인 타이틀 */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#18181b',
            marginBottom: 16,
          }}
        >
          바보 같은 내 AI를
          <br />
          웹디자이너로 만드는 법
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#52525b',
            marginBottom: 48,
          }}
        >
          25만 개의 사이트, 한 번에 교육 진행시켜
        </p>

        {/* 목업 캐러셀 */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 920,
            aspectRatio: '920 / 560',
            margin: '0 auto',
            borderRadius: 24,
            overflow: 'hidden',
            border: '12px solid #18181b',
            boxShadow:
              '0 25px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          {mockups.map((src, index) => (
            <div
              key={index}
              style={{
                position: index === 0 ? 'relative' : 'absolute',
                inset: 0,
                transition: 'opacity 1.2s ease, transform 1.2s ease',
                opacity: index === current ? 1 : 0,
                transform:
                  index === current ? 'scale(1)' : 'scale(1.04)',
              }}
            >
              <Image
                src={src}
                alt={`Website Mockup ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 920px"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}

          {/* 인디케이터 */}
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 8,
              zIndex: 10,
            }}
          >
            {mockups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`슬라이드 ${i + 1}`}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 999,
                  border: 'none',
                  background:
                    i === current
                      ? '#fff'
                      : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>

        {/* 하단 CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
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
            지금 시작하기
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button className="btn-secondary">영상으로 보기</button>
        </div>
      </div>

      {/* 배경 도트 패턴 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(#d4d4d8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
