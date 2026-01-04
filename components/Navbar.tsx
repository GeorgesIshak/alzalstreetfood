'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const rightNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const leftLinks = leftNavRef.current?.querySelectorAll("a");
    const rightLinks = rightNavRef.current?.querySelectorAll("a");

    if (leftLinks) {
      gsap.from(leftLinks, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }

    if (rightLinks) {
      gsap.from(rightLinks, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 grid px-8 py-4 gap-2"
      style={{
        gridTemplateColumns: "1fr auto 1fr",
        gridTemplateRows: "auto auto",
      }}
    >
      {/* LEFT NAV */}
      <nav
        ref={leftNavRef}
        className="flex gap-10 uppercase font-medium text-[14px] tracking-wide text-white justify-self-start"
        style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
      >
        <Link href="#">Our Story</Link>
        <Link href="#">Explore</Link>
        <Link href="#">What's on</Link>
      </nav>

      {/* LOGO */}
      <div
        style={{ gridArea: "1 / 2 / 2 span / 1 span", justifySelf: "center" }}
        className="flex items-center"
      >
        <Image
          src="/white-logo.png"
          alt="Logo"
          width={120}
          height={200}
          className="object-contain"
          priority // ensures this image is preloaded immediately
          fetchPriority="high" // tells the browser this is critical
        />
      </div>

      {/* RIGHT NAV */}
      <nav
        ref={rightNavRef}
        className="flex gap-10 uppercase font-medium text-[14px] tracking-wide text-white justify-self-end"
        style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
      >
        <Link href="#">Events</Link>
        <Link href="#">Food & Drink</Link>
        <Link href="#">Vendors</Link>
      </nav>

      {/* AR/EN SWITCHER */}
      <div
        style={{ gridColumn: "3 / 4", gridRow: "1 / 2", justifySelf: "end" }}
        className="flex items-center uppercase font-medium text-[14px] text-white gap-2"
      >
        <button>EN</button>
        <span>|</span>
        <button>AR</button>
      </div>
    </header>
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
