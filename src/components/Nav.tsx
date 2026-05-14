'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const clipUrl = 'https://chromewebstore.google.com/detail/%ED%8B%B8%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A6%BD/focbaalelhmfiddakohmchapddnhbdkp'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = ['features', 'how', 'metrics']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const navLinks = [
    { label: '기능', href: '#features' },
    { label: '사용법', href: '#how' },
    { label: '성과 지표', href: '#metrics' },
  ]

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.08)' : '1px solid transparent',
        }}
      >
        <div className="container-wide site-nav">
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--foreground)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>T</span>ILNOTE
          </Link>

          {/* Desktop nav links */}
          <nav
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
            className="hidden-mobile"
          >
            <a
              href={clipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-sm"
            >
              Clip 설치하기
            </a>
            <a
              href="https://tilnote.io/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-sm"
            >
              시작하기
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--foreground)',
                borderRadius: '2px',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--foreground)',
                borderRadius: '2px',
                transition: 'opacity 0.3s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--foreground)',
                borderRadius: '2px',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="nav-link"
                  style={{
                    fontSize: '28px',
                    color: 'var(--foreground)',
                    fontWeight: 700,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                width: '240px',
              }}
            >
              <a
                href={clipUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-secondary-sm"
                style={{
                  textAlign: 'center',
                  padding: '14px 24px',
                  fontSize: '16px',
                  borderRadius: '10px',
                  borderWidth: '1px',
                  borderColor: 'rgba(37,99,235,0.26)',
                }}
              >
                Clip 설치하기
              </a>
              <a
                href="https://tilnote.io/landing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-primary-sm"
                style={{
                  textAlign: 'center',
                  padding: '14px 24px',
                  fontSize: '16px',
                  fontWeight: 700,
                  borderRadius: '10px',
                }}
              >
                시작하기
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles in globals.css */}
    </>
  )
}
