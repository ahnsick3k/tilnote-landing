"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "이민",
    name: "이민지",
    role: "콘텐츠 마케터",
    quote:
      "예전엔 글 한 편에 3시간은 기본이었는데, 이제 리서치부터 초안까지 30분이면 끝납니다. 발행 횟수가 월 2편에서 주 3편으로 늘었어요.",
  },
  {
    initials: "박준",
    name: "박준혁",
    role: "개발 블로거",
    quote:
      "TIL 포스팅을 꾸준히 못 했는데, 이제는 공부한 날 바로 발행합니다. 웹 클리핑 기능 덕분에 탭 지옥에서 해방됐어요.",
  },
  {
    initials: "김서",
    name: "김서연",
    role: "프리랜서 라이터",
    quote:
      "ChatGPT 따로, 노션 따로 쓰다가 넘어왔는데 비교가 안 돼요. 클리핑부터 발행까지 한 곳에서 되는 게 이렇게 편할 줄 몰랐습니다.",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.14, ease: "easeOut" }}
      style={{
        background: "#ffffff",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "28px",
        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "2px", lineHeight: 1 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{ color: "#fbbf24", fontSize: "16px" }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: "15px",
          color: "var(--foreground)",
          lineHeight: 1.75,
          fontWeight: 400,
          fontStyle: "italic",
          flexGrow: 1,
          margin: 0,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Avatar */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            flexShrink: 0,
            background: "var(--accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "-0.01em",
          }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--foreground)",
              lineHeight: 1.2,
            }}
          >
            {testimonial.name}
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 1.2,
            }}
          >
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={sectionRef} className="site-section">
      <div className="container">
        {/* Section heading */}
        <motion.div
          className="section-heading center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-kicker">사용자 후기</span>
          <h2 className="section-title">함께하는 분들의 이야기</h2>
          <p className="section-copy center">
            틸노트를 사용하는 분들이 직접 전해준 이야기입니다.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
