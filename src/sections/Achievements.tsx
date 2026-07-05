import { SectionHeader } from '../components/SectionHeader';
import { StatCounter } from '../components/StatCounter';
import { stats } from '../data/portfolio';

export function Achievements() {
  return (
    <section className="bg-zinc-100 text-zinc-950 dark:bg-ink dark:text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Achievements"
          title="Measurable delivery across real application layers."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatCounter key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
