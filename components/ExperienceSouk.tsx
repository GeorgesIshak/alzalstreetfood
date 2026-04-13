"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import DecorativePattern4 from "./DecorativePattern4";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSouk() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      className="relative w-full py-20 bg-white overflow-hidden"
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

      {/* Background washes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6b1415]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#6b1415]/5 blur-3xl" />

      <SectionHeader
        label={isArabic ? "تجربة سِكّة الأطعمة" : "Experience Street Food"}
        title={
          isArabic ? (
            <>
              تجربة
              <br />
سِكّة الأطعمة            </>
          ) : (
            <>
              Experience <br />
              Street Food
            </>
          )
        }
      />

      <div className="w-[94%] mx-auto mt-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <p className="max-w-full lg:max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
              {isArabic
                ? `فعِش تجربة سِكّة الأطعمة في قلب السوق، حيث تجتمع أكشاك الطعام والحرف المحلية والنكهات المستوحاة من التراث في مساحة نابضة بالحياة تعكس روح المكان.
`
                : `Experience Street Food at the heart of the souk, where food stalls, local crafts, and flavors rooted in heritage come together in a vibrant space that reflects the spirit of the place`}
            </p>

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

         <p className="mt-8 text-sm md:text-base text-[#6b1415]/65 leading-relaxed max-w-full lg:max-w-[520px]">
              {isArabic
                ? `كل خطوة تكشف تفصيلاً جديدًا، وكل زيارة تترك أثرًا مختلفًا، لتتحول التجربة إلى لحظة تُعاش وتُشارك، لا مجرد مكان للزيارة.
`
                : `Every walk reveals a new detail, and every visit leaves a fresh impression, transforming the experience into a moment that is lived and shared rather than simply a place to visit.`}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[300px] md:h-[520px] lg:h-[620px]">
                <Image
                  src="/explore1.jpg"
                  alt="Experience Street Food"
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