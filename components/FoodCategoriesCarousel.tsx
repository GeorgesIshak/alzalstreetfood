"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  {
    name: "Drinks",
    nameAr: "المشروبات",
    image: "/drinks.jpg",
  },
  {
    name: "Dessert",
    nameAr: "الحلويات",
    image: "/10.jpg",
  },
  {
    name: "International Food",
    nameAr: "أطعمة عالمية",
    image: "/1.jpg",
  },
  {
    name: "Mediterranean Food",
    nameAr: "أطعمة متوسطية",
    image: "/food2.jpg",
  },
  {
    name: "Traditional Saudi",
    nameAr: "سعودي تقليدي",
    image: "/food5.jpg",
  },
];

export default function FoodCategoriesCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#6b1415"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="w-screen py-32 overflow-hidden transition-colors duration-300"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto w-[96vw] mb-16"
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.span className="text-[14px] uppercase tracking-[0.3em] text-white/80">
            {isArabic ? "الأطعمة والمشروبات" : "Foods & Drinks"}
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className={`flex-1 h-[1px] bg-white/30 ${
              isArabic ? "origin-right" : "origin-left"
            }`}
          />
        </div>

     <h2 className="text-[7vw] md:text-[4.5rem] leading-tight text-white">
  {isArabic ? (
    <>مذاقات تُروى</>
  ) : (
    <>Flavors with <br /> Stories</>
  )}
</h2>

      </motion.div>

      {/* ===== CAROUSEL ===== */}
      <div className="w-[96vw] mx-auto">
        <Swiper
          key={lang}
          dir={isArabic ? "rtl" : "ltr"}
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={28}
          loop
          freeMode
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="px-0"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "260px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={item.image}
                    alt={isArabic ? item.nameAr : item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <p className="mt-5 text-[14px] uppercase tracking-[0.3em] text-center text-white/80">
                  {isArabic ? item.nameAr : item.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Linear autoplay */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </motion.section>
  );
}
