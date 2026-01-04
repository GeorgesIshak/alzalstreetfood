'use client'; // 👈 Add this
import NewHero from "@/components/NewHero";

import TypoAnim from "@/components/TypoAnim";
import ScrollImages from "@/components/ScrollImages";
import Preloader from "@/components/Preloader";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import { useState } from "react";
import Column from "@/components/Column";
import TypoAnimation from "@/components/TypoAnimation";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import ScrollImageGallery from "@/components/ScrollImageGallery";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <NewHero />
                                                            <TypoAnim />


   <ScrollImages />
                                                               <FoodCategoriesCarousel />

      <Column />
   <RestaurantCarousel />
   <ScrollImageGallery />
      <TypoAnimation />

        </>
      )}
    </>
  );
}
  