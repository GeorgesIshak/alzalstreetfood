'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import DecorativePattern3 from './DecorativePattern3';

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
    <div className="absolute top-0 right-0 left-0 w-100% h-100% bg-white opacity-5 pointer-events-none">
    <DecorativePattern3 />
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
