'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const mockups = [
  '/mockups/mockup1.png',
  '/mockups/mockup2.png',
  '/mockups/mockup3.png',
  '/mockups/mockup4.png',
  '/mockups/mockup5.png',
  '/mockups/mockup6.png',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mockups.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-zinc-100 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        {/* 상단 카테고리 */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm border">
            Tech
          </div>
          <div className="text-zinc-400 text-sm">Lazyweb</div>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-zinc-900">
          바보 같은 내 AI를<br />
          웹디자이너로 만드는 법
        </h1>
        <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
          25만 개의 사이트, 한 번에 교육 진행시켜
        </p>

        {/* 목업 컨테이너 */}
        <div className="relative mx-auto max-w-[1100px] h-[620px] flex items-center justify-center perspective-1000">
          {mockups.map((src, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-[1200ms] ease-out rounded-3xl overflow-hidden border-[14px] border-zinc-900 shadow-2xl
                ${index === current 
                  ? 'opacity-100 scale-100 z-20' 
                  : 'opacity-0 scale-90 z-10'
                }`}
              style={{
                transform: index === current 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -48%) scale(0.88)',
                left: '50%',
                top: '50%',
              }}
            >
              <Image
                src={src}
                alt={`Website Mockup ${index + 1}`}
                width={920}
                height={560}
                className="rounded-2xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-black text-white rounded-2xl font-medium text-lg hover:bg-zinc-800 transition">
            지금 시작하기
          </button>
          <button className="px-10 py-4 border border-zinc-300 rounded-2xl font-medium text-lg hover:bg-white transition">
            영상으로 보기
          </button>
        </div>
      </div>

      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:50px_50px] opacity-40" />
    </section>
  );
}
