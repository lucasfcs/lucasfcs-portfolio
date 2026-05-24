import { PageShell } from "@/components/PageShell";
import { StackGrid } from "@/components/StackGrid";

export default function StackPage() {
  return (
    <PageShell
      title="Stack"
      subtitle="Ferramentas que uso no dia a dia e no estudo."
    >
      <StackGrid />
      <p className="mt-8 text-sm text-white/45">
        Em constante atualização — novas ferramentas entram conforme projetos e
        estudos.
      </p>
    </PageShell>
  );
}
