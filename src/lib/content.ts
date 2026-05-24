export const skills = [
  { name: "Playwright", category: "Automação" },
  { name: "Cucumber / BDD", category: "Automação" },
  { name: "APIs REST", category: "Testes" },
  { name: "JavaScript", category: "Código" },
  { name: "Java", category: "Código" },
  { name: "Python", category: "Código" },
  { name: "Node.js", category: "Dev" },
  { name: "NestJS", category: "Dev" },
  { name: "Git", category: "Ferramentas" },
] as const;

export const experiences = [
  {
    role: "QA Engineer",
    company: "EvoluServices Meios de Pagamento",
    period: "Atual · São Paulo",
    highlights: [
      "Automação E2E com Playwright em fluxos críticos de pagamento",
      "Cenários BDD com Cucumber alinhados ao negócio",
      "Validação de APIs REST e jornadas completas do usuário",
      "Regressão, triagem e documentação clara de defeitos",
    ],
  },
  {
    role: "Desenvolvedor Back-end",
    company: "Anjun Express",
    period: "Experiência anterior",
    highlights: [
      "APIs REST com NestJS e Prisma ORM",
      "Integrações com banco de dados e evolução de features",
      "Base técnica que hoje acelera debug e testes de integração",
    ],
  },
] as const;

export const highlights = [
  {
    title: "Olhar de QA",
    body: "Automação, BDD e regressão em ambientes onde um bug custa caro.",
  },
  {
    title: "Background dev",
    body: "Ex back-end: leio código, APIs e logs com mais profundidade na investigação.",
  },
  {
    title: "Em evolução",
    body: "Crescendo como QA e estudando desenvolvimento — projetos novos vêm aí.",
  },
] as const;
