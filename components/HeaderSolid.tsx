"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // FIXED: Added to track application routes
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";

export default function HeaderSolid() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";
  const t = siteContent[lang].nav;
  
  const pathname = usePathname(); // FIXED: Captures exact page instance context
  const router = useRouter();     // FIXED: Triggers application redirections safely

  const navLinks = [
    { name: t.story, href: "/#story" },
    { name: t.explore, href: "/explore" },
    { name: t.whatsOn, href: "/#whats-on" },
    { name: t.events, href: "/#events" },
    { name: t.food, href: "/#food" },
    { name: t.vendors, href: "/vendors" },
  ];

  // FIXED: Smooth cross-page hashing helper utility hook
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); // Auto-closes mobile drawer safely

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      // Case A: User triggers button from outside home route screen
      if (pathname !== "/") {
        e.preventDefault();
        router.push(href);
      } else {
        // Case B: User triggers link directly inside home route grid layer
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const slideVariants = {
    initial: { x: isArabic ? "100%" : "-100%" },
    animate: { x: 0 },
    exit: { x: isArabic ? "100%" : "-100%" }
  };

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white border-b border-[#6b1415]/10 z-50 px-4 py-4 md:px-12 md:py-6" dir={isArabic ? "rtl" : "ltr"}>
        
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">

          {/* LEFT NAV - FIXED: Dynamically map links 1-3 using actual array variables instead of dead '#' keys */}
          <nav className="flex gap-8 lg:gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-[#6b1415]">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleScrollLink(e, link.href)}
                className="hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/streetfood.webp"
                alt="Logo"
                priority
                width={1000}
                height={300}
                className="h-[60px] md:h-[70px] lg:h-[85px] w-auto object-contain"
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

            {/* RIGHT NAV - FIXED: Dynamically map links 4-6 using actual array variables instead of dead '#' keys */}
            <nav className="flex gap-8 lg:gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-[#6b1415]">
              {navLinks.slice(3, 6).map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className="hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE BAR */}
        <div className="relative flex md:hidden items-center justify-between w-full h-[60px]">
          <button onClick={() => setIsOpen(true)} className="text-[#6b1415] p-2 -ml-2">
            <Menu size={26} strokeWidth={1.5} />
          </button>

          <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/streetfood.webp"
              alt="Logo"
              width={500}
              height={150}
              priority
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center text-[13px] font-bold text-[#6b1415] tracking-wider">
            <button onClick={() => setLang(isArabic ? "en" : "ar")} className="p-2 -mr-2">
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE PANEL OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
            />

            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 bottom-0 left-0 w-[85vw] max-w-[380px] z-[100] bg-white flex flex-col p-6 shadow-2xl overflow-y-auto"
              style={isArabic ? { left: 'auto', right: 0 } : { right: 'auto', left: 0 }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <div className="flex justify-between items-center mb-10 mt-2">
                <Image
                  src="/streetfood.webp"
                  alt="Logo"
                  width={400}
                  height={120}
                  className="h-[50px] w-auto object-contain"
                />
                <button onClick={() => setIsOpen(false)} className="text-[#6b1415] p-2">
                  <X size={26} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-[#6b1415] my-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isArabic ? 15 : -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScrollLink(e, link.href)} // FIXED: Appended helper engine function click listener hook
                      className="text-2xl font-semibold hover:opacity-70 active:opacity-50 block py-1 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between text-xs text-[#6b1415]/60 font-medium">
                <span>© {new Date().getFullYear()} Alzal Street Food</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
