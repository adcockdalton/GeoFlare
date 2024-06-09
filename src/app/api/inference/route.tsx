import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

/**
 * Sends a GET request to the server with the specified center and zoom parameters.
 * @param request - The NextRequest object containing the request details.
 * @returns A NextResponse object with the response data and status code.
 */
export async function GET(request: NextRequest) {
  // Extract the "center" and "zoom " parameters from the request URL
  const center = request.nextUrl.searchParams.get("center");
  const zoom   = request.nextUrl.searchParams.get("zoom");

  // Send a GET request to the local server with the extracted parameters
  const resp = await axios.get(
    `http://localhost:8000/inference?center=${center}&zoom=${zoom}`,
  );

  // Returns a successful response with the data received from the local server
  return new NextResponse(JSON.stringify(resp.data), {
    status: 200,
  });
}
