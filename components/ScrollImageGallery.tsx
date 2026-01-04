/* eslint-disable prefer-const */
'use client';

import { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Memoize image list for performance
  const images = useMemo(
    () => [
      '/img1.jpg',
      '/img2.jpg',
      '/img3.jpg',
      '/img4.jpg',
      '/img5.jpg',
      '/img6.jpg',
      '/img7.jpg',
      '/img5.jpg',
      '/img6.jpg',
    ],
    []
  );

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    let ctx = gsap.context(() => {
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
    <>
      {/* Hero / Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-[1440px] mx-auto px-6 md:px-16 pt-16"
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[14px] uppercase tracking-[0.3em] text-black"
          >
            Explore
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'circOut' }}
            className="flex-1 h-[1px] bg-black origin-left"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-[1100px] text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415] uppercase"
        >
          Explore up <br />
          thoughtful <br />
          flavors
        </motion.h2>

        <motion.p
          className="max-w-[600px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 mt-4"
        >
          Experience our souk through vibrant stalls, local crafts, culinary delights, and immersive cultural moments.
          Wander through artisan booths, taste authentic flavors, discover hidden gems, and create unforgettable memories
          as you explore the heart of the marketplace.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="main-button mt-8"
        >
          Explore More
        </motion.a>
      </motion.div>

      {/* Horizontal Slider Section */}
      <section
        ref={sectionRef}
        className="relative w-screen overflow-hidden"
        style={{ height: '100vh', backgroundColor: '#ffffff' }}
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
                  priority={i < 3} // lazy load rest
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
      </section>
    </>
  );
}
