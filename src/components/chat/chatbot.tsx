import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import Suggestions, { SuggestionProps } from "./suggestion";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Message } from "ai";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, getDatabase, push, ref, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "geoflare.firebaseapp.com",
  databaseURL: "https://geoflare-default-rtdb.firebaseio.com",
  projectId: "geoflare",
  storageBucket: "geoflare.appspot.com",
  messagingSenderId: "149802851296",
  appId: "1:149802851296:web:c86016fe23157afa5b6985",
  measurementId: "G-HKFQSQM52X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

interface ChatBotProps {
  index: number;
  messages: Message[];
  m: Message;
}

const ChatBot: React.FC<ChatBotProps> = ({ m }) => {
  const mJSON = JSON.parse(m.content);
  let mJSONBlocks = mJSON.data;

  if (typeof mJSONBlocks[0] !== "object") {
    mJSONBlocks = [
      {
        message: "I'm not sure what you mean. Could you clarify?",
        time: "1 minute",
        difficulty: "easy",
      },
    ];
  }

  const formattedSuggestions = mJSONBlocks.map((block: any) => ({
    suggestion: block.message,
    launch_time: block.time,
    difficulty: block.difficulty,
  }));

  function acceptMission(
    e: any,
    ipt_id: string,
    ipt_suggestion: string | undefined,
    ipt_launch_time: string | undefined,
    ipt_difficulty: string | undefined,
  ) {
    // create the action object
    const mission_id = ipt_id;
    const suggestion = ipt_suggestion ?? "Fallback Title";
    const launch_time = ipt_launch_time ?? "Fallback Tag";
    const difficulty = ipt_difficulty ?? "Fallback Link";

    const mission = {
      id: mission_id,
      suggestion: suggestion,
      launch_time: launch_time,
      difficulty: difficulty,
    };

    const updates: { [key: string]: any } = {};
    updates["/mission/" + mission_id] = mission;

    return update(ref(database), updates);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar className="bg-geo-teal w-6 h-6 rounded-full">
            <AvatarImage src="botLogo.svg" />
          </Avatar>
          <span className="text-lg text-white font-light">strategist</span>
        </div>
        <div className="w-full flex flex-col text-white bg-geo-grey p-4 rounded-xl text-lg gap-6">
          <h1 className="text-xl font-semibold">
            Immediate Strategies to Deploy
          </h1>
          <div className="flex flex-col gap-4">
            <Suggestions suggestions={formattedSuggestions} />
          </div>
          <Button
            className="bg-geo-teal text-white text-lg py-6"
            onClick={(e) =>
              formattedSuggestions.forEach((suggestion: SuggestionProps) => {
                acceptMission(
                  e,
                  suggestion.suggestion
                    .split("")
                    .reduce(
                      (hash, char) => (hash << 5) - hash + char.charCodeAt(0),
                      0,
                    )
                    .toString(),
                  suggestion.suggestion,
                  suggestion.launch_time,
                  suggestion.difficulty,
                );
              })
            }
          >
            Hand off to Chief
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
