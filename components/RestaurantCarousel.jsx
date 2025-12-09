"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";

export default function RestaurantCarousel() {
  return (
<section className="w-screen py-20 overflow-hidden ">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        freeMode={true}           
        speed={6000}              
        autoplay={{
          delay: 0,               
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="px-12"
      >
        {restaurants.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "415px", height: "500px" }}
          >
            <div className="group relative h-full overflow-hidden cursor-pointer">
              
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-sm"
              />

              {/* Always-on subtle black overlay */}
              <div className="absolute inset-0 bg-black/15 z-5"></div>

              {/* Centered title */}
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white z-10 transition-opacity duration-700 group-hover:opacity-0">
                {item.name}
              </h2>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-700 px-6 z-10">
                <span className="text-white uppercase tracking-widest text-sm mb-2">
                  {item.category}
                </span>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {item.name}
                </h3>
                <p className="text-white/90 text-base max-w-xs mb-6">
                  {item.description}
                </p>
                <span className="text-white uppercase tracking-widest pb-1">
                  Explore
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
