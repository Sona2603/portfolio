import { motion } from 'framer-motion';
import type { SkillGroup } from '../data/portfolio';

type SkillCardProps = {
  group: SkillGroup;
  index: number;
};

export function SkillCard({ group, index }: SkillCardProps) {
  return (
    <motion.article
      className="glass-panel rounded-[2rem] p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className={`mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${group.accent}`} />
      <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">{group.title}</h3>
      <div className="mt-6 space-y-5">
        {group.skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="flex min-w-0 items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200">
                  <Icon className="shrink-0 text-mint" aria-hidden="true" />
                  <span className="truncate">{skill.name}</span>
                </span>
                <span className="font-bold text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/10">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}
