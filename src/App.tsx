import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { AnimatedCursor } from './components/AnimatedCursor';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <ScrollProgressBar />
      <AnimatedCursor />
      <Navbar />
      <HomePage />
      <BackToTop />
    </AnimatePresence>
  );
}
