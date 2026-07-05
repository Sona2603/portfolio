import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-100 text-zinc-950 dark:bg-ink dark:text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Production-minded apps with real workflows."
          description="Each project focuses on practical business functionality, secure authentication, responsive interfaces, and deployed full-stack architecture."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
