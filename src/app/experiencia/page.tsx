import { ExperienceCompany } from "@/components/ExperienceCompany";
import { PageShell } from "@/components/PageShell";
import { experiences } from "@/lib/content";

export default function ExperienciaPage() {
  return (
    <PageShell
      title="Experiência"
      subtitle="Onde apliquei qualidade e código na prática."
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article key={exp.company} className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-medium text-white">{exp.role}</h2>
              <span className="font-mono text-xs text-white/40">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 text-cyan-300/90">
              {index === 0 ? (
                <ExperienceCompany suffix="Meios de Pagamento" />
              ) : (
                exp.company
              )}
            </p>
            <ul className="mt-5 space-y-2">
              {exp.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-white/60 before:text-cyan-500 before:content-['→']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
