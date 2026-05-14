'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function UseCaseVideo() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="usecase"
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
          <span className="section-kicker">실제 사용 사례</span>
          <h2 className="section-title">3분이면 충분합니다</h2>
          <p className="section-copy center">
            실제 사용자가 틸노트로 리서치부터 발행까지 마치는 과정을 확인해보세요.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/*
            실제 영상 삽입 방법:
            - YouTube: <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... />
            - 직접 업로드: <video src="/usecase.mp4" controls poster="/thumbnail.jpg" />
          */}

          {/* 임시 플레이스홀더 — 영상 교체 시 아래 div 전체를 iframe 또는 video로 대체 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
            }}
          >
            {/* Play button */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(95,101,240,0.3)',
                cursor: 'pointer',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 7L22 14L10 21V7Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  marginBottom: '4px',
                }}
              >
                영상 준비 중
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted-2)' }}>
                UseCase 영상을 교체해주세요
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
