'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: '클립',
    description: '브라우저 익스텐션으로 웹페이지나 유튜브 영상을 저장합니다.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="16" height="12" rx="2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 10h10M6 13h6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 14l4 4m0 0-2.5.5M21 18l-.5-2.5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI 작성',
    description: 'AI가 자동으로 리서치하고 구조화된 초안을 생성합니다.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M13 3L14.8 8.2L20 10L14.8 11.8L13 17L11.2 11.8L6 10L11.2 8.2L13 3Z" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 19L7.6 20.8L9 21.4L7.6 22L7 23.8L6.4 22L5 21.4L6.4 20.8L7 19Z" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16L20.5 17.5L22 18L20.5 18.5L20 20L19.5 18.5L18 18L19.5 17.5L20 16Z" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: '발행',
    description: '블로그에 바로 발행하거나 마크다운으로 내보냅니다.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M13 16V4M13 4L9 8M13 4L17 8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 18v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="how"
      ref={sectionRef}
      className="site-section"
      style={{ background: 'transparent' }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-heading center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-kicker">워크플로우</span>
          <h2 className="section-title">3단계로 끝납니다</h2>
          <p className="section-copy center">
            2-3시간이 걸리던 리서치·초안 작성을 3분으로
          </p>
        </motion.div>

        {/* Step cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="how-grid"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + index * 0.12 }}
              style={{
                position: 'relative',
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '32px 28px 28px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                overflow: 'hidden',
              }}
            >
              {/* Decorative background number */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '18px',
                  fontSize: '96px',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'rgba(95,101,240,0.06)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {step.number}
              </span>

              {/* Step badge */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'var(--accent-soft)',
                  color: 'var(--accent)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  marginBottom: '20px',
                }}
              >
                STEP {step.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  border: '1px solid rgba(95,101,240,0.12)',
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before / After — full-width contrast banner */}
        <motion.div
          style={{ marginTop: '28px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 56px 1fr',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            {/* Before */}
            <div
              style={{
                padding: '36px 40px',
                background: 'var(--surface-2)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-2)',
                }}
              >
                기존 방식
              </span>
              <div style={{ position: 'relative', marginTop: '8px' }}>
                <span
                  style={{
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: 800,
                    color: 'var(--muted-2)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  2-3시간
                </span>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-4px',
                    right: '-4px',
                    height: '3px',
                    background: 'var(--muted-2)',
                    opacity: 0.55,
                    borderRadius: '2px',
                    transform: 'translateY(-50%) rotate(-3deg)',
                  }}
                />
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted-2)', marginTop: '6px' }}>
                리서치 · 초안 작성
              </p>
            </div>

            {/* Arrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--surface)',
                borderLeft: '1px solid var(--border)',
                borderRight: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '20px', color: 'var(--accent)' }}>→</span>
            </div>

            {/* After */}
            <div
              style={{
                padding: '36px 40px',
                background: 'var(--accent-soft)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                TILNOTE
              </span>
              <span
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginTop: '8px',
                }}
              >
                3분
              </span>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--accent)',
                  opacity: 0.75,
                  marginTop: '6px',
                }}
              >
                AI 자동 처리
              </p>
            </div>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '14px',
              fontSize: '13px',
              color: 'var(--muted-2)',
            }}
          >
            리서치, 초안, 발행까지 — 한 워크플로우로
          </p>
        </motion.div>
      </div>
    </section>
  )
}
