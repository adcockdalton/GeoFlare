import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const resp = await axios.get(`http://localhost:8000/`);
  return new NextResponse(JSON.stringify(resp.data), {
    status: 200,
  });
}
