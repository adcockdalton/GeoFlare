import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Suggestions, { SuggestionProps } from "./suggestion";
import { Separator } from "@radix-ui/react-separator";
import { Message } from "ai";
import { MoveDiagonal, Plus, Sparkles } from "lucide-react";

function ChatBot({
  index,
  messages,
  m,
}: {
  index: number;
  messages: Message[];
  m: Message;
}) {
  // parse the message into many smaller messages
  // TODO: probably do some error catching if possible in case the Gemini output is malformed
  console.log("m.content start");
  console.log(m.content);
  console.log("m.content end");
  const mJSON = JSON.parse(m.content);

  let mJSONBlocks = mJSON.data;

  console.log("mJSONBlocks start");
  console.log(mJSONBlocks);
  console.log("mJSONBlocks end");

  // check if the thing is an object
  if (typeof mJSONBlocks[0] !== "object") {
    // fallback
    mJSONBlocks = [
      {
        message: "I'm not sure what you mean. Could you clarify?",
        time: "1 minute",
        difficulty: "easy",
      },
    ];
  }

  const formattedSuggestions: SuggestionProps[] = mJSONBlocks.map(
    (block: any) => ({
      suggestion: block.message,
      launch_time: block.time,
      difficulty: block.difficulty,
    }),
  );

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar className="bg-geo-teal w-6 h-6 rounded-full">
            <AvatarFallback>🐸</AvatarFallback>
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
          <Button className="bg-geo-teal text-white text-lg py-6">
            Hand off to Chief
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChatBot;
