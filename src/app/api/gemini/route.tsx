import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";
import { parse } from "node-html-parser";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const runtime = "edge";

export async function POST(
  request: NextRequest,
  { params }: any,
): Promise<any> {
  const reqJSON = await request.json();
  const question = reqJSON.messages.at(-1).content;

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Missing API Key in server. Please contact the site administrator.",
      },
      { status: 500 },
    );
  }

  async function getFirstResultLink(query: string) {
    const ddgQuery = query.split(" ").join("+");
    // make the query and parse response
    // https://stackoverflow.com/questions/37012469/duckduckgo-api-getting-search-results
    const ddgURL = `https://html.duckduckgo.com/html/?q=${ddgQuery}`;
    const ddgSearchRes = await fetch(ddgURL);
    const ddgHTML = await ddgSearchRes.text();

    // scrape the first URL
    const root = parse(ddgHTML);
    // grab the anchor tags with the results
    const hits = root.querySelectorAll(".result__url");

    // scrape the first hit
    return hits[0].innerHTML.trim();
  }

  const API_KEY = process.env.GEMINI_API_KEY;

  const GeminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  // parse request body, which will be the question
  if (!request.body) {
    return NextResponse.json(
      {
        error: "Missing body",
      },
      { status: 400 },
    );
  }

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
          text: `I will answer in an array of objects format. I will recommend an action you should take related to the situation, the key will be "action". I will estimate the time this action should take in minutes with a maximum value of 120 that is divisible by 5, they key will be "time". I will estimate the difficulty of the action using a single word, the key will be "difficulty." Example: [{"action": "Deploy a search-and-rescue team in the wooded area.","time": "60","difficulty": "moderate"},{"action": "Construct a barrier between the fire border and the neighborhood area.","time": "120","difficulty": "difficult"}]`,
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

  // send request and get response
  const res = await fetch(GeminiEndpoint, {
    method: "POST",
    body: JSON.stringify(RequestBody),
  });

  const geminiRes = await res.json();

  console.log(geminiRes);
  let geminiTextArray = null;
  try {
    geminiTextArray = geminiRes.candidates[0].content.parts;
    const geminiText = geminiTextArray[0].text;
    let geminiTextObject: {
      text: string;
      action?: string;
      action_link?: string;
      action_tag?: string;
    }[] = JSON.parse(geminiText);
    // console.log(geminiTextObject)
    // HARDCODE: Get only one result
    geminiTextObject = [geminiTextObject[0]];
    // parse through the text and then figure out what to search up
    // console.log(geminiTextObject);
    for (const [actionIndex, step] of geminiTextObject.entries()) {
      if (step.action && step.action_link) {
        // if it is an ACTION_LINK, do a search
        // parse out the query
        const query = step.action_link;
        let hit = await getFirstResultLink(query);
        // append https:// if it does not start with it
        if (!hit.startsWith("https://") && !hit.startsWith("http://")) {
          hit = "https://" + hit;
        }
        // replace it in the action link
        step.action_link = hit;
      }
      geminiTextObject[actionIndex] = step;
    }
    console.log(geminiTextObject);
    const nextRes = NextResponse.json(
      {
        data: geminiTextObject,
      },
      { status: 201 },
    );
    return nextRes;
  } catch (e) {
    console.error(geminiRes);
    console.error(e);
    return NextResponse.json(
      {
        data: `[{"action": "Consult your on-ground team leader for active assistance.","time": "5","difficulty": "easy"}]`,
      },
      { status: 201 },
    );
  }
}
