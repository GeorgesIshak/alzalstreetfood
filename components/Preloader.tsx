/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion'; 

const words = [ "Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo","مرحبا"];

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index >= words.length - 1) {
      return;
    }
    const timer = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
    return () => clearTimeout(timer);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  // 🛠️ Fixed: Reverted to array format and appended `as const` to tell TypeScript it is a fixed easing array
  const cubicBezierEasing = [0.76, 0, 0.24, 1] as const;

  const curve: Variants = {
    initial: { 
      d: initialPath, 
      transition: { duration: 0.7, ease: cubicBezierEasing } 
    },
    exit: { 
      d: targetPath, 
      transition: { duration: 0.7, ease: cubicBezierEasing, delay: 0.3 } 
    }
  };

  const panelVariants: Variants = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: cubicBezierEasing, delay: 0.2 } }
  };

  return (
    <motion.div
      key="preloader"
      initial="initial"
      animate={index >= words.length - 1 ? "exit" : "initial"}
      variants={panelVariants}
      onAnimationComplete={(definition) => {
        if (definition === "exit" || (typeof definition === "object" && "top" in definition && definition.top === "-100vh")) {
          onFinish();
        }
      }}
      className="preloader"
      style={{ position: 'fixed', left: 0, zIndex: 9999, width: '100%' }}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: index >= words.length - 1 ? 0 : 1, transition: { duration: 0.3 } }}
          >
            <span></span>
            {words[index]}
          </motion.p>
          <svg width={dimension.width} height={dimension.height + 300} style={{ position: 'absolute', top: 0, left: 0 }}>
            <motion.path
              variants={curve}
              initial="initial"
              animate={index >= words.length - 1 ? "exit" : "initial"}
              fill="#FFFFFF"  
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
