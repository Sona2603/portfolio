import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink text-white">
      <motion.div
        className="h-16 w-16 rounded-full border border-white/10 border-t-mint"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        aria-label="Loading"
      />
    </main>
  );
}
