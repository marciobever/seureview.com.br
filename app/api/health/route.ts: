// app/api/health/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";        // seguro no Node runtime
export const dynamic = "force-static";  // responde sem bloquear

export function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

export function HEAD() {
  return new Response(null, { status: 200 });
}
