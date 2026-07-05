import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const testimonials = [
  'Reliable delivery, clean code, and a calm approach to solving product problems.',
  'Strong backend thinking paired with user-focused implementation.',
  'A thoughtful engineer who can move from API details to polished UI quickly.',
];

export function Testimonials() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="section-shell">
        <SectionHeader eyebrow="Testimonials" title="Professional references, ready to grow." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((quote, index) => (
            <motion.figure
              key={quote}
              className="glass-panel rounded-[1.5rem] p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <blockquote className="text-base leading-8 text-zinc-300">"{quote}"</blockquote>
              <figcaption className="mt-6 text-sm font-bold text-mint">Reference Placeholder</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
