import { navLinks, socialLinks } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Sona Nagarajan. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-zinc-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-mint">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} className="hover:text-mint" aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
