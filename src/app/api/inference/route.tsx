import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const center = request.nextUrl.searchParams.get("center");
  const zoom = request.nextUrl.searchParams.get("zoom");
  const resp = await axios.get(
    `http://localhost:8000/inference?center=${center}&zoom=${zoom}`,
  );
  return new NextResponse(JSON.stringify(resp.data), {
    status: 200,
  });
}
