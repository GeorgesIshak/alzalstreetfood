"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react"; // Senior-level icon set
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const rightNavRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const { lang, setLang } = useLanguage();
  const t = siteContent[lang].nav;

  // Entrance Animation
  useEffect(() => {
    const leftLinks = leftNavRef.current?.querySelectorAll("a");
    const rightLinks = rightNavRef.current?.querySelectorAll("a");
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    
    if (leftLinks) tl.from(leftLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0);
    if (rightLinks) tl.from(rightLinks, { y: -20, opacity: 0, stagger: 0.1 }, 0.2);
  }, []);

  // Mobile Slide Animation
  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, { x: 0, duration: 0.6, ease: "expo.out" });
      gsap.fromTo(".mobile-link", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1, delay: 0.3 });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, { x: "-100%", duration: 0.5, ease: "expo.in" });
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12">
        {/* DESKTOP DESIGN: Clean 3-column grid */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          
          {/* LEFT: Nav links */}
          <nav ref={leftNavRef} className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white">
            <Link href="#" className="hover:text-gray-300 transition-colors">{t.story}</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">{t.explore}</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">{t.whatsOn}</Link>
          </nav>

          {/* CENTER: Logo (Perfectly centered) */}
          <div className="flex justify-center">
            <Link href="/">
              <Image src="/white-logo.png" alt="Logo" width={130} height={70} className="object-contain" priority />
            </Link>
          </div>

          {/* RIGHT: Language + Nav */}
          <div className="flex flex-col items-end gap-3">
             <div className="flex items-center uppercase font-bold text-[11px] tracking-widest text-white/60 gap-3">
                <button onClick={() => setLang("en")} className={lang === "en" ? "text-white opacity-100" : "hover:text-white transition-colors"}>EN</button>
                <span className="w-[1px] h-3 bg-white/20"></span>
                <button onClick={() => setLang("ar")} className={lang === "ar" ? "text-white opacity-100" : "hover:text-white transition-colors"}>AR</button>
             </div>
             <nav ref={rightNavRef} className="flex gap-10 uppercase font-medium text-[13px] tracking-[0.15em] text-white">
                <Link href="#" className="hover:text-gray-300 transition-colors">{t.events}</Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">{t.food}</Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">{t.vendors}</Link>
             </nav>
          </div>
        </div>

        {/* MOBILE DESIGN: Split layout */}
        <div className="flex md:hidden items-center justify-between">
          <button onClick={() => setIsOpen(true)} className="text-white hover:opacity-70 transition-opacity">
            <Menu size={28} strokeWidth={1.5} />
          </button>

          <Image src="/white-logo.png" alt="Logo" width={90} height={50} className="object-contain absolute left-1/2 -translate-x-1/2" />

          <button 
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-white text-[13px] font-bold tracking-widest uppercase"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[100] bg-[#0a0a0a] translate-x-[-100%] flex flex-col p-8"
      >
        <div className="flex justify-between items-center mb-20">
           <button onClick={() => setIsOpen(false)} className="text-white">
             <X size={32} strokeWidth={1.5} />
           </button>
           <Image src="/white-logo.png" alt="Logo" width={100} height={50} className="object-contain" />
           <div className="w-8" /> {/* Visual Balance */}
        </div>
        
        <nav className="flex flex-col gap-8">
          {[t.story, t.explore, t.whatsOn, t.events, t.food, t.vendors].map((item, i) => (
            <Link 
              key={i} 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="mobile-link text-white text-3xl font-light uppercase tracking-tighter border-b border-white/5 pb-4 flex justify-between items-center"
            >
              {item}
              <span className="text-[10px] opacity-30">0{i + 1}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex gap-6 text-white/40 text-xs tracking-[0.2em] uppercase">
            <span>Instagram</span>
            <span>Facebook</span>
        </div>
      </div>
    </>
  );
}


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// export default function Topbar() {
//   const leftRef = useRef<HTMLDivElement | null>(null);
//   const rightRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [isDark, setIsDark] = useState(true);

//   // GSAP intro animation
//   useEffect(() => {
//     if (
//       !leftRef.current ||
//       !rightRef.current ||
//       !logoRef.current ||
//       !containerRef.current
//     )
//       return;

//     const tl = gsap.timeline({
//       defaults: { duration: 0.8, ease: "power3.out" },
//     });

//     gsap.set(containerRef.current, { width: 100 });
//     gsap.set(leftRef.current, { x: -50, opacity: 0 });
//     gsap.set(rightRef.current, { x: 50, opacity: 0 });
//     gsap.set(logoRef.current, { scale: 0, opacity: 0 });

//     tl.to(containerRef.current, { width: 480, delay: 1 })
//       .to(
//         logoRef.current,
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 0.6,
//           ease: "back.out(1.7)",
//         },
//         "<0.2"
//       )
//       .to(leftRef.current, { x: 0, opacity: 1 }, "<0.1")
//       .to(rightRef.current, { x: 0, opacity: 1 }, "<0.1");
//   }, []);

//   // Detect background color via sections
//   useEffect(() => {
//     const sections = document.querySelectorAll(".dark-section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsDark(true);
//           } else {
//             setIsDark(false);
//           }
//         });
//       },
//       {
//         rootMargin: "-60px 0px -80% 0px",
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const color = isDark ? "white" : "black";

//   return (
//     <div className="fixed top-10 left-1/2 z-50 -translate-x-1/2">
//       <div
//         ref={containerRef}
//         className={`flex items-center justify-around h-[50px] rounded-2xl relative transition-colors duration-300
//           border-2 border-${color}`}
//       >
//         {/* LEFT */}
//         <div
//           ref={leftRef}
//           className={`flex items-center justify-center h-full px-4 cursor-pointer
//             hover:bg-${color === "white" ? "white/10" : "black/10"}`}
//         >
//           <span
//             className={`font-bold uppercase tracking-wider text-${color}`}
//           >
//             BOOK
//           </span>
//         </div>

//         {/* RIGHT */}
//         <div
//           ref={rightRef}
//           className="flex items-center justify-center h-full px-4 cursor-pointer group"
//         >
//           <div className="flex flex-col justify-between h-5 w-6">
//             <span
//               className={`block w-11 h-0.5 rounded bg-${color} transition-transform duration-200 group-hover:scale-x-125`}
//             />
//             <span
//               className={`block w-11 h-0.5 rounded bg-${color} transition-transform duration-200 group-hover:scale-x-125`}
//             />
//           </div>
//         </div>

//         {/* LOGO */}
//         <div
//           ref={logoRef}
//           className={`absolute left-1/2 top-1/2
//             -translate-x-1/2 -translate-y-1/2
//             w-[76px] h-[76px]
//             rounded-full
//             border-2 border-${color}
//             flex items-center justify-center`}
//         >
//           <Image
//             src="/logo-circle.png"
//             alt="Logo"
//             width={60}
//             height={60}
//             priority
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
