'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

// ─────────────────────────────────────────────────
// Mockup 1: 웹/유튜브 클리핑
// ─────────────────────────────────────────────────
function ClippingMockup() {
  return (
    <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      {/* Browser bar */}
      <div style={{ background: '#f5f6fa', padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />)}
        </div>
        <div style={{ flex: 1, background: 'rgba(0,0,0,0.05)', borderRadius: '6px', padding: '4px 12px', fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#4ade80', fontSize: '9px' }}>●</span>
          techcrunch.com/2026/03/ai-agents-future
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', fontSize: '11px', color: '#2563eb', fontWeight: 700, flexShrink: 0 }}
        >
          T
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', display: 'flex', gap: '16px', minHeight: '246px' }}>
        {/* Article */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>The Rise of AI Agents in 2026</div>
          <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '6px' }}>TechCrunch · March 23, 2026</div>
          {[90, 100, 80, 95, 70, 85, 60, 75].map((w, i) => (
            <div key={i} style={{ height: '7px', width: `${w}%`, borderRadius: '3px', background: 'rgba(0,0,0,0.07)' }} />
          ))}
        </div>

        {/* Extension popup */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          style={{ width: '152px', flexShrink: 0, background: '#ffffff', borderRadius: '10px', border: '1px solid rgba(37,99,235,0.25)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>T</div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em' }}>TILNOTE</span>
          </div>
          <div style={{ fontSize: '10px', color: '#64748b', lineHeight: 1.5 }}>이 페이지를 노트로 저장합니다</div>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '6px', background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.15)' }}
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 5px rgba(59,130,246,0.6)', flexShrink: 0 }}
            />
            <span style={{ fontSize: '10px', color: '#2563eb', fontWeight: 500 }}>AI 분석 중...</span>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {['핵심 내용 추출', '태그 자동 생성', '노트에 저장'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 + i * 0.32 }}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#64748b' }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.85 + i * 0.32, type: 'spring', stiffness: 400 }}
                  style={{ color: '#22c55e', fontSize: '10px', flexShrink: 0 }}
                >✓</motion.span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────
// Mockup 2: AI 초안 자동 생성
// ─────────────────────────────────────────────────
function DraftMockup() {
  return (
    <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <div style={{ background: '#f5f6fa', padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />)}
        </div>
        <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500 }}>새 노트</span>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '246px' }}>
        {/* URL input row */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.04)', borderRadius: '7px', border: '1px solid rgba(0,0,0,0.08)', padding: '7px 12px', fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#94a3b8', fontSize: '10px' }}>🔗</span>
            techcrunch.com/2026/03/ai-agents-future
          </div>
          <motion.div
            animate={{ boxShadow: ['0 0 0px rgba(37,99,235,0)', '0 0 16px rgba(37,99,235,0.25)', '0 0 0px rgba(37,99,235,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ padding: '7px 14px', borderRadius: '7px', background: '#2563eb', fontSize: '11px', color: '#fff', fontWeight: 600, flexShrink: 0, cursor: 'pointer' }}
          >
            초안 생성
          </motion.div>
        </div>

        {/* Progress bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ fontSize: '10px', color: '#3b82f6', fontWeight: 500 }}>
              AI 초안 생성 중...
            </motion.span>
            <span style={{ fontSize: '10px', color: '#9ca3af' }}>73%</span>
          </div>
          <div style={{ height: '4px', background: 'rgba(0,0,0,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '73%' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)', borderRadius: '2px' }}
            />
          </div>
        </div>

        {/* Generated content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}
          >
            AI 에이전트가 바꾸는 지식 노동의 미래
          </motion.div>
          {[
            { delay: 0.7, lines: [100, 92, 85] },
            { delay: 1.0, lines: [95, 78] },
          ].map((block, bi) => (
            <motion.div key={bi} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: block.delay }} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {block.lines.map((w, li) => (
                <div key={li} style={{ height: '8px', width: `${w}%`, borderRadius: '4px', background: 'linear-gradient(90deg, #f0f1f6 25%, #e6e8f0 50%, #f0f1f6 75%)', backgroundSize: '200% 100%', animation: 'shimmer 2s infinite linear' }} />
              ))}
            </motion.div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ height: '8px', width: '38%', borderRadius: '4px', background: 'rgba(0,0,0,0.05)' }} />
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ width: '2px', height: '14px', background: '#2563eb', borderRadius: '1px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────
// Mockup 3: 에디터 내 AI 보조
// ─────────────────────────────────────────────────
function EditorAIMockup() {
  return (
    <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <div style={{ background: '#f5f6fa', padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />)}
        </div>
        <span style={{ fontSize: '11px', color: '#9ca3af' }}>AI 에이전트 정리노트</span>
        <div style={{ padding: '3px 10px', borderRadius: '5px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)', fontSize: '10px', color: '#2563eb' }}>AI 보조</div>
      </div>

      <div style={{ display: 'flex', minHeight: '246px' }}>
        {/* Editor */}
        <div style={{ flex: 1, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '8px', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>AI 에이전트가 바꾸는...</div>
          {[95, 88, 76].map((w, i) => <div key={i} style={{ height: '7px', width: `${w}%`, borderRadius: '3px', background: 'rgba(0,0,0,0.07)' }} />)}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ padding: '6px 8px', borderRadius: '5px', background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.15)', fontSize: '10px', color: '#2563eb', lineHeight: 1.5, margin: '2px 0' }}
          >
            AI는 복잡한 리서치 워크플로를 자동화하고...
          </motion.div>
          {[80, 92, 65, 70].map((w, i) => <div key={i} style={{ height: '7px', width: `${w}%`, borderRadius: '3px', background: 'rgba(0,0,0,0.07)' }} />)}
        </div>

        {/* AI panel */}
        <div style={{ width: '176px', flexShrink: 0, display: 'flex', flexDirection: 'column', background: '#fafbff' }}>
          <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 5px rgba(59,130,246,0.6)', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#2563eb' }}>AI 보조</span>
          </div>

          <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ padding: '7px 9px', borderRadius: '7px 7px 2px 7px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', fontSize: '10px', color: '#334155', lineHeight: 1.5, alignSelf: 'flex-end' }}
            >
              이 문단을 더 간결하게 다듬어줘
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              style={{ padding: '7px 9px', borderRadius: '7px 7px 7px 2px', background: '#f1f4f8', border: '1px solid rgba(0,0,0,0.07)', fontSize: '10px', color: '#475569', lineHeight: 1.5 }}
            >
              <div style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '4px', fontSize: '9px' }}>AI</div>
              수정안:
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25 }}
                style={{ marginTop: '5px', padding: '5px 7px', borderRadius: '4px', background: 'rgba(37,99,235,0.06)', color: '#2563eb', fontSize: '10px', lineHeight: 1.5 }}
              >
                AI는 리서치 워크플로를 자동화합니다.
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 1.3 }}
                  style={{ display: 'inline-block', width: '2px', height: '11px', background: '#3b82f6', marginLeft: '2px', verticalAlign: 'text-bottom' }}
                />
              </motion.div>
            </motion.div>
          </div>

          <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: '6px', padding: '6px 10px', fontSize: '10px', color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>질문하기...</span>
              <span style={{ color: '#2563eb' }}>↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────
