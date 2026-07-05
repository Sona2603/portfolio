import type { Project } from '../data/portfolio';
import { cn } from '../utils/cn';

const accentMap: Record<Project['accent'], string> = {
  mint: 'from-mint/80 via-skyglass/50 to-white/15',
  coral: 'from-coral/80 via-mint/35 to-white/15',
  skyglass: 'from-skyglass/80 via-iris/35 to-white/15',
};

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/60 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80', accentMap[project.accent])} />
      <div className="absolute inset-4 rounded-2xl border border-white/15 bg-zinc-950/70 p-4 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            <span className="h-2.5 w-2.5 rounded-full bg-skyglass" />
          </div>
          <span className="h-2 w-20 rounded-full bg-white/20" />
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.82fr_1.18fr] gap-3">
          <div className="space-y-3">
            <span className="block h-16 rounded-2xl bg-white/10" />
            <span className="block h-10 rounded-2xl bg-white/10" />
            <span className="block h-24 rounded-2xl bg-white/10" />
          </div>
          <div className="space-y-3">
            <span className="block h-8 rounded-full bg-white/20" />
            <div className="grid grid-cols-2 gap-3">
              <span className="h-24 rounded-2xl bg-white/10" />
              <span className="h-24 rounded-2xl bg-white/10" />
            </div>
            <span className="block h-16 rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/75 to-transparent" />
    </div>
  );
}
