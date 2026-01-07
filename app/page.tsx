'use client'; // 👈 Add this
import NewHero from "@/components/NewHero";

import TypoAnim from "@/components/TypoAnim";
import ScrollImages from "@/components/ScrollImages";
import Column from "@/components/Column";
import TypoAnimation from "@/components/TypoAnimation";
import ScrollImageGallery from "@/components/ScrollImageGallery";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
export default function Home() {
  

  return (
   
        <>
          <NewHero />
                                                            <TypoAnim />


   <ScrollImages />
   <FoodCategoriesCarousel />

      <Column />
   <ScrollImageGallery />

        </>
      )}
 

  