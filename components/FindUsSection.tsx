"use client";

import SectionHeader from "./SectionHeader";
import { Car, Bus, MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FindUsSection() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

const arrive = [
  {
    icon: Car,
    title: isArabic ? "بواسطة السيارة" : "By Car",
    desc: isArabic
      ? "يمكن الوصول إلى الموقع بسهولة عبر الطرق الرئيسية، مع توفر مواقف قريبة للسيارات."
      : "Easily accessible through main roads, with nearby parking available.",
  },
  {
    icon: Bus,
    title: isArabic ? "بواسطة النقل العام" : "By Public Transport",
    desc: isArabic
      ? "يمكن الوصول إلى الوجهة عبر وسائل النقل العام، بما في ذلك محطة مترو قصر الحكم ومحطة مجمع المحاكم."
      : "The destination can be reached using public transportation, including Qasr Al Hokm Metro Station and Courts Complex Metro Station.",
  },
  {
    icon: Navigation,
    title: isArabic ? "بواسطة سيارات الأجرة وتطبيقات النقل" : "By Taxi & Ride Apps",
    desc: isArabic
      ? "يمكن الوصول إلى الموقع بسهولة عبر سيارات الأجرة وتطبيقات النقل المختلفة، بما في ذلك تطبيق درب."
      : "Visitors can reach the destination easily through ride-hailing and transportation apps, including the Darb app.",
  },
  {
    icon: MapPin,
    title: isArabic ? "سيرًا على الأقدام" : "On Foot",
    desc: isArabic
      ? "كما يمكن الوصول إلى الموقع سيرًا على الأقدام لمن يفضل استكشاف المنطقة المحيطة."
      : "The destination is also easily walkable for visitors exploring the surrounding area.",
  },
];

  return (
    <section
      // 'overflow-hidden' is critical to stop the background blur from causing sideways scroll
      className="relative w-full py-20 bg-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6b1415]/5 blur-3xl" />

      {/* ===== HEADER ===== */}
      <SectionHeader
        label={isArabic ? "موقعنا" : "Find Us / Location"}
        title={
          isArabic ? (
            <>
              كل الطرق
              <br /> تقود إلى سِكّة الأطعمة            </>
          ) : (
            <>
              All roads lead <br />
              to Street Food
            </>
          )
        }
      />

      {/* Kept your 94vw width as requested */}
      <div className="w-[94vw] mx-auto mt-12">
        {/* Reduced gap to 6 on mobile (gap-6) and 12 on desktop (lg:gap-12) */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* ===== LEFT: TEXT + ARRIVE ===== */}
          <div className="col-span-12 lg:col-span-6">
            <p className="max-w-full lg:max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
              {isArabic
                ? "تقع الوجهة في قلب مدينة الرياض، وتُعد مكانًا يسهل الوصول إليه ويجمع الزوار من مختلف أنحاء المدينة للاستمتاع بتجربة طعام نابضة بالحياة."
                : "Located in the heart of Riyadh, the destination is easily accessible and serves as a vibrant meeting point for visitors from across the city."}
            </p>

            <p className="mt-10 text-xs uppercase tracking-[0.28em] text-[#6b1415]/60 font-bold">
              {isArabic ? "كيفية الوصول" : "How to Arrive"}
            </p>

            {/* Grid for Arrival Cards */}
            <div className="mt-4 grid grid-cols-12 gap-3">
              {arrive.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="col-span-12 sm:col-span-6 rounded-xl border border-black/10 bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-11 w-11 rounded-xl bg-[#6b1415]/10 flex items-center justify-center p-2.5">
                        <Icon className="text-[#6b1415]" size={20} />
                      </div>

                      <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[#6b1415] font-medium text-[1.05rem]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[#6b1415]/70 leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== RIGHT: MAP ===== */}
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-xl border border-black/10 overflow-hidden bg-white">
                {/* Adjusted height for mobile (h-[300px]) so it fits better on small screens */}
                <div className="h-[300px] md:h-[430px] lg:h-[520px] w-full">
                 <iframe
  title="Street Food Location"
  className="h-full w-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=سكة+الأطعمة+الرياض&output=embed"
/>
                </div>
              </div>

              <p
                className={`mt-6 text-sm md:text-base text-[#6b1415]/70 leading-relaxed max-w-full lg:max-w-[520px] ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {isArabic
                  ? "استخدم الخريطة لتحديد أفضل طريق، واختر نقطة الوصول الأقرب للمدخل."
                  : "Use the map to plan your route and choose the closest drop-off point to the entrance."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
