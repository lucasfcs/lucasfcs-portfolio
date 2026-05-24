"use client";

import { useState } from "react";
import { useBugHunt } from "@/components/BugHuntProvider";
import { PageShell } from "@/components/PageShell";
import { PlantedBug } from "@/components/PlantedBug";
import { BUGS, BUG_MAP } from "@/lib/bugs";

export default function BugHuntPage() {
  const { huntMode, setHuntMode, found, progress, total } = useBugHunt();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const allFound = progress === total;

  async function submitRealReport() {
    setApiMessage(null);
    const res = await fetch("/api/bugs/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        foundBugs: [...found],
      }),
    });
    const data = (await res.json()) as { message?: string; error?: string };
    setApiMessage(data.message ?? data.error ?? "Resposta recebida.");
  }

  return (
    <PageShell
      title="Caça ao Bug"
      subtitle="Com o modo caça desligado, o site está correto. Ligue, explore as páginas e clique nos defeitos."
    >
      {!huntMode && (
        <div className="card mb-8 border-amber-400/20 bg-amber-400/5 p-5">
          <p className="text-sm text-amber-100/90">
            Dica: clique em{" "}
            <button
              type="button"
              onClick={() => setHuntMode(true)}
              className="font-semibold text-amber-300 underline underline-offset-2"
            >
              Ativar caça
            </button>{" "}
            no topo — elementos suspeitos ficam destacados ao passar o mouse.
          </p>
        </div>
      )}

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="card flex-1 min-w-[200px] p-5">
          <p className="text-xs uppercase text-white/45">Progresso</p>
          <p className="mt-1 text-3xl font-semibold text-white">
            {progress}{" "}
            <span className="text-lg text-white/40">/ {total}</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all duration-500"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
        </div>
        {allFound && (
          <div className="card border-emerald-400/30 bg-emerald-400/10 p-5">
            <p className="font-medium text-emerald-200">
              Todos os bugs encontrados!
            </p>
            <p className="mt-1 text-sm text-white/55">
              Você tem o mesmo olhar que procuro em QA. Bora conversar no
              LinkedIn.
            </p>
          </div>
        )}
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-medium text-white">Checklist</h2>
        <ul className="space-y-3">
          {BUGS.map((bug) => {
            const done = found.has(bug.id);
            return (
              <li
                key={bug.id}
                className={[
                  "card flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between",
                  done ? "border-emerald-400/20" : "",
                ].join(" ")}
              >
                <div>
                  <span className="font-mono text-xs text-white/40">
                    {bug.page}
                  </span>
                  <p className="text-sm text-white/70">{bug.hint}</p>
                </div>
                <span
                  className={[
                    "shrink-0 rounded-lg px-3 py-1 text-xs font-medium",
                    done
                      ? "bg-emerald-500/20 text-emerald-200"
                      : "bg-white/5 text-white/40",
                  ].join(" ")}
                >
                  {done ? "Encontrado" : "Pendente"}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="card p-8">
        <h2 className="text-lg font-medium text-white">
          Relatório de bug (demo)
        </h2>
        <p className="mt-2 text-sm text-white/50">
          {huntMode
            ? "No modo caça, o botão amarelo é o bug — ele não envia nada. O botão ciano usa a API de verdade."
            : "Envie um relatório demo pela API. Ative o modo caça para ver o botão quebrado."}
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void submitRealReport();
          }}
        >
          <label className="block">
            <span className="text-xs text-white/50">Título</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
              placeholder="Ex: Botão Enviar sem ação"
            />
          </label>
          <label className="block">
            <span className="text-xs text-white/50">Descrição</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
              placeholder="Passos para reproduzir..."
            />
          </label>

          <div className="flex flex-wrap gap-3">
            {huntMode ? (
              <PlantedBug
                id="report-button"
                correct={<></>}
                buggy={
                  <button
                    type="button"
                    className="rounded-xl bg-amber-400/90 px-5 py-2.5 text-sm font-semibold text-[#0a0d12]"
                  >
                    Enviar relatório
                  </button>
                }
              />
            ) : (
              <button
                type="submit"
                className="rounded-xl bg-amber-400/90 px-5 py-2.5 text-sm font-semibold text-[#0a0d12]"
              >
                Enviar relatório
              </button>
            )}
            <button
              type="submit"
              className="rounded-xl bg-cyan-500/20 px-5 py-2.5 text-sm font-medium text-cyan-100 ring-1 ring-cyan-400/30 hover:bg-cyan-500/30"
            >
              Enviar via API
            </button>
          </div>
        </form>

        {apiMessage && (
          <p className="mt-4 font-mono text-sm text-cyan-300/90">{apiMessage}</p>
        )}

        {found.has("report-button") && (
          <p className="mt-4 text-sm text-emerald-300/80">
            Solução: {BUG_MAP["report-button"].solution}
          </p>
        )}
      </section>
    </PageShell>
  );
}
