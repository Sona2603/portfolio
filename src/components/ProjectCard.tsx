import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisual';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group glass-panel overflow-hidden rounded-[2rem] p-4"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
    >
      <ProjectVisual project={project} />
      <div className="p-3 pt-6 sm:p-5">
        <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <FiExternalLink aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-zinc-900 transition hover:-translate-y-0.5 hover:border-coral/60 dark:text-white"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
