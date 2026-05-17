import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0, direction = "up", distance = 24 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Define animation directions
  const variants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { scale: 0.95, y: 0, x: 0 },
    fade: { opacity: 0, y: 0, x: 0 },
  };

  const initial = variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, ...initial }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}