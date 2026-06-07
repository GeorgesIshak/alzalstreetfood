"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const rightNavRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";
  const t = siteContent[lang].nav;
  
  // 1. ADD THESE TWO LINES HERE TO TRACK PATHS AND ROUTING:
  const pathname = usePathname(); 
  const router = useRouter();     

  const navLinks = [
    { name: t.story, href: "/#story" },
    { name: t.explore, href: "/explore" },
    { name: t.whatsOn, href: "/#whats-on" },
    { name: t.events, href: "/#events" },
    { name: t.food, href: "/#food" },
    { name: t.vendors, href: "/vendors" },
  ];

  // 2. ADD THIS SMOOTH CROSS-PAGE SCROLLING LOGIC:
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); // Closes mobile drawer automatically

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      // If user is on a sub-page (like /explore), push them to home first
      if (pathname !== "/") {
        e.preventDefault();
        router.push(href);
      } else {
        // If already on the homepage, scroll down smoothly
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // ✅ FIXED EFFECT: Added clearProps and pathname tracking to resolve invisible links bug
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const leftLinks = leftNavRef.current?.querySelectorAll("a");
    const rightLinks = rightNavRef.current?.querySelectorAll("a");

    // 1. Wipe out any stuck opacity styles left over from your last page visit
    gsap.set([leftLinks, rightLinks], { clearProps: "all" });

    // 2. Run clean entrance animation
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    if (leftLinks && leftLinks.length > 0) {
      tl.from(leftLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0);
    }
    if (rightLinks && rightLinks.length > 0) {
      tl.from(rightLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0.2);
    }

    return () => {
      tl.kill(); 
    };
  }, [lang, pathname]); // 3. ADD pathname HERE so it reruns when returning to homepage

  // ✅ Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Dynamic framer-motion variants
  const slideVariants = {
    initial: { x: isArabic ? "100%" : "-100%" },
    animate: { x: 0 },
    exit: { x: isArabic ? "100%" : "-100%" }
  };


  return (
    <>
      {/* FIXED: Removed fixed layout sizing to keep the outer margins perfectly inside standard mobile viewports */}
      <header className="absolute top-0 left-0 w-full z-50 px-4 py-4 md:px-12 md:py-6 overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
        {/* =========================
            DESKTOP (FIXED DYNAMIC MAPS)
           ========================= */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          
          {/* LEFT NAV - FIXED: Dynamically map structural links 1-3 using global array metrics instead of dead '#' tags */}
          <nav
            ref={leftNavRef}
            className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white"
          >
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleScrollLink(e, link.href)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
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
                className={lang === "en" ? "text-white opacity-100" : "hover:text-white transition-colors"}
              >
                EN
              </button>
              <span className="w-[1px] h-3 bg-white/20"></span>
              <button
                onClick={() => setLang("ar")}
                className={lang === "ar" ? "text-white opacity-100" : "hover:text-white transition-colors"}
              >
                AR
              </button>
            </div>

            {/* RIGHT NAV - FIXED: Dynamically map structural links 4-6 using global array metrics instead of dead '#' tags */}
            <nav
              ref={rightNavRef}
              className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white"
            >
              {navLinks.slice(3, 6).map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* =========================
            MOBILE (FIXED & RESPONSIVE)
           ========================= */}
        <div className="relative flex md:hidden items-center justify-between w-full h-[50px]">
          {/* Burger Side */}
          <button onClick={() => setIsOpen(true)} className="text-white p-2 -ml-2">
            <Menu size={26} strokeWidth={1.5} />
          </button>

          {/* Logo Middle (absolute center) */}
          <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/logo.webp"
              alt="Logo"
              priority
              width={400}
              height={120}
              className="h-[40px] w-auto object-contain"
            />
          </Link>

          {/* Lang Side */}
          <div className="flex items-center text-[13px] font-bold text-white tracking-wider">
            <button
              onClick={() => setLang(isArabic ? "en" : "ar")}
              className="uppercase p-2 -mr-2"
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* FIXED: Dark blur backdrop overlay behind panel content drawers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
            />

            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 bottom-0 left-0 w-[85vw] max-w-[360px] z-[100] bg-white flex flex-col p-6 shadow-2xl overflow-y-auto"
              style={isArabic ? { left: 'auto', right: 0 } : { right: 'auto', left: 0 }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <div className="flex justify-between items-center mb-10 mt-2">
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  priority
                  width={400}
                  height={120}
                  className="h-[45px] w-auto object-contain brightness-0 filter" 
                />
                <button onClick={() => setIsOpen(false)} className="text-black p-2">
                  <X size={26} strokeWidth={1.5} />
                </button>
              </div>

              {/* FIXED: Clean layout spacing margins for menu options with functional cross-page handle hooks */}
              <nav className="flex flex-col gap-6 my-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isArabic ? 15 : -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScrollLink(e, link.href)} // FIXED: Smooth route scrolling integration
                      className="text-2xl font-semibold text-[#1a1a1a] hover:text-[#6b1415] active:text-[#6b1415] transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* FIXED: Streamlined bottom translation switchers padding constraints */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex gap-6 text-xs font-bold tracking-widest text-black/40">
                <button
                  onClick={() => {
                    setLang("en");
                    setIsOpen(false);
                  }}
                  className={lang === "en" ? "text-[#6b1415]" : "hover:text-black"}
                >
                  ENGLISH
                </button>
                <button
                  onClick={() => {
                    setLang("ar");
                    setIsOpen(false);
                  }}
                  className={lang === "ar" ? "text-[#6b1415]" : "hover:text-black"}
                >
                  العربية
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );

}
