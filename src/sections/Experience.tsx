import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { timeline } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="bg-zinc-950 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="From backend architecture to production deployment."
          description="A focused engineering journey across APIs, authentication, data models, cloud services, and collaborative delivery."
        />
        <div className="mx-auto max-w-4xl">
          {timeline.map((item, index) => (
            <motion.div
              key={item}
              className="relative border-l border-white/10 pb-9 pl-8 last:pb-0"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-zinc-950 bg-mint shadow-glow" />
              <article className="glass-panel rounded-[1.5rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                  Focus {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-bold">{item}</h3>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
