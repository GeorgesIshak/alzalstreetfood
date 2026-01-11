'use client';

import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Explicitly typing variants to resolve the TS 'variants' error
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#fffdf4] text-[#6b1415] pt-32 pb-12 overflow-hidden border-t border-[#6b1415]/10">
      <motion.div 
        className="w-[94%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="max-w-4xl">
            <motion.h2 variants={fadeInUp} className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tighter">
              A Destination 
            </motion.h2>
            <motion.h2 variants={fadeInUp} className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tighter italic">
              of Discovery.
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="mt-8 text-xl opacity-80 max-w-md">
              All roads lead to Al Zal. Experience the heartbeat of street food culture.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp} className="flex lg:justify-end">
            <button className="group relative inline-flex items-center gap-2 rounded-full border-2 border-[#6b1415] px-10 py-4 text-xl font-medium hover:bg-[#6b1415] hover:text-[#fffdf4] transition-all duration-500">
              Reach Out to Us
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Navigation Reveal */}
        <motion.div 
          variants={fadeInUp}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[#6b1415]/20 pt-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest opacity-50 font-bold">Explore</span>
            <a href="#" className="text-lg hover:underline decoration-1 transition-all">About Us</a>
            <a href="#" className="text-lg hover:underline decoration-1 transition-all">Vendors</a>
            <a href="#" className="text-lg hover:underline decoration-1 transition-all">Our Story</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest opacity-50 font-bold">Visit</span>
            <p className="text-lg leading-relaxed">Al Zal Street,<br />Location, KSA</p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2 lg:items-end">
             <span className="text-xs uppercase tracking-widest opacity-50 font-bold">Inquiries</span>
             <a href="mailto:contact@alzalstreetfood.com" className="text-2xl md:text-4xl font-serif hover:italic transition-all duration-300 border-b border-transparent hover:border-[#6b1415]">
              contact@alzalstreetfood.com
            </a>
          </div>
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div 
          variants={fadeInUp}
          className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Socials */}
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#6b1415]/30 hover:bg-[#6b1415] hover:text-[#fffdf4] transition-colors duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-sm opacity-60 font-medium tracking-wide uppercase">
            © {currentYear} AL ZAL STREET FOOD.
          </div>

          <div 
            onClick={scrollToTop}
            className="text-sm opacity-60 font-medium cursor-pointer hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            BACK TO TOP <span className="text-lg">↑</span>
          </div>
        </motion.div>

        {/* BACKGROUND WATERMARK */}
        <motion.div 
          initial={{ opacity: 0 }}
          
          whileInView={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-10 right-0 pointer-events-none select-none"
        >
          <h1 className="text-[22vw] font-serif leading-none uppercase">AL ZAL</h1>
        </motion.div>
      </motion.div>
    </footer>
  );
}
