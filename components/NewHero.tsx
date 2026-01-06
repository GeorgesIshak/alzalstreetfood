"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[110vh] overflow-hidden">
      
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/banner.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* LEFT TEXT */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <span className="vertical-text uppercase tracking-[0.35em] text-white text-[16px] font-['var(--font-alzal)']">
          AL ZAL
        </span>
      </div>

      {/* RIGHT TEXT */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <span className="vertical-text uppercase tracking-[0.35em] text-white text-[16px] font-['var(--font-alzal)']">
          STREET FOOD
        </span>
      </div>

      {/* CENTER */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fffdf8]"
        >
          A Destination of Discovery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-3xl text-[#fffdf8]/80"
        >
          All roads lead to Al Zal
        </motion.p>
      </motion.div>
    </section>
  );
}
