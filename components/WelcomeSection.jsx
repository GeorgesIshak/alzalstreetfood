"use client";

import { motion } from "framer-motion";

const title = "Al Zal Street Food";

export default function WelcomeFancy() {
  return (
    <section className="w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="text-center relative max-w-5xl px-6">

        {/* Intro */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-sm tracking-[0.35em] uppercase mb-6 text-[#6b1415]/80"
        >
          Welcome to
        </motion.span>

        {/* Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block text-4xl md:text-7xl font-medium text-[#6b1415] tracking-tight"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.045, // ✅ faster letter reveal
              },
            },
          }}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: {
                  y: "90%",
                  opacity: 0,
                },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.45, // ✅ faster
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: title.length * 0.045 + 0.15, // ✅ appears AFTER title finishes
          }}
          className="mt-10 text-lg leading-relaxed text-black/80"
        >
         At Al Zal Street Food, we don’t just serve street food — we celebrate it.
We love the bold flavors, the energy of the streets, and the way great food brings people together. Every bite reflects the spirit of the places it comes from and the hands that prepared it.

Whether you arrive hungry or simply curious, you’ll find something that speaks to you. From classic Saudi favorites to street food inspired by cultures from across the region and beyond, our vendors offer an ever-changing mix of tastes, stories, and traditions.

Here, street food is more than a meal. It’s an experience shaped by fire, spice, movement, and memory — each dish carrying its own story, waiting to be discovered.
        </motion.p>

      </div>
    </section>
  );
}
