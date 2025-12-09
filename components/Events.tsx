"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

const EVENTS = [
  { id: 1, title: "Saudi Street Food Festival", date: "Dec 12, 2025", image: "/3.jpg" },
  { id: 2, title: "International Street Bites", date: "Jan 5, 2026", image: "/4.jpg" },
  { id: 3, title: "Coffee & Desserts Pop-up", date: "Feb 20, 2026", image: "/5.jpg" },
  { id: 4, title: "Saudi Street Food Festival", date: "Dec 12, 2025", image: "/3.jpg" },
  { id: 5, title: "International Street Bites", date: "Jan 5, 2026", image: "/4.jpg" },
  { id: 6, title: "Coffee & Desserts Pop-up", date: "Feb 20, 2026", image: "/5.jpg" },
];

export default function Events() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section id="events" className="py-20 bg-[#077e66] text-white relative">
      <div className="container mx-auto px-4 relative">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-widest text-5xl">
            Discover Our Events
          </h2>
        </div>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                     w-14 h-14 rounded-full
                     bg-white/20 backdrop-blur-md
                     flex items-center justify-center
                     hover:bg-white/30 transition"
        >
          <ChevronLeft size={28} className="text-[#6b1415]" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                     w-14 h-14 rounded-full
                     bg-white/20 backdrop-blur-md
                     flex items-center justify-center
                     hover:bg-white/30 transition"
        >
          <ChevronRight size={28} className="text-[#6b1415]" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation!.prevEl = prevRef.current;
              swiper.params.navigation!.nextEl = nextRef.current;
            }
          }}
        >
          {EVENTS.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">

                <div className="relative w-full h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-[#077e66] font-semibold mb-4">{event.date}</p>
                  <p className="text-gray-700 italic">
                    Experience the vibrant flavors, live stalls, and street culture.
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
