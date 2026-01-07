'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

export default function TypoAnim() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Split text into chars
    const text = new SplitType(textRef.current, { types: 'chars' });
    const chars = text.chars;

    // Smooth scrolling
    const lenis = new Lenis({ lerp: 0.2, smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

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
          start: 'top 20%',
          end: 'bottom+=500% top',
          scrub: true,
          pin: true,
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
<section
  ref={containerRef}
  className="relative w-screen min-h-[100vh] bg-white flex flex-col items-center justify-start pt-32"
>
  <h2
    ref={textRef}
    className="target text-[4vw] md:text-[3rem] leading-tight text-center font-s text-[#6b1415]"
  >
    Feel because you have a heart
    <br />
    And let it guide you through the dark.
    <br />
    For the well of emotions deep,
    <br />
    That helps you laugh, love, and sleep.
  </h2>
</section>

  );
}
