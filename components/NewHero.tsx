"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: "url('/8.jpg')",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto "
           style={{ maxWidth: "1290px", width: "100%" }}
      >
        {/* Text */}
     
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fffdf8] leading-tight text-center">
           ICONS MADE HERE 
          </h1>
       

          

      </div>
    </section>
  );
}
