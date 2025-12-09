"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

const categories = [
  { name: "International Desserts", image: "/11.avif" },
  { name: "Saudi Desserts", image: "/12.jpg" },
  { name: "Coffee & Beverages", image: "/13.avif" },
  { name: "Mexican", image: "/14.jpg"},
  { name: "All-Day Dining", image: "/15.jpg" },
  { name: "Arabic & Mediterranean", image: "/11.avif" },
  { name: "Asian Street Food", image: "/14.jpg" },
  { name: "American Street Food", image: "/15.jpg" },
  { name: "Indian Street Food", image: "/11.avif" },
  { name: "Traditional Saudi", image:  "/13.avif" },
  { name: "Italian", image: "/12.jpg" },
];

export default function FoodCategoriesCarousel() {
  return (
    <section className="w-screen py-20 bg-[#e15637] overflow-hidden">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-white font-medium">
          Explore Our Food Categories
        </h2>
    
      </div>

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
        className="px-12"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "260px" }}>
            <div className="group flex flex-col items-center cursor-pointer">
              
              {/* Image */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Category Name */}
              <p className="mt-5 text-lg font-semibold text-white text-center tracking-wide">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
