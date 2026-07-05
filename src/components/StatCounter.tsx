import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type StatCounterProps = {
  label: string;
  value: number;
};

export function StatCounter({ label, value }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(useSpring(count, { duration: 1600, bounce: 0 }), (latest) =>
    Math.round(latest),
  );

  useEffect(() => {
    if (inView) count.set(value);
  }, [count, inView, value]);

  return (
    <motion.div
      ref={ref}
      className="glass-panel rounded-[1.5rem] p-6 text-center"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <motion.p className="text-4xl font-black text-zinc-950 dark:text-white">{rounded}</motion.p>
      <p className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400">{label}</p>
    </motion.div>
  );
}
