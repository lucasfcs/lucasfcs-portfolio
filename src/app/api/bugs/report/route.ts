import { NextResponse } from "next/server";
import type { BugId } from "@/lib/bugs";

type ReportBody = {
  title?: string;
  description?: string;
  foundBugs?: BugId[];
};

export async function POST(request: Request) {
  let body: ReportBody;

  try {
    body = (await request.json()) as ReportBody;
  } catch {
    return NextResponse.json(
      { error: "JSON inválido no corpo da requisição." },
      { status: 400 },
    );
  }

  const title = body.title?.trim();
  if (!title) {
    return NextResponse.json(
      { error: "Campo 'title' é obrigatório." },
      { status: 400 },
    );
  }

  const foundCount = Array.isArray(body.foundBugs) ? body.foundBugs.length : 0;

  return NextResponse.json({
    message: `Relatório "${title}" recebido. Bugs já encontrados no site: ${foundCount}/5.`,
    receivedAt: new Date().toISOString(),
  });
}
