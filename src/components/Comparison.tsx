'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tableRows = [
  {
    label: '리서치 시간',
    manual: '2-3시간',
    chatgpt: '30분+',
    tilnote: '3분',
  },
  {
    label: '웹 클리핑 연동',
    manual: '❌',
    chatgpt: '❌',
    tilnote: '✓',
  },
  {
    label: '블로그 직접 발행',
    manual: '수동 복붙',
    chatgpt: '수동 복붙',
    tilnote: '자동 연동',
  },
  {
    label: '노트 관리',
    manual: '따로 필요',
    chatgpt: '따로 필요',
    tilnote: '한 곳에서',
  },
  {
    label: '무료 사용',
    manual: '✓',
    chatgpt: '✓ (제한)',
    tilnote: '✓',
  },
]

const faqs = [
  {
    q: 'ChatGPT랑 뭐가 달라요?',
    a: 'ChatGPT는 대화 도구입니다. TILNOTE는 클리핑 → AI 초안 → 발행까지 연결된 워크플로우예요. 매번 복사-붙여넣기 없이 한 흐름으로 끝납니다.',
  },
  {
    q: '정말 무료로 사용할 수 있나요?',
    a: '네, 지금은 완전 무료입니다. 신용카드도 필요 없어요. 무료로 시작해서 직접 경험해보세요.',
  },
  {
    q: '제 글 스타일이 그대로 유지될까요?',
    a: 'AI가 초안 구조를 잡아주고, 최종 편집은 내가 합니다. 방향은 AI가, 목소리는 내가 내는 방식이에요.',
  },
  {
    q: '어떤 플랫폼에 발행할 수 있나요?',
    a: 'Velog, 티스토리, 브런치 연동을 지원합니다. 마크다운 내보내기로 어디든 자유롭게 발행할 수 있어요.',
  },
]

function getCellColor(value: string): React.CSSProperties {
  if (value === '❌') return { color: 'var(--muted-2)' }
  if (value === '✓' || value === '✓ (제한)') return { color: '#22c55e' }
  return {}
}

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="site-section"
      style={{ background: 'transparent' }}
    >
      <div className="container">
        {/* Section heading */}
        <motion.div
          className="section-heading center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-kicker">왜 TILNOTE인가</span>
          <h2 className="section-title">직접 비교해보세요</h2>
          <p className="section-copy center">다른 방식과 무엇이 다른지 한눈에 확인하세요.</p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          style={{ overflowX: 'auto', borderRadius: '20px' }}
        >
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              overflow: 'hidden',
              minWidth: '520px',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 1fr 1fr',
                background: 'var(--surface-2)',
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--muted)',
                  borderRight: '1px solid var(--border)',
                }}
              />
              {/* 직접 작성 */}
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  textAlign: 'center',
                  borderRight: '1px solid var(--border)',
                }}
              >
                직접 작성
              </div>
              {/* ChatGPT */}
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  textAlign: 'center',
                  borderRight: '1px solid var(--border)',
                }}
              >
                ChatGPT
              </div>
              {/* TILNOTE */}
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textAlign: 'center',
                  background: 'var(--accent-soft)',
                }}
              >
                TILNOTE
              </div>
            </div>

            {/* Table rows */}
            {tableRows.map((row, index) => {
              const isEven = index % 2 === 0
              const rowBg = isEven ? '#ffffff' : 'var(--surface)'
              return (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr 1fr 1fr',
                    background: rowBg,
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {/* Row label */}
                  <div
                    style={{
                      padding: '15px 20px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      borderRight: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {row.label}
                  </div>

                  {/* 직접 작성 */}
                  <div
                    style={{
                      padding: '15px 20px',
                      fontSize: '14px',
                      textAlign: 'center',
                      borderRight: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...getCellColor(row.manual),
                    }}
                  >
                    {row.manual}
                  </div>

                  {/* ChatGPT */}
                  <div
                    style={{
                      padding: '15px 20px',
                      fontSize: '14px',
                      textAlign: 'center',
                      borderRight: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...getCellColor(row.chatgpt),
                    }}
                  >
                    {row.chatgpt}
                  </div>

                  {/* TILNOTE */}
                  <div
                    style={{
                      padding: '15px 20px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textAlign: 'center',
                      background: 'var(--accent-soft)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.tilnote}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* FAQ section */}
        <div style={{ marginTop: '56px' }}>
          {/* FAQ label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <span className="section-kicker">자주 묻는 질문</span>
          </motion.div>

          {/* FAQ grid */}
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 + index * 0.1 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: '8px',
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
