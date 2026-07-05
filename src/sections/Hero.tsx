import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiSend } from 'react-icons/fi';
import { socialLinks } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-radial-field pt-32 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(9,9,11,0.92),rgba(17,17,20,0.82),rgba(9,9,11,0.96))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Hi, I'm Sona Nagarajan</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-7xl lg:text-8xl">
            Full Stack Developer
            <span className="block bg-gradient-to-r from-mint via-skyglass to-coral bg-clip-text text-transparent">
              Backend Engineer
            </span>
          </h1>
          <p className="mt-6 text-lg font-semibold text-zinc-200 sm:text-2xl">
            Python | Django | React | PostgreSQL
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            I build scalable full-stack web applications with clean architecture, secure
            authentication, cloud integrations, and intuitive user experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/Sona_N_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-glow transition hover:-translate-y-1"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-skyglass/70"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-coral/70"
            >
              <FiSend aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-xl transition hover:-translate-y-1 hover:border-mint/60 hover:text-mint"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-mint/20 via-skyglass/10 to-coral/20 blur-3xl" />
          <div className="relative glass-panel rounded-[2.25rem] p-5">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/12 via-transparent to-coral/16" />
              <img
                src={profileImg}
                alt="Sona Nagarajan"
                className="relative w-full object-cover object-top animate-float"
                style={{ maxHeight: '480px' }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-zinc-400 sm:flex"
      >
        Scroll
        <FiArrowDown className="animate-bounce text-mint" aria-hidden="true" />
      </a>
    </section>
  );
}
