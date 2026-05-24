export type BugId =
  | "footer-year"
  | "hero-stack-name"
  | "stack-typo"
  | "job-company"
  | "report-button";

export type BugDefinition = {
  id: BugId;
  page: string;
  hint: string;
  solution: string;
};

export const BUGS: BugDefinition[] = [
  {
    id: "footer-year",
    page: "Qualquer página",
    hint: "Rodapé: o ano do copyright não bate (só no modo caça).",
    solution: "Copyright mostra 2024 em vez de 2026.",
  },
  {
    id: "hero-stack-name",
    page: "Início",
    hint: "Card Stack favorita: framework com nome trocado.",
    solution: '"NextJS" em vez de NestJS.',
  },
  {
    id: "stack-typo",
    page: "Stack",
    hint: "Lista de ferramentas: uma grafia está estranha.",
    solution: '"Playwrite" deveria ser Playwright.',
  },
  {
    id: "job-company",
    page: "Experiência",
    hint: "Nome da empresa atual com letra faltando.",
    solution: '"EvoluService" em vez de EvoluServices.',
  },
  {
    id: "report-button",
    page: "Caça ao Bug",
    hint: "Formulário: o botão amarelo não envia o relatório.",
    solution: 'Clicar em "Enviar relatório" não dispara nenhuma ação.',
  },
];

export const BUG_MAP = Object.fromEntries(
  BUGS.map((b) => [b.id, b]),
) as Record<BugId, BugDefinition>;
