"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ExploreStory() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section className="relative w-full py-20 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <SectionHeader
        label={isArabic ? "قصتنا وتجربتنا" : "Our Story & Experience"}
        title={
          isArabic ? (
            <>
              نكهة الشارع
              <br />
              بروح السوق
            </>
          ) : (
            <>
              Street food culture <br />
              with souk soul
            </>
          )
        }
      />

      <div className="w-[94vw] mx-auto mt-6">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-6">
            <p className="max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
              {isArabic
                ? `الزل ستريت فود ليس مجرد وجهة للطعام، بل مساحة تنبض بالحياة وتحتفي بالتنوّع. تجربة صُممت لتجمع بين الأصالة المحلية والانفتاح على النكهات العالمية، حيث تُقدَّم الأطباق كجزء من قصة أكبر تحكي عن المجتمع، والحِرف، والذوق، والذاكرة.`
                : `Al Zal Street Food is more than a food destination. It is a vibrant space that celebrates diversity. An experience designed to bring together local authenticity and openness to global flavors, where dishes are presented as part of a larger story that speaks to community, craftsmanship, taste, and memory.`}
            </p>

            <div className="flex flex-col mt-10">
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[320px] md:h-[360px] lg:h-[420px]">
                <Image src="/events2.jpg" alt="Enjoying food moments" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[340px] md:h-[400px] lg:h-[460px]">
              <Image
                src="/event1.jpg"
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
