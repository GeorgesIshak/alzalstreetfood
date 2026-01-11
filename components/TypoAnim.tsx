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
    en: `At Al Zal Street Food, we don’t just serve street food — we celebrate it.
We love the bold flavors, the energy of the streets, and the way
great food brings people together. Every bite reflects the spirit of the places
it comes from and the hands that prepared it. Whether you arrive hungry
or simply curious, you’ll find something that speaks to you.`,

    ar: `في الزل ستريت فود، نحن لا نقدّم الطعام فقط — بل نحتفل به.
نحن نحب النكهات الجريئة، وحيوية الشوارع، والطريقة التي
يجمع بها الطعام الرائع الناس معًا. كل لقمة تعكس روح الأماكن
التي تأتي منها والأيدي التي أعدتها. سواء أتيت جائعًا
أو فضوليًا، ستجد شيئًا يتحدث إليك.`,
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
      className="relative w-screen min-h-[120vh] flex flex-col items-center justify-start pt-52 pb-20 overflow-hidden bg-[#f0edea]"
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
        className={`w-[90vw] md:text-[3rem] leading-[70px] font-normal text-[#6b1415] ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        {content[lang]}
      </h2>
    </section>
  );
}
