"use client";

import Image from "next/image";

export default function WhatsOn() {
  return (
    <section className="w-screen min-h-[650px] bg-[#fffdf4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px]">
       
        {/* Content */}
        <div className="flex items-center px-6 lg:px-20 py-20 text-[#6b1415]">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              What’s On
            </h2>

            <p className="text-black/80 text-lg leading-relaxed max-w-xl mb-10">
              Al Zal Street Food is more than just food — it’s a celebration of culture, flavor, and community. 
              Discover exciting events, pop-ups, and live street food experiences happening across Saudi Arabia. 
              From traditional delights to international treats, there’s always something new to savor.
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
              Explore Events
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[380px] lg:h-auto">
          <Image
            src="/3.jpg" // replace with relevant image
            alt="What’s On"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
