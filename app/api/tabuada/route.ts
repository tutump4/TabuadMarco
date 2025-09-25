import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const n = Number(new URL(req.url).searchParams.get("numero"));

  return NextResponse.json(
    [...Array(10)].map((_, i) => n * (i + 1))
   );
}