'use client';

import { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import DecorativePattern4 from './DecorativePattern4';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = useMemo(
    () => [
      '/food22.jpg',
      '/food2.jpg',
      '/food7.jpg',
      '/food18.jpg',
      '/food9.jpg',
      '/food10.jpg',
      '/food15.jpg',
      '/food4.jpg',
      '/food5.jpg',
    ],
    []
  );

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-screen bg-[#ffffff] pt-20 overflow-hidden">
      {/* ===== DECORATIVE (NOW RELATIVE TO THIS SECTION) ===== */}
      <div className="absolute top-24 right-0 w-[500px] h-[300px] pointer-events-none z-10">
        <DecorativePattern4 />
      </div>

      {/* ===== SECTION HEADER ===== */}
      <SectionHeader
        label="Explore"
        title={
          <>
            Explore up <br />
            thoughtful <br />
            flavors
          </>
        }
      />

      {/* ===== DESCRIPTION + CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[94vw] mx-auto"
      >
        <p className="max-w-[600px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80">
          Experience our souk through vibrant stalls, local crafts, culinary delights, and immersive cultural moments.
          Wander through artisan booths, taste authentic flavors, discover hidden gems, and create unforgettable memories
          as you explore the heart of the marketplace.
        </p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="main-button mt-8 inline-block"
        >
          Explore More
        </motion.a>
      </motion.div>

      {/* ===== HORIZONTAL SCROLL GALLERY ===== */}
      <div
        ref={sectionRef}
        className="relative w-screen overflow-hidden bg-white"
        style={{ height: '90vh' }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '1fr',
            height: '100%',
            alignItems: 'center',
            padding: '0 2vw',
            width: 'max-content',
            willChange: 'transform',
            columnGap: '2vw',
          }}
        >
          {images.map((src, i) => {
            const isBig = i % 3 === 0;

            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  height: '70vh',
                  gridColumn: isBig ? 'span 2' : 'span 1',
                  minWidth: '22vw',
                  paddingInline: '1vw',
                  boxSizing: 'border-box',
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i}`}
                  fill
                  priority={i < 3}
                  sizes={isBig ? '66vw' : '33vw'}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
