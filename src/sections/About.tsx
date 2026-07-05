import { motion } from 'framer-motion';
import { FiCloud, FiLock, FiServer, FiZap } from 'react-icons/fi';
import { SectionHeader } from '../components/SectionHeader';

const strengths = [
  { label: 'Backend Development', icon: FiServer },
  { label: 'Secure Authentication', icon: FiLock },
  { label: 'Cloud Integrations', icon: FiCloud },
  { label: 'Problem Solving', icon: FiZap },
];

export function About() {
  return (
    <section id="about" className="bg-zinc-100 text-zinc-950 dark:bg-ink dark:text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Engineering useful products with clarity, care, and momentum."
          description="I focus on building dependable full-stack systems that connect clean backend architecture with thoughtful, intuitive interfaces."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="glass-panel rounded-[2rem] p-7 sm:p-10"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-zinc-700 dark:text-zinc-300">
              I am a full stack developer with a strong backend foundation in Python, Django,
              Django REST Framework, PostgreSQL, authentication, and REST API design. I enjoy
              turning complex workflows into reliable products, whether that means designing
              database models, securing user flows with JWT authentication, integrating AWS S3 or
              AWS SES, or deploying production-ready applications on Render.
            </p>
            <p className="mt-6 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
              My working style is practical and curious: understand the problem, design a clean
              solution, ship carefully, and keep improving. Continuous learning keeps me sharp, and
              problem solving keeps the work deeply satisfying.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="glass-panel rounded-[1.5rem] p-6"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Icon className="mb-4 text-2xl text-mint" aria-hidden="true" />
                  <h3 className="text-lg font-bold">{item.label}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
