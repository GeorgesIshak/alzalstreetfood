// components/icons/KioskTopView.tsx
export default function KioskTopView({
  active = false,
  size = 36,
}: {
  active?: boolean;
  size?: number;
}) {
  const roof = active ? "#87212E" : "#D8C2A3"; // wood/beige -> brand when active
  const roofEdge = active ? "#6F1A25" : "#BFA889";
  const body = active ? "#7A1D2A" : "#F3E6D4";
  const bodyEdge = active ? "#5E1620" : "#CDB79A";
  const window = active ? "#F7D9DE" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      {/* soft shadow */}
      <ellipse cx="32" cy="50" rx="18" ry="6" fill="#000" opacity="0.08" />

      {/* roof */}
      <path
        d="M10 26 L54 26 L46 14 L18 14 Z"
        fill={roof}
        stroke={roofEdge}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* roof stripes (subtle) */}
      <path d="M18 14 L10 26" stroke="#FFF" strokeOpacity="0.22" strokeWidth="2" />
      <path d="M26 14 L20 26" stroke="#FFF" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M34 14 L30 26" stroke="#FFF" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M42 14 L40 26" stroke="#FFF" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M46 14 L54 26" stroke="#000" strokeOpacity="0.07" strokeWidth="2" />

      {/* awning lip */}
      <rect
        x="12"
        y="26"
        width="40"
        height="6"
        rx="3"
        fill={roofEdge}
        opacity={active ? 0.95 : 0.55}
      />

      {/* body */}
      <rect
        x="14"
        y="32"
        width="36"
        height="18"
        rx="5"
        fill={body}
        stroke={bodyEdge}
        strokeWidth="2"
      />

      {/* window */}
      <rect
        x="20"
        y="36"
        width="24"
        height="10"
        rx="3"
        fill={window}
        stroke={bodyEdge}
        strokeWidth="2"
        opacity={active ? 0.95 : 0.9}
      />

      {/* counter */}
      <rect
        x="18"
        y="44"
        width="28"
        height="4"
        rx="2"
        fill={roofEdge}
        opacity={active ? 0.9 : 0.45}
      />
    </svg>
  );
}
