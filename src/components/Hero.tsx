'use client'

import { motion } from 'framer-motion'

function SkeletonLine({ width = '100%', delay = 0 }: { width?: string; delay?: number }) {
  return (
    <div
      style={{
        height: '12px',
        width,
        borderRadius: '6px',
        background: 'linear-gradient(90deg, #e2e8f0 25%, #dbeafe 50%, #e2e8f0 75%)',
        backgroundSize: '200% 100%',
        animation: `shimmer 2s ${delay}s infinite linear`,
      }}
    />
  )
}

export default function Hero() {
  const clipUrl = 'https://chromewebstore.google.com/detail/%ED%8B%B8%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A6%BD/focbaalelhmfiddakohmchapddnhbdkp'

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Radial bloom background */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.75, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
            willChange: 'transform, opacity',
          }}
      />

      {/* Subtle secondary bloom */}
      <div
          style={{
            position: 'absolute',
            top: '14%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '560px',
            height: '320px',
            background:
            'radial-gradient(ellipse at center, rgba(95,101,240,0.05) 0%, transparent 66%)',
            pointerEvents: 'none',
          }}
        />

      {/* 2-column inner wrapper */}
      <div className="hero-inner">

      {/* Text column */}
      <div className="hero-text-column">
        {/* Eyebrow badge */}
        <div>
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
            AI 노트 에이전트 2.0
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 800,
            color: 'var(--foreground)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          지식을 만들고
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #5f65f0 0%, #3d41cc 60%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            편집
          </span>
          하세요
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--muted)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          AI가 리서치부터 작성, 수정, 발행까지 함께합니다.
        </p>

        {/* CTA row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
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
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={clipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5h6.5M3.2 11.75l3.25-5.63M9.55 11.75l-3.25-5.63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#fbbf24' }}>★</span>
          <span>4.8 · Chrome 1,000+ 리뷰 · 45,000개 노트 생성됨</span>
        </p>
      </div>

      {/* Product mockup */}
      <div className="hero-mockup-wrapper">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fd 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(15,23,42,0.09)',
            boxShadow:
              '0 0 0 1px rgba(95,101,240,0.06), 0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)',
            overflow: 'hidden',
          }}
        >
          {/* Mockup window chrome */}
          <div
            style={{
              padding: '14px 20px',
              borderBottom: '1px solid rgba(15,23,42,0.07)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: '#f5f6fa',
            }}
          >
            {/* Traffic light dots */}
            <div style={{ display: 'flex', gap: '7px' }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                <div
                  key={color}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: color,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
            {/* Fake tab */}
            <div
              style={{
                flex: 1,
                height: '28px',
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: '8px',
              }}
            >
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(95,101,240,0.45)' }} />
              <div style={{ width: '120px', height: '8px', borderRadius: '4px', background: 'rgba(0,0,0,0.1)' }} />
            </div>
            {/* AI badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'rgba(95,101,240,0.08)',
                border: '1px solid rgba(95,101,240,0.2)',
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 6px rgba(95,101,240,0.5)',
                }}
              />
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-hover)', letterSpacing: '0.04em' }}>
                AI 작성 중
              </span>
            </div>
          </div>

          {/* Mockup body */}
          <div
            className="hero-mockup-body"
            style={{
              padding: '32px 36px',
              display: 'flex',
              gap: '32px',
              background: '#ffffff',
            }}
          >
            {/* Left sidebar */}
            <div
              className="hero-mockup-sidebar"
              style={{
                width: '180px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--muted-2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                노트 목록
              </div>
              {[
                { label: '웹 클리핑 → AI 초안', active: true },
                { label: 'React 서버 컴포넌트', active: false },
                { label: 'LLM 아키텍처 정리', active: false },
                { label: '마케팅 전략 메모', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '7px',
                    background: item.active ? 'rgba(95,101,240,0.08)' : 'transparent',
                    border: item.active ? '1px solid rgba(95,101,240,0.2)' : '1px solid transparent',
                    fontSize: '12px',
                    color: item.active ? 'var(--accent)' : 'var(--muted)',
                    fontWeight: item.active ? 500 : 400,
                    cursor: 'default',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main editor area */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Note title */}
              <div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: '8px',
                  }}
                >
                  웹 클리핑 → AI 초안 생성 중...
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  출처: techcrunch.com/2026/03/ai-agents · 방금 클리핑됨
                </div>
              </div>

              {/* Shimmer content lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <SkeletonLine width="88%" delay={0} />
                <SkeletonLine width="95%" delay={0.15} />
                <SkeletonLine width="72%" delay={0.3} />
              </div>

              {/* A partially "typed" paragraph that is visible */}
              <div
                style={{
                  padding: '16px',
                  background: 'rgba(95,101,240,0.06)',
                  borderLeft: '3px solid rgba(95,101,240,0.4)',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '13px',
                  color: '#475569',
                  lineHeight: 1.7,
                }}
              >
                AI 에이전트는 단순한 텍스트 자동완성을 넘어, 복잡한 리서치 워크플로를 자동화하고 있습니다. 사용자가 웹 페이지를 클리핑하는 순간, TILNOTE는 핵심 내용을 추출하고...
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ display: 'inline-block', width: '2px', height: '14px', background: 'var(--accent)', marginLeft: '2px', verticalAlign: 'text-bottom' }}
                />
              </div>

              {/* More skeleton lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <SkeletonLine width="100%" delay={0.1} />
                <SkeletonLine width="83%" delay={0.25} />
              </div>

              {/* Bottom action row */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                  flexWrap: 'wrap',
                }}
              >
                {['요약 추가', '태그 생성', '발행하기'].map((label) => (
                  <div
                    key={label}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0,0,0,0.08)',
                      fontSize: '11px',
                      color: 'var(--muted)',
                      background: '#f5f6fa',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      </div>{/* /hero-inner */}

      {/* Shimmer keyframe defined in globals.css */}
    </section>
  )
}
