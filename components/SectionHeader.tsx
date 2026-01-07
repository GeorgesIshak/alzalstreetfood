'use client';

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`w-[94vw]
 mx-auto  pb-16 ${className}`}
    >
      {/* Top label + line */}
      <div className="flex items-center gap-6 mb-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[14px] uppercase tracking-[0.3em] text-black"
        >
          {label}
        </motion.span>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
          className="flex-1 h-[1px] bg-black origin-left"
        />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415]"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
