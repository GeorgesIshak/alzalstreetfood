/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [ "Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo","مرحبا"];

export default function Preloader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index >= words.length - 1) {
      setTimeout(() => onFinish && onFinish(), 500);
      return;
    }
    const timer = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
    return () => clearTimeout(timer);
  }, [index, onFinish]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: { d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ top: 0 }}
        exit={{ top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
        className="preloader"
      >
        {dimension.width > 0 && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
            >
              <span></span>
              {words[index]}
            </motion.p>
            <svg width={dimension.width} height={dimension.height + 300}>
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                fill="#FFFFFF"  
              />
            </svg>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
