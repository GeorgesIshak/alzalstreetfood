"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSouk() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      // Added 'relative' to anchor the blurs and 'overflow-hidden' to stop the horizontal scroll
      className="relative w-full py-20 bg-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background washes - Added background color so blur is visible, pointer-events-none ensures no click interference */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6b1415]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#6b1415]/5 blur-3xl" />

      {/* ===== HEADER ===== */}
      <SectionHeader
        label={isArabic ? "تجربة الزل" : "Experience Al Zal"}
        title={
          isArabic ? (
            <>
              اكتشف الزل
              <br />
              في قلب السوق
            </>
          ) : (
            <>
              Experience <br />
              Al Zal
            </>
          )
        }
      />

      {/* Changed w-[94vw] to max-width with px-6 for safer mobile margins */}
      <div className="w-[94%] mx-auto  mt-10">
        {/* Changed gap-12 to gap-8 on mobile to prevent layout crowding */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ===== LEFT: TEXT ===== */}
          <div className="col-span-12 lg:col-span-5">
            <p className="max-w-full lg:max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
              {isArabic
                ? `في قلب الزل، تنبض تجربة السوق كمساحة ساحرة للحواس. أكشاك طعام، حِرف محلية، ونكهات تحمل جذورها الثقافية بفخر واعتزاز، تتجاور في مشهد حيّ يعكس ثقافة المكان.`
                : `At the heart of Al Zal, the souk experience comes alive as a sensory rich space. Food stalls, local crafts, and flavors proudly rooted in cultural heritage stand side by side in a living scene that reflects the spirit of the place.`}
            </p>

            {/* elegant chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                isArabic ? "أكشاك طعام" : "Food stalls",
                isArabic ? "حِرف محلية" : "Local crafts",
                isArabic ? "نكهات تراثية" : "Heritage flavors",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#6b1415]/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* second paragraph */}
            <p className="mt-8 text-sm md:text-base text-[#6b1415]/65 leading-relaxed max-w-full lg:max-w-[520px]">
              {isArabic
                ? `كل جولة تكشف تفصيلاً مختلفًا، وكل زيارة تترك أثرًا جديدًا، لتصبح التجربة أقرب إلى لحظة تُعاش وتُشارك، لا مجرد مكان للزيارة.`
                : `Every walk reveals a new detail, and every visit leaves a fresh impression, transforming the experience into a moment that is lived and shared, rather than simply a place to visit.`}
            </p>
          </div>

          {/* ===== RIGHT: IMAGE WITH FLOATING CARD ===== */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              {/* main image - h-auto on mobile to maintain aspect ratio if preferred, or kept fixed for design */}
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[300px] md:h-[520px] lg:h-[620px]">
                <Image
                  src="/event1.jpg"
                  alt="Experience Al Zal"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
