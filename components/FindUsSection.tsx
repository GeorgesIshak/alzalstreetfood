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
      title: isArabic ? "بالسيارة" : "By Car",
      desc: isArabic
        ? "يمكن الوصول بسهولة عبر الطرق الرئيسية مع توفر مواقف قريبة."
        : "Easily accessible via main roads with nearby parking available.",
    },
    {
      icon: Bus,
      title: isArabic ? "بوسائل النقل" : "By Public Transport",
      desc: isArabic
        ? "يقع الموقع في نطاق يسهل الوصول إليه عبر وسائل النقل العامة، بما في ذلك محطتا مترو قصر الحكم ومجمع المحاكم."
        : "The location is easily accessible via public transportation, including Qasr Al Hokm Metro Station and Courts Complex Metro Station.",
    },
    {
      icon: Navigation,
      title: isArabic ? "بسيارات الأجرة والتطبيقات" : "By Taxi & Ride Apps",
      desc: isArabic
        ? "يمكن الوصول إلى الموقع مباشرة عبر تطبيقات النقل المختلفة، بما في ذلك تطبيق درب (Darb App)."
        : "The location can be accessed directly via various transportation applications, including the Darb App.",
    },
    {
      icon: MapPin,
      title: isArabic ? "مشياً على الأقدام" : "On Foot",
      desc: isArabic
        ? "موقع مناسب للتنقّل سيرًا لمن يفضلون استكشاف المنطقة والتجوّل فيها."
        : "A walkable location for those who prefer to explore the area on foot.",
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
              <br />
              تؤدي إلى الزل
            </>
          ) : (
            <>
              All roads lead <br />
              to Al Zal
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
                ? "يقع الزل ستريت فود في موقع يسهل الوصول إليه، ليكون نقطة التقاء تجمع الزوّار من مختلف الجهات في قلب المدينة."
                : "Al Zal Street Food is located in an easily accessible area, serving as a meeting point that brings visitors together from across the city."}
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
                    title="Al Zal Location"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v0000000000000"
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
