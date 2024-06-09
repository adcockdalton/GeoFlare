import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Handles the POST request to the Gemini API endpoint.
 * 
 * @param request - The NextRequest object representing the incoming request.
 * @returns A NextResponse object with the response data and status code.
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  //Parse the JSON body of the incoming request
  const reqJSON  = await request.json();
  const question = reqJSON.messages.at(-1).content;


  // Check if the GEMINI_API_KEY environment variable is set
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Missing API Key in server. Please contact the site administrator.",
      },
      { status: 500 },
    );
  }

  // Construct the Gemini API endpoint
  const API_KEY        = process.env.GEMINI_API_KEY;
  const GeminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  // Check if the request body is present
  if (!request.body) {
    return NextResponse.json(
      {
        error: "Missing body",
      },
      { status: 400 },
    );
  }

  // Construct the body for the Gemini API request
  const RequestBody = {
    contents: [
      {
        role: "user",
        parts: {
          text: "Who are you?",
        },
      },
      {
        role: "model",
        parts: {
          text: "I am a strategy advisor for firefighters and first responders. I will provide suggestions on how to address situations relating to active wildfires. These wildfires are currently happening.",
        },
      },
      {
        role: "user",
        parts: {
          text: "What format will you respond to me in?",
        },
      },
      {
        role: "model",
        parts: {
          text: `I will answer in an array of objects format. If it is the suggestion, the key will be "message". If it is the time required to complete the suggestion from 0 to 120 minutes, the key will be "time". If it is the difficulty to complete the suggestion, the key will be "difficulty". All of my responses will contain items that have all three of those components: "message", "time", "difficulty". All of my responses will contain either 1 or 2 items. Example: [{"message": "Build an insulating barricade for the buildings","time": "120 minutes","difficulty": "hard"},{"message": "Send an electronic alert to the local residents.","time": "10 minutes","difficulty": "easy"}]`,
        },
      },
      {
        role: "user",
        parts: {
          text: question,
        },
      },
    ],
    safety_settings: {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_LOW_AND_ABOVE",
    },
    generation_config: {
      temperature: 0.2,
      topP: 0.8,
      topK: 20,
    },
  };

  // Send a POST request to the Gemini API with the constructed body
  const res = await fetch(GeminiEndpoint, {
    method: "POST",
    body: JSON.stringify(RequestBody),
  });

  // Parse teh Gemini API response as JSON
  const geminiRes = await res.json();

  let geminiTextArray = null;
  try {
    // Extract the generated content from the Gemini API response
    geminiTextArray  = geminiRes.candidates[0].content.parts;
    const geminiText = geminiTextArray[0].text;
    const geminiTextObject: {
      action: string;
      time: string;
      difficulty: string;
    }[] = JSON.parse(geminiText);

    // Return a successful response with the generated content
    const nextRes = NextResponse.json(
      {
        data: geminiTextObject,
      },
      { status: 201 },
    );
    return nextRes;
  } catch (e) {
    // Log any errors tht occur during the extraction process
    console.error("gem", geminiRes);
    console.error("e", e);

    // Return a successful response with a default message if an error occurs
    return NextResponse.json(
      {
        data: `[{"action": "Consult your on-ground team leader for active assistance.","time": "5","difficulty": "easy"}]`,
      },
      { status: 201 },
    );
  }
}
