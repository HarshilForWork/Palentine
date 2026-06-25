import { motion, useReducedMotion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const shouldReduceMotion = useReducedMotion();

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-380 - i * 5 * position} ${-189 + i * 33}C${-380 - i * 5 * position} ${-189 + i * 33} ${-312 - i * 5 * position} ${216 - i * 33} ${152 - i * 5 * position} ${343 - i * 33}C${616 - i * 5 * position} ${470 - i * 33} ${684 - i * 5 * position} ${875 - i * 33} ${684 - i * 5 * position} ${875 - i * 33}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.1 + path.id * 0.03}
          initial={{ pathLength: shouldReduceMotion ? 1 : 0.3, opacity: 0.6 }}
          animate={shouldReduceMotion ? undefined : {
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={shouldReduceMotion ? undefined : {
            duration: 20 + path.id * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths() {
  return (
    <div className="fixed inset-0 pointer-events-none text-slate-950 overflow-hidden -z-10">
      <FloatingPaths position={1} />
      <div className="absolute inset-0">
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
}
