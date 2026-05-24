# lucasfcs-portfolio

Portfólio de **Lucas Fernandes** — QA Engineer. Next.js full stack com modo interativo **Caça ao Bug**.

## Stack

- [Next.js](https://nextjs.org) (App Router) — front + API
- TypeScript · Tailwind CSS

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel — recomendado)

1. Crie o repositório `lucasfcs-portfolio` no GitHub e envie este código.
2. Acesse [vercel.com](https://vercel.com) → **Add New Project** → importe o repo.
3. Framework: **Next.js** (detectado automaticamente).
4. Deploy.

### Domínio `lucasfcs.dev` (opcional)

No painel Vercel: **Settings → Domains** → adicione `lucasfcs.dev` e configure o DNS conforme as instruções (geralmente registro `A` ou `CNAME`).

## API

| Rota | Método | Descrição |
|------|--------|-----------|
| `/api/health` | GET | Health check |
| `/api/bugs/report` | POST | Demo de envio de relatório de bug |

## Caça ao Bug

5 bugs intencionais — **só aparecem com o modo caça ativado**. Fora disso, o site mostra informações corretas (como em produção). Ative **Ativar caça** no header, navegue e clique nos defeitos.

---

[GitHub](https://github.com/lucasfcs) · [LinkedIn](https://www.linkedin.com/in/lucasfcs)
