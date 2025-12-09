"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Clock, Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div
        id="topbar"
        className={`fixed inset-x-0 h-10 flex items-center justify-center transition-all duration-300 z-[996] ${
          scrolled ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl w-full px-6 flex justify-between items-center text-sm">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1 text-white">
              <Phone size={16} className="text-[#6b1415]" /> +1 5589 55488 55
            </span>
            <span className="flex items-center gap-1 text-white">
              <Clock size={16} className="text-[#6b1415]" /> Mon-Sat: 11AM - 23PM
            </span>
          </div>
          <div className="hidden md:flex gap-4 items-center text-white">
            <ul className="flex gap-2 font-semibold text-[#white]">
              <li>EN</li>
              <li className="text-[#6b1415]">/</li>
              <li>AR</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="header"
        className={`fixed inset-x-0 z-[998] border-b transition-all duration-300 backdrop-blur-md`}
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.95)" // soft white on scroll
            : "rgba(255,255,255,0.25)", // transparent when not scrolled
          borderBottom: scrolled
            ? "1px solid #6b1415"
            : "1px solid transparent",
          top: scrolled ? "0" : "40px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-25">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Al Zal Logo"
              width={190}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 font-medium items-center">
            <Link
              href="/"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Our Story
            </Link>
            <Link
              href="/menu"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Food & Drink
            </Link>
            <Link
              href="/specials"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              What's on
            </Link>
            <Link
              href="/events"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Events
            </Link>
            <Link
              href="/chefs"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Explore 
            </Link>
            <Link
              href="/gallery"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Vendors
            </Link>
            <Link
              href="/contact"
              className={`transition ${scrolled ? "text-[#1f1f1f] hover:text-[#6b1415]" : "text-white hover:text-[#6b1415]"}`}
            >
              Gallery
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/book"
            className={`hidden lg:inline-block border-2 px-6 py-2 rounded-full text-sm uppercase tracking-wide transition ${
              scrolled
                ? "border-[#6b1415] text-[#6b1415] hover:bg-[#6b1415]/10"
                : "border-[#6b1415] text-[#6b1415] hover:bg-white/10"
            }`}
          >
            Join Us
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition ${
              scrolled ? "text-[#1f1f1f] border-[#6b1415] hover:bg-[#c7ad74]/10" : "text-white border-white hover:bg-white/10"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
