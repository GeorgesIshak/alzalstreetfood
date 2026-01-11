"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react"; // Matching footer style

export default function RestaurantCarousel() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section className="w-screen overflow-hidden bg-[#f0edea] py-24">
      {/* ===== HEADER ===== */}
      <SectionHeader
        label={isArabic ? "استكشف" : "Explore"}
        title={
          isArabic ? (
            <>استكشف <br />نكهات <br />مميزة</>
          ) : (
            <>Explore up thoughtful <br />flavors</>
          )
        }
      />

      <Swiper
        key={lang} 
        dir={isArabic ? "rtl" : "ltr"} 
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        freeMode={{ enabled: true, momentum: false }}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        className="px-12 py-10"
      >
        {restaurants.map((item, index) => (
          <SwiperSlide key={item.id} className="!w-[415px] !h-[560px]">
            <div className="group relative h-full w-full overflow-hidden cursor-pointer rounded-[2.5rem] bg-[#1a1a1a] transition-all duration-700">
              
              {/* IMAGE: Subtle desaturation on hover */}
              <Image
                src={item.image}
                alt={isArabic ? item.nameAr || item.name : item.name}
                fill
                className="object-cover transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-[0.5]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b1415]/10 via-black/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100 z-[5]" />

              {/* INITIAL CENTER TITLE */}
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-4xl font-serif italic text-white z-10 transition-all duration-700 group-hover:opacity-0 group-hover:-translate-y-[150%] tracking-tight">
                {isArabic ? item.nameAr || item.name : item.name}
              </h2>

              {/* HOVER CONTENT */}
              <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-10 transition-all duration-700`}>
                
                {/* 1. Category in Brand Maroon */}
                <span className="text-[#f0edea] bg-[#6b1415] px-3 py-1 rounded-md uppercase tracking-[0.2em] text-[10px] font-bold mb-6 translate-y-8 opacity-0 transition-all duration-500 delay-[100ms] group-hover:translate-y-0 group-hover:opacity-100">
                  {isArabic ? item.categoryAr || item.category : item.category}
                </span>

                {/* 2. Name */}
                <h3 className="text-4xl font-bold text-white mb-4 translate-y-8 opacity-0 transition-all duration-500 delay-[200ms] group-hover:translate-y-0 group-hover:opacity-100">
                  {isArabic ? item.nameAr || item.name : item.name}
                </h3>

                {/* 3. Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-10 translate-y-8 opacity-0 transition-all duration-500 delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">
                  {isArabic ? item.descriptionAr || item.description : item.description}
                </p>

                {/* 4. Button: Matching Footer Style */}
                <div className="translate-y-8 opacity-0 transition-all duration-500 delay-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="group/btn relative inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#6b1415] transition-all duration-500">
                    {isArabic ? "استكشف" : "Explore"}
                    <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* ACCENT BORDER */}
              <div className="absolute inset-6 border border-white/0 rounded-[1.8rem] transition-all duration-1000 group-hover:border-white/10 pointer-events-none z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
