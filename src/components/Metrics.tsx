"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  numericValue: number | null;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: "45,000+", numericValue: 45000, suffix: "+", label: "생성된 노트" },
  { value: "4.8", numericValue: 4.8, suffix: "", label: "Chrome 스토어 평점" },
  { value: "3분", numericValue: 3, suffix: "분", label: "평균 초안 완성 시간" },
  { value: "무료", numericValue: null, suffix: "", label: "지금 바로 시작" },
];

function CountUp({
  target,
  suffix,
  isDecimal,
  shouldStart,
}: {
  target: number;
  suffix: string;
  isDecimal: boolean;
  shouldStart: boolean;
}) {
  const [display, setDisplay] = useState(isDecimal ? "0.0" : "0");
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1500;

  useEffect(() => {
    if (!shouldStart) return;

    startTimeRef.current = null;

    const tick = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(
          Math.floor(current).toLocaleString("ko-KR")
        );
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldStart, target, isDecimal]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 px-6 py-8"
    >
      <span
        style={{
          fontSize: "clamp(40px, 6vw, 64px)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: stat.numericValue !== null ? "var(--accent)" : "var(--foreground)",
        }}
      >
        {stat.numericValue !== null ? (
          <CountUp
            target={stat.numericValue}
            suffix={stat.suffix}
            isDecimal={!Number.isInteger(stat.numericValue)}
            shouldStart={isInView}
          />
        ) : (
          stat.value
        )}
      </span>
      <span
        style={{ color: "var(--muted)", fontSize: "0.95rem", fontWeight: 500 }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="site-section section-band metrics-section"
    >
      <div className="container-wide">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            textAlign: "center",
            color: "var(--accent)",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          숫자로 보는 틸노트
        </motion.p>

        {/* Stats grid */}
        <div
          className="metrics-grid"
        >
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
