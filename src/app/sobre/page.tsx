import { PageShell } from "@/components/PageShell";
import { SocialLinks } from "@/components/SocialLinks";
import { LINKS } from "@/lib/constants";

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre mim"
      subtitle="QA na veia, dev no coração — sempre aprendendo."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p>
            Sou <strong className="text-white">QA Engineer</strong> na{" "}
            EvoluServices Meios de Pagamento, em São Paulo. Trabalho com
            automação End-to-End, cenários BDD e validação de APIs em fluxos
            críticos de pagamento — onde qualidade não é opcional.
          </p>
          <p>
            Antes disso, atuei como{" "}
            <strong className="text-white">desenvolvedor back-end</strong> na
            Anjun Express (NestJS, Prisma, APIs REST). Essa base me ajuda hoje
            a ler código, entender integrações e documentar bugs com contexto
            técnico real.
          </p>
          <p>
            Meu foco profissional é{" "}
            <strong className="text-white">crescer como QA</strong>: melhorar
            estratégia de testes, automação e comunicação com o time. Paralelo,
            continuo estudando desenvolvimento e criando projetos — o portfólio
            evolui junto comigo.
          </p>
          <p className="text-sm text-white/45">
            Projetos no GitHub ainda são de estudo; este site é minha vitrine
            principal por enquanto.
          </p>
        </div>

        <aside className="card h-fit space-y-4 p-6">
          <h2 className="text-sm font-medium text-white">Contato rápido</h2>
          <SocialLinks />
          <p className="text-xs text-white/40">
            Perfil completo no{" "}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/90 hover:underline"
            >
              GitHub README
            </a>
            .
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
