import { NextResponse } from "next/server";
import nodePackage from "../../../package.json";

export async function GET() {
  return NextResponse.json({ version: nodePackage.version });
}
