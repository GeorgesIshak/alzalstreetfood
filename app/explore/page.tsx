"use client";

import HeroScrollVideo from "@/components/HeroScrollVideo";
import ExploreStory from "@/components/ExploreStory";
import FestivalGallery from "@/components/FestivalGallery";
import ExperienceSouk from "@/components/ExperienceSouk";
import ExploreFAQ from "@/components/ExploreFAQ";
import FindUsSection from "@/components/FindUsSection";
import Footer from "@/components/Footer";

import HeaderSolid from "@/components/HeaderSolid";
export default function ExplorePage() {
  return (
    <>
  <HeaderSolid />
       <HeroScrollVideo />
      <main className="bg-white relative">
       


        <ExploreStory />
        <FestivalGallery />
        <ExperienceSouk />
        <ExploreFAQ />
        <FindUsSection />

      
    <Footer />
      </main>
    </>
  );
}
