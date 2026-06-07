"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import DecorativePattern4 from "./DecorativePattern4";
import { useLanguage } from "@/context/LanguageContext";

export default function ExploreStory() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      className="relative w-full py-12 md:py-20 bg-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Decorative pattern */}
      <div
        className={`absolute top-26 w-[500px] h-[260px] pointer-events-none z-10 ${
          isArabic ? "left-0" : "right-0"
        } hidden md:block`}
      >
        <DecorativePattern4 />
      </div>

      <SectionHeader
        label={isArabic ? "قصتنا وتجربتنا" : "Our Story & Experience"}
        title={
          isArabic ? (
            <>
              ثقافة الطعام  
              <br />
              بروح السوق
            </>
          ) : (
            <>
              Street food culture
              <br />
              with a souk spirit
            </>
          )
        }
      />

      {/* FIXED: Changed from w-[94vw] to w-[94%] to prevent mobile horizontal scroll issues */}
      <div className="w-[94%] mx-auto mt-6">
        {/* FIXED: Changed layout grid split from 6/6 to 5/7 on large screens for better visual balance */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Text & Image 1) */}
          <div className="col-span-12 lg:col-span-5">
            {/* FIXED: Added max-w-full and responsive text scaling for crisp mobile reading */}
            <p className="max-w-full lg:max-w-[620px] text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
              {isArabic
                ? `سِكّة الأطعمة ليست مجرد وجهة للطعام، بل مساحة تنبض بالحياة وتحتفي بالتنوّع. تجربة صُممت لتجمع بين الأصالة المحلية والانفتاح على النكهات العالمية، حيث تُقدَّم الأطباق كجزء من قصة أكبر تحكي عن المجتمع، والحِرف، والذوق، والذاكرة.`
                : `Street Food is more than a food destination. It is a vibrant space that celebrates diversity. An experience designed to bring together local authenticity and openness to global flavors, where dishes are presented as part of a larger story that speaks to community, craftsmanship, taste, and memory.`}
            </p>

            {/* FIXED: Reduced top margin on mobile (mt-6) and scaled image container heights */}
            <div className="flex flex-col mt-6 md:mt-10">
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
                <Image
                  src="/experience1.jpg"
                  alt="Enjoying food moments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Image 2) */}
          {/* FIXED: Changed from col-span-6 to col-span-7 on lg screens */}
          <div className="col-span-12 lg:col-span-7">
            {/* FIXED: Scaled mobile height to h-[280px] so stacked images look balanced on phones */}
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[280px] sm:h-[340px] md:h-[400px] lg:h-[460px]">
              <Image
                src="/experience2.jpg"
                alt="Azzal street food atmosphere"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
