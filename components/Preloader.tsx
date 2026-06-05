/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // 💡 Removed local AnimatePresence wrapper

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
    // 💡 Word array finished: Let the component exit gracefully first
    if (index >= words.length - 1) {
      return;
    }
    const timer = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
    return () => clearTimeout(timer);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: { d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }
  };

  return (
    <motion.div
      key="preloader"
      initial={{ top: 0 }}
      // 💡 Crucial: Trigger the context update ONLY when this panel completes its full slide up
      onAnimationComplete={(definition) => {
        if (definition === "exit" || (typeof definition === "object" && "top" in definition && definition.top === "-100vh")) {
          onFinish();
        }
      }}
      // 💡 If the word count completes, instantly push the component into its exit state
      animate={index >= words.length - 1 ? "exit" : "initial"}
      variants={{
        initial: { top: 0 },
        exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
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
