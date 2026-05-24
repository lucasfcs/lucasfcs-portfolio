import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "lucasfcs-portfolio",
    timestamp: new Date().toISOString(),
  });
}
