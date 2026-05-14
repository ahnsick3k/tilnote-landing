'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ── Card data: AI 시대 쏟아지는 정보들 ── */
const fallingCards = [
  {
    label: 'AI 뉴스',
    source: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=750&fit=crop',
  },
  {
    label: '논문 요약',
    source: 'arXiv',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=750&fit=crop',
  },
  {
    label: '트렌드 리포트',
    source: 'McKinsey',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop',
  },
  {
    label: 'YouTube 강의',
    source: 'YouTube',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=750&fit=crop',
  },
  {
    label: '뉴스레터',
    source: 'Substack',
    image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=1200&h=750&fit=crop',
  },
  {
    label: 'RSS 피드',
    source: 'Feedly',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&h=750&fit=crop',
  },
]

/* ── Falling card positions (staggered across viewport) ── */
const cardPositions = [
  { xPercent: 8, rotation: -6, delay: 0 },
  { xPercent: 55, rotation: 4, delay: 0.08 },
  { xPercent: 25, rotation: -3, delay: 0.18 },
  { xPercent: 65, rotation: 7, delay: 0.28 },
  { xPercent: 12, rotation: 5, delay: 0.38 },
  { xPercent: 48, rotation: -5, delay: 0.48 },
]

/* ── Individual falling card ── */
function FallingCard({
  card,
  index,
  scrollYProgress,
}: {
  card: (typeof fallingCards)[number]
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const pos = cardPositions[index]
  const start = pos.delay
  const end = Math.min(start + 0.35, 0.85)

  const y = useTransform(scrollYProgress, [start, end], ['-30vh', '120vh'])
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.08, end], [0, 1, 1, 0])
  const rotate = useTransform(scrollYProgress, [start, end], [0, pos.rotation])

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${pos.xPercent}%`,
        top: 0,
        y,
        opacity,
        rotate,
        zIndex: 10 - index,
        willChange: 'transform',
      }}
    >
      <div
        style={{
          width: 'clamp(200px, 28vw, 320px)',
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid rgba(15,23,42,0.09)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
          <img
            src={card.image}
            alt={card.label}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
        <div
          style={{
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }}>
            {card.label}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--muted-2)' }}>{card.source}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const clipUrl =
    'https://chromewebstore.google.com/detail/%ED%8B%B8%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A6%BD/focbaalelhmfiddakohmchapddnhbdkp'

  /* CTA fade-in at the end of scroll */
  const ctaOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.55, 0.72], [60, 0])
  const ctaScale = useTransform(scrollYProgress, [0.55, 0.72], [0.95, 1])

  /* Dim overlay as cards pile up */
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.55])

  /* Counter: 지나간 정보 수 */
  const counterRaw = useTransform(scrollYProgress, [0.05, 0.6], [0, 2847])
  const counter = useTransform(counterRaw, (v) => Math.round(v).toLocaleString())

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        height: '340vh',
        width: '100%',
      }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Radial bloom */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1040px',
            height: '640px',
            background:
              'radial-gradient(ellipse at center, rgba(95,101,240,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 72%)',
            pointerEvents: 'none',
          }}
        />

        {/* Falling cards layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          {fallingCards.map((card, i) => (
            <FallingCard
              key={i}
              card={card}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Dim overlay that builds up */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'white',
            opacity: overlayOpacity,
            pointerEvents: 'none',
            zIndex: 20,
          }}
        />

        {/* Counter: 지나간 정보 */}
        <motion.div
          style={{
            position: 'absolute',
            top: '24px',
            right: '32px',
            opacity: useTransform(scrollYProgress, [0.05, 0.12, 0.62, 0.68], [0, 0.7, 0.7, 0]),
            zIndex: 25,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ef4444',
                boxShadow: '0 0 8px rgba(239,68,68,0.5)',
              }}
            />
            <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>
              오늘 지나간 정보{' '}
            </span>
            <motion.span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--foreground)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {counter}
            </motion.span>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>건</span>
          </div>
        </motion.div>

        {/* CTA: 방점 — tilnote가 해결합니다 */}
        <motion.div
          style={{
            position: 'relative',
            zIndex: 30,
            opacity: ctaOpacity,
            y: ctaY,
            scale: ctaScale,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '680px',
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(95,101,240,0.2)',
              background: 'rgba(95,101,240,0.07)',
              color: 'var(--accent)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px rgba(107,112,255,0.7)',
                flexShrink: 0,
              }}
            />
            AI 노트 에이전트
          </span>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(36px, 6.5vw, 64px)',
              fontWeight: 800,
              color: 'var(--foreground)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: 0,
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

          {/* Subheadline */}
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'var(--muted)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '480px',
            }}
          >
            AI가 리서치부터 작성, 수정, 발행까지 함께하는
            <br />
            노트 에이전트, 틸노트
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '4px',
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
              href={clipUrl}
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
              fontSize: '13px',
              color: 'var(--muted)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#fbbf24' }}>★</span>
            <span>4.8 · Chrome 1,000+ 리뷰 · 45,000개 노트 생성됨</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
