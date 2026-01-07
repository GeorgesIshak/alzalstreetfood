"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';
import DecorativePattern from './DecorativePattern';
import DecorativePattern1 from './DecorativePattern1';

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
      className="relative w-screen min-h-[100vh] flex flex-col items-center justify-start pt-52 bg-[#f0edea] overflow-hidden"
    >
    {/* Small decorative SVGs */}
<div className="absolute top-8 left-8  pointer-events-none text-[#6b1415]">
<DecorativePattern1 />
</div>




      {/* Text */}
      <h2
        ref={textRef}
        className="target w-[94vw] text-[5vw] md:text-[3rem] leading-tight text-left font-s text-[#6b1415]"
      >
        At Al Zal Street Food, we don’t just serve street food — we celebrate it.
        We love the bold flavors, the energy of the streets, and the way <br/>   great
        food brings people together. Every bite reflects the spirit of the places
        it comes from and the hands that prepared it. Whether you arrive hungry
        or simply curious, you’ll find something that speaks to you.
      </h2>
    </section>
  );
}
