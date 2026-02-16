"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";
import DecorativePattern from "./DecorativePattern";
import DecorativePattern1 from "./DecorativePattern1";
import { useLanguage } from "@/context/LanguageContext";

export default function TypoAnim() {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  // 🌍 GLOBAL LANGUAGE (from navbar switcher)
  const { lang } = useLanguage();

const content = {
  en: `At Azzal, the stories of culinary creators intersect with those of visitors, as flavor and memory come together in a vibrant environment that reflects community spirit and attention to detail. An experience that evolves with every visit and leaves a lasting impression beyond the moment.`,

  ar: `في الزل، تجتمع قصص صنّاع الطعام مع قصص الزوّار، وتلتقي الذاكرة بالمذاق في بيئة حيّة تعكس روح المجتمع وتقدّر التفاصيل. تجربة تتغيّر مع كل زيارة، وتترك أثرًا يتجاوز اللحظة.`,
};


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !textRef.current) return;

    // ✅ Smooth scroll
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // ✅ Split text (Arabic-safe)
    const split = new SplitType(textRef.current, {
      types: "words",
      tagName: "span",
    });

    // ✅ Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.words,
        {
          scaleY: 0,
          opacity: 0,
          transformOrigin: lang === "ar" ? "100% 100%" : "0% 100%",
        },
        {
          scaleY: 1,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 10%", // 🔥 finishes before section ends
 scrub: 5.5,          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      split.revert();
      lenis.destroy();
    };
  }, [lang]);

  return (
    <section
      ref={containerRef}
      className="relative w-screen min-h-[90vh] lg:min-h-[120vh] flex flex-col items-center justify-start pt-52 pb-20 overflow-hidden bg-[#ffffff]"
    >
      {/* Decorative SVGs */}
      <div className="absolute top-8 right-16 pointer-events-none text-[#6b1415]">
        <DecorativePattern1 />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none">
        <DecorativePattern />
      </div>

      {/* Animated Text */}
      <h2
        ref={textRef}
        key={lang}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`w-[90vw] leading-[40px] lg:leading-[80px] text-[1.2rem] sm:text-[1.6rem] md:text-[3rem]
font-normal text-[#6b1415] ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        {content[lang]}
      </h2>
    </section>
  );
}
