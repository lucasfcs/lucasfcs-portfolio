import Link from "next/link";
import { HomeStats } from "@/components/HomeStats";
import { SocialLinks } from "@/components/SocialLinks";
import { highlights } from "@/lib/content";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="flex-1 hero-glow">
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 md:pt-20">
        <p className="font-mono text-sm text-cyan-400/90">
          QA Engineer · fintech · São Paulo
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Olá, sou{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-amber-200 bg-clip-text text-transparent">
            {SITE.name}
          </span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/65 md:text-xl">
          Enxergo o que passa batido em produção. Automação E2E, BDD e APIs —
          com background em back-end para investigar de ponta a ponta.
        </p>

        <SocialLinks className="mt-8" />

        <HomeStats />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card p-6">
              <h2 className="text-lg font-medium text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="card mt-14 flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-amber-300/90">
              Modo QA
            </p>
            <h2 className="mt-2 text-xl font-medium text-white">
              Quer ver meu trabalho em ação?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/55">
              Fora do modo caça, o site está correto — como deve ser em
              produção. Ative <strong className="text-white/80">Ativar caça</strong>{" "}
              no topo e encontre 5 defeitos escondidos nas páginas.
            </p>
          </div>
          <Link
            href="/bug-hunt"
            className="shrink-0 rounded-xl bg-amber-400/90 px-6 py-3 text-sm font-semibold text-[#0a0d12] transition hover:bg-amber-300"
          >
            Ver instruções →
          </Link>
        </div>
      </section>
    </main>
  );
}
