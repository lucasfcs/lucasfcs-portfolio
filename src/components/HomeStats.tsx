"use client";

import { PlantedBug } from "@/components/PlantedBug";

export function HomeStats() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      <StatCard label="Foco atual" value="QA" sub="crescimento contínuo" />
      <StatCard label="Área" value="Fintech" sub="meios de pagamento" />
      <StatCard
        label="Stack favorita"
        value={
          <PlantedBug
            id="hero-stack-name"
            correct={<>NestJS</>}
            buggy={<>NextJS</>}
          />
        }
        sub="estudo & back-end"
      />
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="card p-5">
      <p className="text-xs uppercase tracking-wide text-white/45">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/40">{sub}</p>
    </div>
  );
}
