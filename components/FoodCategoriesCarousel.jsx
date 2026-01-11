"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const categories = [
  { name: "International Desserts", image: "/food1.jpg" },
  { name: "Saudi Desserts", image: "/food2.jpg" },
  { name: "Coffee & Beverages", image: "/food3.jpg" },
  { name: "Mexican", image: "/food4.jpg" },
  { name: "All-Day Dining", image: "/food5.jpg" },
  { name: "Arabic & Mediterranean", image: "/food6.jpg" },
  { name: "Asian Street Food", image: "/food7.jpg" },
  { name: "American Street Food", image: "/food8.jpg" },
  { name: "Indian Street Food", image: "/food9.jpg" },
  { name: "Traditional Saudi", image: "/food10.jpg" },
  { name: "Italian", image: "/food11.jpg" },
 
];

export default function FoodCategoriesCarousel() {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"], // Starts when top of section enters bottom of screen
  });

  // Animate background from White to Burgundy
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#6b1415"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="w-screen py-32  overflow-hidden transition-colors duration-300"
    >
      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" mx-auto w-[96vw] mb-16"
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.span className="text-[14px] uppercase tracking-[0.3em] text-white/80">
            Foods & Drinks
          </motion.span>
          <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             className="flex-1 h-[1px] bg-white/30 origin-left" 
          />
        </div>

        <h2 className="text-[5vw] md:text-[4.5rem] leading-tight  text-white">
          Explore Our <br /> Delicious Foods
        </h2>
      </motion.div>

      {/* ===== CAROUSEL ===== */}
      <div className="w-[96vw] mx-auto ">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={28}
          loop={true}
          freeMode={true}
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
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <p className="mt-5 text-lg font-semibold text-white text-center tracking-wide">
                  {item.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS to make Swiper scroll perfectly linear */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </motion.section>
  );
}
