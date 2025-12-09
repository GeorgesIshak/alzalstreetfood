"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-screen min-h-[650px] bg-[#fffdf4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px]">
          {/* Image */}
        <div className="relative w-full h-[380px] lg:h-auto">
          <Image
            src="/7.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
        </div>
          {/* Content */}
        <div className="flex items-center px-6 lg:px-20 py-20 text-[#6b1415]">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium
             mb-6 leading-tight">
              Our Story
            </h2>

            <p className="text-black/80 text-lg leading-relaxed max-w-xl mb-10">
              Al Zal is more than street food. It’s a story of flavor, culture,
              and connection — where tradition meets the modern urban soul.  
              Enjoy the diverse street foods of Saudi Arabia, from traditional dishes to modern twists.
            </p>

            {/* CTA button like your Join Us style */}
            <button
              className="
                inline-block
                border-2 border-[#6b1415]
                text-[#6b1415]
                hover:text-white
                uppercase
                tracking-wide
                font-semibold
                px-8 py-4
                rounded-full
                transition-all duration-300
                hover:bg-[#6b1415]/90
              "
            >
              Discover Our Journey
            </button>
          </div>
        </div>

      

      

      </div>
    </section>
  );
}
