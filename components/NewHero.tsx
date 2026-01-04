"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const leftTextRef = useRef<HTMLSpanElement | null>(null);
  const rightTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    // Animate vertical left text
    if (leftTextRef.current) {
      const leftChars = new SplitType(leftTextRef.current, { types: "chars" }).chars;
      gsap.fromTo(
        leftChars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
            delay: 1,
        }
      );
    }

    // Animate vertical right text
    if (rightTextRef.current) {
      const rightChars = new SplitType(rightTextRef.current, { types: "chars" }).chars;
      gsap.fromTo(
        rightChars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1,
        }
      );
    }
  }, [controls, inView]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[110vh] overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/banner.webm"
       autoPlay
  loop
  muted
  playsInline
  preload="metadata"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* LEFT VERTICAL TEXT */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <span
          ref={leftTextRef}
          className="vertical-text uppercase tracking-[0.35em] text-white text-[16px] font-['var(--font-alzal)']"
        >
          AL ZAL
        </span>
      </div>

      {/* RIGHT VERTICAL TEXT */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <span
          ref={rightTextRef}
          className="vertical-text uppercase tracking-[0.35em] text-white text-[16px] font-['var(--font-alzal)']"
        >
          STREET FOOD
        </span>
      </div>

      {/* CENTER CONTENT */}
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto text-center px-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
      >
        <motion.h1
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fffdf8] leading-tight"
        >
          A Destination of Discovery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mt-4 text-xl md:text-3xl text-[#fffdf8]/80"
        >
          All roads lead to Al Zal
        </motion.p>
      </motion.div>
    </section>
  );
}
