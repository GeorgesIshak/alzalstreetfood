"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";

const gallery = [
  { src: "/food1.jpg", alt: "Street food stalls" },
  { src: "/food2.jpg", alt: "Crowds and atmosphere" },
  { src: "/food3.jpg", alt: "Night vibes" },
  { src: "/food4.jpg", alt: "Cultural moments" },
  { src: "/food5.jpg", alt: "Day vibes" },
  { src: "/food6.jpg", alt: "Events and performances" },
];

export default function ExploreGallery() {
  return (
    <section className="relative w-full py-20 bg-white">
      {/* ===== HEADER ===== */}
      <SectionHeader
        label="Festival Vibes"
        title={
          <>
            The energy, <br />
            captured in moments
          </>
        }
      />

      {/* ===== GALLERY ===== */}
      <div className="w-[94vw] mx-auto mt-14">
        <div className="grid grid-cols-12 gap-4">
          
          {/* HERO IMAGE */}
          <div className="col-span-12 md:col-span-8">
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[340px] md:h-[520px]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SIDE IMAGE */}
          <div className="col-span-12 md:col-span-4">
            <div className="relative overflow-hidden rounded-xl border border-black/10 h-[340px] md:h-[520px]">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* SUPPORTING GRID */}
          {gallery.slice(2).map((img, idx) => (
            <div
              key={idx}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[240px] md:h-[280px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
