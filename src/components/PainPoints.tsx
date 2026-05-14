'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pains = [
  {
    emoji: '📑',
    headline: '탭을 수십 개 열어놓고\n결국 다 닫아버렸어요',
    body: '자료는 있는데 어디서부터 시작해야 할지 모르겠고, 시간은 이미 한 시간이 넘었습니다.',
  },
  {
    emoji: '😶',
    headline: '생각은 있는데\n막상 쓰려면 손이 안 가요',
    body: '머릿속은 아이디어로 가득한데, 빈 문서 앞에서 첫 문장을 못 쓰는 날이 반복됩니다.',
  },
  {
    emoji: '📁',
    headline: '저장해둔 자료가\n쌓이기만 해요',
    body: '나중에 정리하려고 클리핑해둔 게 수백 개. 어딘가 있는데 막상 쓸 때는 못 찾습니다.',
  },
  {
    emoji: '📉',
    headline: '블로그를 시작했다가\n또 흐지부지됐어요',
    body: '꾸준히 발행하고 싶었는데, 글 하나에 너무 많은 시간이 걸려 결국 포기하게 됩니다.',
  },
]

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="site-section section-band"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-heading center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-kicker">혹시 이런 경험</span>
          <h2 className="section-title">익숙한 장면이 있으신가요?</h2>
          <p className="section-copy center">
            글을 쓰고 싶은 마음은 충분합니다.<br />
            문제는 그 사이에 놓인 과정들이에요.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
          className="pain-grid"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid var(--border)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '32px', lineHeight: 1 }}>{pain.emoji}</span>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  lineHeight: 1.45,
                  whiteSpace: 'pre-line',
                }}
              >
                {pain.headline}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                {pain.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              fontSize: '18px',
            }}
          >
            ↓
          </span>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--foreground)',
              letterSpacing: '-0.01em',
            }}
          >
            TILNOTE가 이 모든 걸 대신합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
