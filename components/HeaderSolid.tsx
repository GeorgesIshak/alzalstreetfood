"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";

export default function HeaderSolid() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";
  const t = siteContent[lang].nav;

  const navLinks = [
    { name: t.story, href: "#" },
    { name: t.explore, href: "#" },
    { name: t.whatsOn, href: "#" },
    { name: t.events, href: "#" },
    { name: t.food, href: "#" },
    { name: t.vendors, href: "#" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* SOLID HEADER */}
      <header className=" w-full bg-white border-b border-[#6b1415]/10 z-50 px-6 py-5 md:px-12">
        
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">

          {/* LEFT */}
          <nav className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-[#6b1415]">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              {t.story}
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              {t.explore}
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              {t.whatsOn}
            </Link>
          </nav>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/streetfood.png"
                alt="Logo"
                priority
                width={1000}
                height={200}
                className="h-[40px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            
            {/* Language */}
            <div className="flex items-center uppercase font-bold text-[11px] tracking-widest text-[#6b1415] gap-3">
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"}
              >
                EN
              </button>
              <span className="w-[1px] h-3 bg-[#6b1415]/30"></span>
              <button
                onClick={() => setLang("ar")}
                className={lang === "ar" ? "opacity-100" : "opacity-60 hover:opacity-100"}
              >
                AR
              </button>
            </div>

            {/* Right Nav */}
            <nav className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-[#6b1415]">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                {t.events}
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                {t.food}
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                {t.vendors}
              </Link>
            </nav>
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative flex md:hidden items-center justify-between w-full">
          <button onClick={() => setIsOpen(true)} className="text-[#6b1415] p-2">
            <Menu size={28} strokeWidth={1.5} />
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/streetfood.png"
              alt="Logo"
              width={1000}
              height={300}
              className="h-[45px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3 text-[12px] font-bold text-[#6b1415]">
            <button onClick={() => setLang(isArabic ? "en" : "ar")}>
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <div className="flex justify-between items-center mb-16">
              <Image
                src="/azzal-logo.png"
                alt="Logo"
                width={1000}
                height={300}
                className="h-[50px] w-auto object-contain"
              />
              <button onClick={() => setIsOpen(false)} className="text-[#6b1415] p-2">
                <X size={30} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-[#6b1415]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif active:opacity-70"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
