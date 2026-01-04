'use client';

import { useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FoodCategoriesCarousel() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start center'],
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#ffffff', '#6b1415']);

  // Memoize categories to avoid re-creating array on every render
  const categories = useMemo(
    () => [
      { name: 'International Desserts', image: '/11.avif' },
      { name: 'Saudi Desserts', image: '/12.jpg' },
      { name: 'Coffee & Beverages', image: '/13.avif' },
      { name: 'Mexican', image: '/14.jpg' },
      { name: 'All-Day Dining', image: '/15.jpg' },
      { name: 'Arabic & Mediterranean', image: '/11.avif' },
      { name: 'Asian Street Food', image: '/14.jpg' },
      { name: 'American Street Food', image: '/15.jpg' },
      { name: 'Indian Street Food', image: '/11.avif' },
      { name: 'Traditional Saudi', image: '/13.avif' },
      { name: 'Italian', image: '/12.jpg' },
    ],
    []
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="w-screen py-32 overflow-hidden transition-colors duration-300"
    >
      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-[1440px] mx-auto px-6 md:px-16 mb-16"
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

        <h2 className="text-[5vw] md:text-[4.5rem] leading-tight text-white">
          Explore Our <br /> Delicious Foods
        </h2>
      </motion.div>

      {/* ===== CAROUSEL ===== */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={28}
          loop
          freeMode
          freeModeMomentum={false} // smooth continuous scroll
          freeModeSticky={false}
          speed={7000} // speed of loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="px-0"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} style={{ width: '260px' }}>
              <div className="group flex flex-col items-center cursor-pointer">
                <div className="relative w-full h-[300px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <p className="mt-5 text-lg font-semibold text-white text-center tracking-wide">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== GLOBAL SWIPER CSS ===== */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </motion.section>
  );
}
