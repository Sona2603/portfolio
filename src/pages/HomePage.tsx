import { lazy, Suspense, useEffect } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../sections/Hero';

const About = lazy(() => import('../sections/About').then((module) => ({ default: module.About })));
const Skills = lazy(() => import('../sections/Skills').then((module) => ({ default: module.Skills })));
const Projects = lazy(() => import('../sections/Projects').then((module) => ({ default: module.Projects })));
const Experience = lazy(() =>
  import('../sections/Experience').then((module) => ({ default: module.Experience })),
);
const Achievements = lazy(() =>
  import('../sections/Achievements').then((module) => ({ default: module.Achievements })),
);
const Testimonials = lazy(() =>
  import('../sections/Testimonials').then((module) => ({ default: module.Testimonials })),
);
const Contact = lazy(() => import('../sections/Contact').then((module) => ({ default: module.Contact })));
const Footer = lazy(() => import('../sections/Footer').then((module) => ({ default: module.Footer })));

export function HomePage() {
  useEffect(() => {
    document.title = 'Sona Nagarajan | Full Stack Developer';
  }, []);

  return (
    <PageTransition>
      <Hero />
      <Suspense fallback={<LoadingScreen />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </PageTransition>
  );
}
