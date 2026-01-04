'use client';

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  delay = 0,
  className = ""
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`max-w-[1440px] mx-auto px-6 md:px-16 pb-16 ${className}`}
    >
      <div className="flex items-center gap-6 mb-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          className="text-[14px] uppercase tracking-[0.3em] text-black"
        >
          {subtitle}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.8, ease: "circOut" }}
          className="flex-1 h-[1px] bg-black origin-left"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.8 }}
        className="max-w-[1100px] text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415]"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
