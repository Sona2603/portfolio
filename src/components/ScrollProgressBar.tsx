import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-mint via-skyglass to-coral"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
