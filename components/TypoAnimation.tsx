'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function TypoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

useEffect(() => {
  if (!textRef.current || !containerRef.current) return;

  // 1. Split text
  const text = new SplitType(textRef.current, { types: 'words' });
  const words = text.words;
  if (!words) return;

  words.forEach((word) => gsap.set(word.parentNode, { perspective: 1000 }));

  // 2. Initialize Lenis (Fixed smooth property error)
  const lenis = new Lenis({
    lerp: 0.1,         // Slightly lower for better smoothness
    smoothWheel: true, // Use this instead of 'smooth'
  });
  lenisRef.current = lenis;

  // 3. Sync with GSAP Ticker (Fixes the "slow/not smooth" feel)
  const updateTicker = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(updateTicker);

  lenis.on('scroll', ScrollTrigger.update);

  // 4. GSAP Animation
  gsap.fromTo(
    words,
    {
      'will-change': 'opacity, transform',
      z: () => gsap.utils.random(500, 950),
      opacity: 0,
      xPercent: () => gsap.utils.random(-100, 100),
      yPercent: () => gsap.utils.random(-10, 10),
      rotationX: () => gsap.utils.random(-90, 90),
    },
    {
      ease: 'expo',
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      xPercent: 0,
      yPercent: 0,
      z: 0,
      stagger: { each: 0.006, from: 'random' },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top', // Changed to top top for better pinning feel
        end: '+=300%',
        scrub: true,
        pin: true,
      },
    }
  );

  return () => {
    gsap.ticker.remove(updateTicker);
    lenis.destroy();
    text.revert(); // Good practice to revert SplitType
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    
    <div ref={containerRef}>
      
      <div className="flex flex-col w-screen px-8 py-14 ">
        <div
  className="
    absolute
    right-0
    top-32
    w-[620px]
    h-[420px]
    opacity-[0.05]
    pointer-events-none
    rotate-[-12deg]
    translate-x-10
    -translate-y-12
  "
>
  <svg
    viewBox="0 0 700 450"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full text-[#6b1415]"
  >
    {/* LEFT DIAMOND */}
    <path
      d="M150 60 L280 200 L150 340 L20 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />

    <path
      d="M150 120 L230 200 L150 280 L70 200 Z"
      fill="currentColor"
      opacity="0.4"
    />

    {/* CENTER DIAMOND (ANCHOR) */}
    <path
      d="M350 40 L520 200 L350 360 L180 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
    />

    <path
      d="M350 110 L450 200 L350 290 L250 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      opacity="0.85"
    />

    <path
      d="M350 150 L420 200 L350 250 L280 200 Z"
      fill="currentColor"
      opacity="0.55"
    />

    {/* RIGHT DIAMOND */}
    <path
      d="M560 70 L680 200 L560 330 L440 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      opacity="0.8"
    />

    <path
      d="M560 130 L620 200 L560 270 L500 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.6"
    />

    {/* CONNECTING STEPPED BARS (Najdi masonry feel) */}
    <path d="M280 200 H180" stroke="currentColor" strokeWidth="4" />
    <path d="M520 200 H440" stroke="currentColor" strokeWidth="4" />

    {/* MICRO NAJDI MARKS (handcrafted detail) */}
    <rect x="110" y="30" width="12" height="12" fill="currentColor" />
    <rect x="330" y="20" width="14" height="14" fill="currentColor" />
    <rect x="590" y="40" width="10" height="10" fill="currentColor" />

    <rect x="110" y="380" width="12" height="12" fill="currentColor" />
    <rect x="330" y="390" width="14" height="14" fill="currentColor" />
    <rect x="590" y="360" width="10" height="10" fill="currentColor" />
  </svg>
</div>
        <h2 className="text-[4vw] pt-[200px] leading-[0.8] text-center grid gap-8 content-title text-[#6b1415]">
          <span ref={textRef} className="target h-8">
         Discover flavors that delight your senses, <br />
    explore our exquisite menus crafted with passion, <br />
    and experience moments that turn into memories.
          </span>
        </h2>
      </div>
    
    </div>
  );
}
