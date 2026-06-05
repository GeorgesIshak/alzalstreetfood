"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";

export default function Header() {
  // ✅ keep your desktop GSAP refs exactly like your code
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const rightNavRef = useRef<HTMLDivElement | null>(null);

  // ✅ mobile menu state (like your previous responsive version)
  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";
  const t = siteContent[lang].nav;

 const navLinks = [
    { name: t.story, href: "/#story" },
    { name: t.explore, href: "/explore" },
    { name: t.whatsOn, href: "/#whats-on" },
    { name: t.events, href: "/#events" },
    { name: t.food, href: "/#food" },
    { name: t.vendors, href: "/vendors" },
  ];

  // ✅ keep desktop GSAP animation, but only run on md+ so we don't touch mobile
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const leftLinks = leftNavRef.current?.querySelectorAll("a");
    const rightLinks = rightNavRef.current?.querySelectorAll("a");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    if (leftLinks) tl.from(leftLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0);
    if (rightLinks)
      tl.from(rightLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0.2);
  }, []);

  // ✅ lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12">
        {/* =========================
            DESKTOP (DO NOT TOUCH)
           ========================= */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          {/* LEFT */}
          <nav
            ref={leftNavRef}
            className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white"
          >
            <Link href="#" className="hover:text-gray-300 transition-colors">
              {t.story}
            </Link>
            <Link href="/explore" className="hover:text-gray-300 transition-colors">
              {t.explore}
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              {t.whatsOn}
            </Link>
          </nav>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                priority
                width={1000}
                height={300}
                className="h-[120px] w-[120px] object-cover"
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center uppercase font-bold text-[11px] tracking-widest text-white/60 gap-3">
              <button
                onClick={() => setLang("en")}
                className={
                  lang === "en"
                    ? "text-white opacity-100"
                    : "hover:text-white transition-colors"
                }
              >
                EN
              </button>
              <span className="w-[1px] h-3 bg-white/20"></span>
              <button
                onClick={() => setLang("ar")}
                className={
                  lang === "ar"
                    ? "text-white opacity-100"
                    : "hover:text-white transition-colors"
                }
              >
                AR
              </button>
            </div>

            <nav
              ref={rightNavRef}
              className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white"
            >
              <Link href="#" className="hover:text-gray-300 transition-colors">
                {t.events}
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                {t.food}
              </Link>
              <Link href="/vendors" className="hover:text-gray-300 transition-colors">
                {t.vendors}
              </Link>
            </nav>
          </div>
        </div>

        {/* =========================
            MOBILE (RESPONSIVE)
           ========================= */}
        <div className="relative flex md:hidden items-center justify-between w-full">
          {/* Burger Left */}
          <button onClick={() => setIsOpen(true)} className="text-white p-2">
            <Menu size={28} strokeWidth={1.5} />
          </button>

          {/* Logo Middle (absolute center) */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
            <Image
              src="/logo.webp"
              alt="Logo"
              priority
              width={1000}
              height={300}
              className="h-[45px] w-auto object-contain"
            />
          </Link>

          {/* Lang Right */}
          <div className="flex items-center gap-3 text-[12px] font-bold text-white/90">
            <button
              onClick={() => setLang(isArabic ? "en" : "ar")}
              className="uppercase tracking-widest"
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
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
                src="/logo.webp"
                alt="Logo"
                priority
                width={1000}
                height={300}
                className="h-[50px] w-auto object-contain"
              />
              <button onClick={() => setIsOpen(false)} className="text-black p-2">
                <X size={30} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
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
                    className="text-3xl font-serif text-[#1a1a1a] active:text-[#6b1415]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10 border-t border-gray-100 flex gap-6 text-sm font-bold tracking-widest text-black/40">
              <button
                onClick={() => {
                  setLang("en");
                  setIsOpen(false);
                }}
                className={lang === "en" ? "text-black" : ""}
              >
                ENGLISH
              </button>
              <button
                onClick={() => {
                  setLang("ar");
                  setIsOpen(false);
                }}
                className={lang === "ar" ? "text-black" : ""}
              >
                العربية
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
