import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-radial-field opacity-80" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something dependable and beautifully usable."
          description="Open to full-stack, backend, and product engineering opportunities."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {[
              {
                label: 'Email',
                value: 'sonanagarajan076@gmail.com',
                href: 'mailto:sonanagarajan076@gmail.com',
                icon: FiMail,
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/sona-nagarajan-750b75257',
                href: 'https://www.linkedin.com/in/sona-nagarajan-750b75257/',
                icon: FaLinkedin,
              },
              {
                label: 'GitHub',
                value: 'github.com/Sona2603',
                href: 'https://github.com/Sona2603',
                icon: FaGithub,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:border-mint/50"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-mint/15 text-mint">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-400">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-zinc-300">
                Name
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-mint" required />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-300">
                Email
                <input type="email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-mint" required />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-300">
              Message
              <textarea className="min-h-40 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-mint" required />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-glow transition hover:-translate-y-1"
            >
              <FiSend aria-hidden="true" />
              Send Message
            </button>
            {sent ? <p className="mt-4 text-sm font-semibold text-mint">Message captured successfully.</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
