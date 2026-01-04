"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

export default function TypoAnim() {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !textRef.current) return;

    // Split text into chars
    const text = new SplitType(textRef.current, { types: 'chars' });
    const chars = text.chars;

    // Smooth scrolling
  const lenis = new Lenis({
    lerp: 0.2,         
    smoothWheel: true, 
  });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Get section height
    const sectionHeight = containerRef.current.offsetHeight;

    // GSAP ScrollTrigger animation
    gsap.fromTo(
      chars,
      { scaleY: 0, opacity: 0, transformOrigin: '50% 100%' },
      {
        scaleY: 1,
        opacity: 1,
        stagger: 0.05,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',             // starts when top of section hits 80% of viewport
          end: () => `+=${sectionHeight}`, // animate until the entire section is scrolled
          scrub: true,
          markers: false,               // set to true for debugging
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-screen min-h-[100vh] flex flex-col items-center justify-start pt-32 bg-white overflow-hidden"
    >
    {/* Small decorative SVGs */}
<div className="absolute top-8 left-8 w-[120px] h-[120px] opacity-10 pointer-events-none text-[#6b1415]">
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="currentColor" />
    <path
      d="M60 20 L100 60 L60 100 L20 60 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
</div>

<div className="absolute bottom-8 right-8 w-[150px] h-[150px] opacity-10 pointer-events-none text-[#6b1415]">
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Outer diamond with only stroke */}
    <path d="M75 0 L150 75 L75 150 L0 75 Z" fill="none" stroke="currentColor" strokeWidth="5" />
    {/* Inner diamond also only stroke */}
    <path d="M75 25 L125 75 L75 125 L25 75 Z" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
</div>


      {/* Text */}
      <h2
        ref={textRef}
        className="target w-full max-w-[1240px] text-[5vw] md:text-[3rem] leading-tight text-left font-s text-[#6b1415]"
      >
        At Al Zal Street Food, we don’t just serve street food — we celebrate it.
        We love the bold flavors, the energy of the streets, and the way great
        food brings people together. Every bite reflects the spirit of the places
        it comes from and the hands that prepared it. Whether you arrive hungry
        or simply curious, you’ll find something that speaks to you.
      </h2>
    </section>
  );
}
