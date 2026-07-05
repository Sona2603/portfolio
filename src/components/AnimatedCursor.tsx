import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 28, stiffness: 420 });
  const smoothY = useSpring(y, { damping: 28, stiffness: 420 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const update = (event: PointerEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
      setVisible(true);
    };

    window.addEventListener('pointermove', update);
    window.addEventListener('pointerleave', () => setVisible(false));
    return () => window.removeEventListener('pointermove', update);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] hidden h-8 w-8 rounded-full border border-mint/60 mix-blend-difference md:block"
      style={{ x: smoothX, y: smoothY, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
