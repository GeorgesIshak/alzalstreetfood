"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: "/testimonials-1.jpg",
    quote:
      "Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecenas aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson",
    role: "CEO & Founder",
    image: "/testimonials-2.jpg",
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Jena Karlis",
    role: "CEO & Founder",
    image: "/testimonials-3.jpg",
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Matt Brandon",
    role: "CEO & Founder",
    image: "/testimonials-4.jpg",
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    role: "CEO & Founder",
    image: "/testimonials-5.jpg",
    quote:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-[#cda45e]">
          Testimonials
        </h2>
        <p className="text-3xl font-bold text-white mt-2">
          What saying about us
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides
        className="relative z-10"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="w-[420px] flex justify-center"
          >
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
              <p className="italic text-gray-300 mb-4 relative before:content-['“'] before:text-4xl before:text-[#cda45e] after:content-['”'] after:text-4xl after:text-[#cda45e]">
                {testimonial.quote}
              </p>

              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#cda45e]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                {testimonial.name}
              </h3>
              <h4 className="text-[#cda45e]">{testimonial.role}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
