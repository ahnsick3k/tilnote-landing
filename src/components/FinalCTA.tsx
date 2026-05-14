"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  const clipUrl = "https://chromewebstore.google.com/detail/%ED%8B%B8%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A6%BD/focbaalelhmfiddakohmchapddnhbdkp";

  return (
    <section
      className="site-section final-cta-section"
      style={{
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      {/* Radial gradient bloom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 58%, rgba(95,101,240,0.07) 0%, rgba(59,130,246,0.03) 45%, transparent 76%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-narrow" style={{ position: "relative" }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--foreground)",
            marginBottom: "20px",
          }}
        >
          지금 바로 시작하세요
        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          style={{
            fontSize: "1.05rem",
            color: "var(--muted-2)",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          무료로 사용할 수 있습니다. 신용카드가 필요하지 않습니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {/* Primary CTA */}
          <motion.a
            href="https://tilnote.io/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ padding: "16px 36px" }}
          >
            무료로 시작하기
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href={clipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ padding: "16px 36px" }}
          >
            Chrome 확장 설치
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          style={{
            fontSize: "0.875rem",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "#fbbf24", letterSpacing: "0.05em" }}>
            ★★★★★
          </span>{" "}
          Chrome 웹스토어 4.8점 · 1,000개 이상 리뷰
        </motion.p>
      </div>
    </section>
  );
}
