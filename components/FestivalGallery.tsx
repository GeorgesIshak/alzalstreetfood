"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import DecorativePattern3 from "./DecorativePattern3";
import { useLanguage } from "@/context/LanguageContext";

const gallery = [
  { src: "/food1.jpg", alt: "Street food stalls" },
  { src: "/food2.jpg", alt: "Crowds and atmosphere" },
  { src: "/food3.jpg", alt: "Night vibes" },
  { src: "/food4.jpg", alt: "Cultural moments" },
  { src: "/food5.jpg", alt: "Day vibes" },
  { src: "/food6.jpg", alt: "Events and performances" },
];

export default function ExploreGallery() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      className="relative w-full py-20 bg-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Decorative pattern */}
      <div
        className={`absolute top-32 w-[110vw] opacity-[0.05] pointer-events-none ${
          isArabic ? "left-0" : "right-0"
        }`}
      >
        <DecorativePattern3 />
      </div>

      <SectionHeader
        label={isArabic ? "أجواء المهرجان" : "Festival Vibes"}
        title={
          isArabic ? (
            <>
              الطاقة التي
              <br />
              تلتقطها اللحظات
            </>
          ) : (
            <>
             Moments that capture  <br />
the energy of the place.            </>
          )
        }
      />

      <div className="w-[94vw] mx-auto mt-14 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[340px] md:h-[520px]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[340px] md:h-[520px]">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {gallery.slice(2).map((img, idx) => (
            <div
              key={idx}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[240px] md:h-[280px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}