// Mockup 4: 발행·공유·마크다운
// ─────────────────────────────────────────────────
function PublishMockup() {
  const opts = [
    { label: '블로그에 발행', sub: 'Velog, 티스토리, 브런치 연동', icon: '📝', active: false, delay: 0.2 },
    { label: '공개 링크 공유', sub: 'tilnote.io/p/ai-agents-2026', icon: '🔗', active: true, delay: 0.38 },
    { label: '마크다운 내보내기', sub: '.md 파일로 다운로드', icon: '⬇', active: false, delay: 0.56 },
  ]

  return (
    <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <div style={{ background: '#f5f6fa', padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />)}
        </div>
        <span style={{ fontSize: '11px', color: '#9ca3af' }}>AI 에이전트 정리노트 — 발행</span>
      </div>

      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '246px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', marginBottom: '2px' }}>발행 및 공유 옵션</div>
        {opts.map((opt) => (
          <motion.div
            key={opt.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: opt.delay }}
            style={{
              padding: '12px 14px',
              borderRadius: '10px',
              background: opt.active ? 'rgba(37,99,235,0.05)' : '#f8f9fb',
              border: `1px solid ${opt.active ? 'rgba(37,99,235,0.22)' : 'rgba(0,0,0,0.07)'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '16px', flexShrink: 0 }}>{opt.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: opt.active ? '#2563eb' : '#0f172a' }}>{opt.label}</div>
              {opt.active ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}
                >
                  <span style={{ fontSize: '10px', color: '#3b82f6', fontFamily: 'monospace' }}>{opt.sub}</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ padding: '1px 6px', borderRadius: '4px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#16a34a', fontSize: '9px', fontWeight: 600, flexShrink: 0 }}
                  >
                    복사됨 ✓
                  </motion.span>
                </motion.div>
              ) : (
                <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '2px' }}>{opt.sub}</div>
              )}
            </div>
            {opt.active && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.75, type: 'spring', stiffness: 400 }}
                style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff', flexShrink: 0 }}
              >
                ✓
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────
// Feature tab definitions
// ─────────────────────────────────────────────────
const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 6C18 6 20 4 22 6C24 8 22 10 22 10L10 22L6 23L7 19L18 6Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L20 12" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 16H4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 12L6 10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    name: '웹/유튜브 클리핑',
    description: '브라우저 익스텐션으로 웹페이지와 영상을 한 번에 구조화된 노트로 저장합니다.',
    Mockup: ClippingMockup,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 4L15.5 8.5L20 10L15.5 11.5L14 16L12.5 11.5L8 10L12.5 8.5L14 4Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 18L7.8 20.2L10 21L7.8 21.8L7 24L6.2 21.8L4 21L6.2 20.2L7 18Z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 16L21.6 17.8L23 18.4L21.6 19L21 20.8L20.4 19L19 18.4L20.4 17.8L21 16Z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: 'AI 초안 자동 생성',
    description: 'URL만 입력하면 AI가 리서치부터 구조화된 초안 작성까지 자동으로 처리합니다.',
    Mockup: DraftMockup,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M5 7C5 5.9 5.9 5 7 5H21C22.1 5 23 5.9 23 7V17C23 18.1 22.1 19 21 19H16L11 23V19H7C5.9 19 5 18.1 5 17V7Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11H18" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 14H15" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    name: '에디터 내 AI 보조',
    description: '작성 중 바로 질문하고, 설명을 추가하거나, 문장 수정을 요청해 흐름을 끊지 않습니다.',
    Mockup: EditorAIMockup,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 15C11.1 15 12 14.1 12 13C12 11.9 11.1 11 10 11C8.9 11 8 11.9 8 13C8 14.1 8.9 15 10 15Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 24C19.1 24 20 23.1 20 22C20 20.9 19.1 20 18 20C16.9 20 16 20.9 16 22C16 23.1 16.9 24 18 24Z" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.8 14.1L16.2 20.9" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16.2 7.1L11.8 11.9" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    name: '발행·공유·마크다운',
    description: '블로그에 바로 발행하거나 공개 링크로 공유하고, 마크다운으로 내보낼 수 있습니다.',
    Mockup: PublishMockup,
  },
]

const AUTO_ADVANCE_MS = 5000

// ─────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────
export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: false, margin: '-100px' })
  const [active, setActive] = useState(0)

  // Auto-advance every 5 s when section is visible
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => {
      setActive(a => (a + 1) % features.length)
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(t)
  }, [active, inView])

  const { Mockup } = features[active]

  return (
    <section
      id="features"
      ref={sectionRef}
      className="site-section"
      style={{ background: 'transparent' }}
    >
      <div className="container-wide">

        {/* Section header */}
        <motion.div
          className="section-heading center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-kicker">
            핵심 기능
          </span>
          <h2 className="section-title">
            한 곳에서, AI와 함께
          </h2>
          <p className="section-copy center">
            수집부터 발행까지 — 지식 워크플로우의 모든 단계를 AI가 함께합니다.
          </p>
        </motion.div>

        {/* Feature showcase */}
        <div className="features-showcase">

          {/* Left: tab list */}
          <div className="features-tabs">
            {features.map((f, i) => {
              const isActive = active === i
              return (
                <button
                  key={f.name}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`feature-tab${isActive ? ' is-active' : ''}`}
                  style={{
                    color: 'var(--foreground)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    {/* Icon */}
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
                      background: isActive ? 'rgba(95,101,240,0.1)' : 'rgba(0,0,0,0.04)',
                      border: `1px solid ${isActive ? 'rgba(95,101,240,0.22)' : 'rgba(0,0,0,0.08)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.25s',
                    }}>
                      {f.icon}
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: isActive ? 'var(--foreground)' : 'var(--muted)', marginBottom: '4px', transition: 'color 0.2s' }}>
                        {f.name}
                      </div>
                      <div className="feature-tab-desc" style={{ fontSize: '12px', color: 'var(--muted-2)', lineHeight: 1.55, minWidth: 0 }}>
                        {f.description}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar — only on active tab */}
                  {isActive && (
                    <div style={{ height: '2px', background: 'rgba(0,0,0,0.08)', borderRadius: '1px', overflow: 'hidden', marginTop: '12px' }}>
                      <motion.div
                        key={`${i}-${active}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                        style={{ height: '100%', background: 'var(--accent)', borderRadius: '1px' }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: mockup preview */}
          <div className="features-preview">
            <div className="features-preview-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Mockup />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
