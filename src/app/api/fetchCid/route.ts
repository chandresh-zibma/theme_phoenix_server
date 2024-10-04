import { NextResponse } from "next/server";
import { cid } from "@/static.info"; // Import cid from static.info.ts

export async function GET() {
  return NextResponse.json({ cid });
}
