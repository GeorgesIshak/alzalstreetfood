/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";

// persists only during session (refresh-safe)
let hasSiteLoadedInSession = false;

export default function LayoutLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  // initialize ONLY on first mount
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("site-loaded");

    if (!alreadyLoaded && !hasSiteLoadedInSession) {
      setIsLoading(true);
    }
  }, []);

  // lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  const handleFinishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);

      sessionStorage.setItem("site-loaded", "true");
      hasSiteLoadedInSession = true;
    }, 500);
  };

  return (
    <>
      {/* PRELOADER */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onFinish={handleFinishLoading} />}
      </AnimatePresence>

      {/* IMPORTANT FIX: NO OPACITY WRAPPER */}
      {children}
    </>
  );
}