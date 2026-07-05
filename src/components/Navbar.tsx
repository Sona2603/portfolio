import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition',
          scrolled
            ? 'border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/20 backdrop-blur-2xl'
            : 'border-white/5 bg-white/[0.04] backdrop-blur-md',
        )}
      >
        <a href="#home" className="flex items-center gap-3 font-bold tracking-normal">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-mint to-coral text-sm text-zinc-950">
            SN
          </span>
          <span className="hidden text-white sm:block">Sona Nagarajan</span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'mx-auto mt-3 grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 text-white shadow-2xl backdrop-blur-2xl transition-all lg:hidden',
          open ? 'max-h-96 p-3 opacity-100' : 'max-h-0 p-0 opacity-0',
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
