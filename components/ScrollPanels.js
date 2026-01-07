'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function ScrollPanels() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const dom = {
      columns: document.querySelector('.section--columns'),
      columnWraps: document.querySelectorAll('.section--columns .column-wrap'),
      items: document.querySelectorAll('.section--columns .column__item'),
    };

    let lenis;

    // Smooth scrolling
    const initSmoothScrolling = () => {
      lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    const scroll = () => {
      gsap
        .timeline({
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: true,
          },
        })
        .addLabel('start', 0)

        .to(
          dom.columns,
          {
            ease: 'none',
            startAt: { scale: 1.2 },
            scale: 1,
          },
          'start'
        )

        .to(
          dom.items,
          {
            ease: 'power4.inOut',
            startAt: {
              opacity: 0,
              filter: 'brightness(300%)',
            },
            opacity: 1,
            filter: 'brightness(100%)',
            yoyo: true,
            repeat: 1,
          },
          'start'
        )

        .to(
          dom.columnWraps,
          {
            ease: 'none',
            yPercent: (pos) => pos * -15,
          },
          'start'
        );
    };

    initSmoothScrolling();
    scroll();
  }, []);

  return (
    <div>
      {/* INTRO SECTION */}
   <section className="leading-none static top-0 w-full min-h-screen mb-[250vh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8">
  
  <h1 className="text-[42px] md:text-[68px] font-medium mb-8 text-[#6b1415] leading-tight">
            Our Mission
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed w-2xl">
            Step into the world of Al Zal — where every bite tells a story.
            Inspired by the vibrant flavors of the streets, we serve bold,
            handcrafted dishes made with heart. From sizzling shawarmas to
            crispy falafel and spicy fries, taste the energy, soul, and culture
            of true street food reimagined.
          </p>


</section>

      {/* COLUMNS */}
      <section className="section--columns fixed inset-0 z-[-1] w-full h-screen">
        <div className="columns w-full h-full relative flex justify-center gap-[2.5vw] items-center -rotate-45">

          {/* COLUMN 1 */}
<Column images={['/3.jpg', '/6.jpg', '/11.avif', '/12.jpg', '/5.jpg','/14.jpg','/15.jpg']} />

{/* COLUMN 2 */}
<Column images={['/7.jpg', '/11.avif', '/5.jpg','/14.jpg','/15.jpg', '/12.jpg', '/8.jpg']} />

{/* COLUMN 3 */}
<Column images={['/4.jpg', '/7.jpg', '/13.avif', '/14.jpg','/15.jpg','/3.jpg', '/5.jpg', '/11.avif']} />


        </div>
      </section>

      {/* END SECTION */}
     
    </div>
  );
}

/* =========================
   COLUMN COMPONENT
========================= */
function Column({ images }) {
  return (
    <div className="column-wrap relative flex flex-col pt-[5vh] pb-[15vh]">
      <div className="column relative block">
        {images.map((src, i) => (
          <div
            key={i}
            className="column__item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mb-[2.5vw]"
          >
            <Image
              src={src}
              alt="Gallery image"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollPanels;
