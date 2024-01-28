import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import Suggestions from "./suggestion";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Message } from "ai";

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
          <Button className="bg-geo-teal text-white text-lg py-6">
            Hand off to Chief
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
