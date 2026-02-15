"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSouk() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      className="relative w-full py-20 bg-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* subtle background wash */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl" />

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

      <div className="w-[94vw] mx-auto mt-10">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* ===== LEFT: TEXT ===== */}
          <div className="col-span-12 lg:col-span-5">
            <p className="max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
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
            <p className="mt-8 text-sm md:text-base text-[#6b1415]/65 leading-relaxed max-w-[520px]">
              {isArabic
                ? `كل جولة تكشف تفصيلاً مختلفًا، وكل زيارة تترك أثرًا جديدًا، لتصبح التجربة أقرب إلى لحظة تُعاش وتُشارك، لا مجرد مكان للزيارة.`
                : `Every walk reveals a new detail, and every visit leaves a fresh impression, transforming the experience into a moment that is lived and shared, rather than simply a place to visit.`}
            </p>
          </div>

          {/* ===== RIGHT: IMAGE WITH FLOATING CARD ===== */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              {/* main image */}
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[420px] md:h-[520px] lg:h-[620px]">
                <Image
                  src="/event1.jpg"
                  alt="Experience Al Zal"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </div>

              {/* floating card */}
              <div className="absolute -bottom-8 md:-bottom-10 left-6 md:left-10 right-6 md:right-auto md:w-[420px]">
                <div className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#6b1415]/70">
                    {isArabic ? "لحظة من الزل" : "A moment at Al Zal"}
                  </p>

                  <p
                    className={`mt-3 text-[#6b1415] font-medium text-[1.05rem] leading-snug ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {isArabic
                      ? "كل زيارة لها طابعها… وكل خطوة تحكي تفصيلاً."
                      : "Every visit has its own character — and every step reveals a detail."}
                  </p>

                  <p className="mt-3 text-sm text-[#6b1415]/70 leading-relaxed">
                    {isArabic
                      ? "تجربة تُعاش وتُشارك، لا تُمرّ مرورًا سريعًا."
                      : "An experience to be lived and shared — not just passed through."}
                  </p>
                </div>
              </div>
            </div>

            {/* space for floating card */}
            <div className="h-12 md:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
