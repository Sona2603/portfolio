import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A stack built for full-stack delivery."
          description="From UI implementation to API design, database modeling, cloud integrations, and deployment workflows."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
