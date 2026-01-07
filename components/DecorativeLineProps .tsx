'use client';

import { motion } from "framer-motion";

interface DecorativeLineProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function DecorativeLine({
  className = "",
  width = "100%",
  height = "44px",
}: DecorativeLineProps) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 2025 44" // matches original polygon coordinates
      fill="black" // everything black
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.g
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      >
        {/* All polygons in black */}
        <polygon points="89.88 44.23 1.42 44.23 45.65 0 89.88 44.23"/>
        <polygon points="161.56 0 73.1 0 117.33 44.23 161.56 0"/>
        <polygon points="233.24 44.23 144.78 44.23 189.01 0 233.24 44.23"/>
        <polygon points="304.92 0 216.46 0 260.69 44.23 304.92 0"/>
        <polygon points="376.6 44.23 288.14 44.23 332.37 0 376.6 44.23"/>
        <polygon points="448.28 0 359.82 0 404.05 44.23 448.28 0"/>
        <polygon points="519.96 44.23 431.5 44.23 475.73 0 519.96 44.23"/>
        <polygon points="591.64 0 503.18 0 547.41 44.23 591.64 0"/>
        <polygon points="663.32 44.23 574.86 44.23 619.09 0 663.32 44.23"/>
        <polygon points="735 0 646.54 0 690.77 44.23 735 0"/>
        <polygon points="806.68 44.23 718.21 44.23 762.45 0 806.68 44.23"/>
        <polygon points="878.36 0 789.89 0 834.13 44.23 878.36 0"/>
        <polygon points="950.04 44.23 861.57 44.23 905.8 0 950.04 44.23"/>
        <polygon points="1021.72 0 933.25 0 977.48 44.23 1021.72 0"/>
        <polygon points="1093.39 44.23 1004.93 44.23 1049.16 0 1093.39 44.23"/>
        <polygon points="1165.07 0 1076.61 0 1120.84 44.23 1165.07 0"/>
        <polygon points="1236.75 44.23 1148.29 44.23 1192.52 0 1236.75 44.23"/>
        <polygon points="1308.43 0 1219.97 0 1264.2 44.23 1308.43 0"/>
        <polygon points="1380.11 44.23 1291.65 44.23 1335.88 0 1380.11 44.23"/>
        <polygon points="1451.79 0 1363.33 0 1407.56 44.23 1451.79 0"/>
        <polygon points="1523.47 44.23 1435.01 44.23 1479.24 0 1523.47 44.23"/>
        <polygon points="1595.15 0 1506.69 0 1550.92 44.23 1595.15 0"/>
        <polygon points="1666.83 44.23 1578.37 44.23 1622.6 0 1666.83 44.23"/>
        <polygon points="1738.51 0 1650.05 0 1694.28 44.23 1738.51 0"/>
        <polygon points="1810.19 44.23 1721.73 44.23 1765.96 0 1810.19 44.23"/>
        <polygon points="1881.87 0 1793.41 0 1837.64 44.23 1881.87 0"/>
        <polygon points="1953.55 44.23 1865.08 44.23 1909.32 0 1953.55 44.23"/>
        <polygon points="2025.23 0 1936.76 0 1981 44.23 2025.23 0"/>
      </motion.g>
    </motion.svg>
  );
}
