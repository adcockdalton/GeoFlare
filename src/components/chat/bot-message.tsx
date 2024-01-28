import React from "react";
import Suggestions, { SuggestionsProps } from "./suggestion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function BotMessage({ suggestions }: SuggestionsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Avatar className="bg-geo-teal w-6 h-6 rounded-full"> </Avatar>
        <span className="text-lg text-white font-light">strategist</span>
      </div>
      <div className="w-full flex flex-col text-white bg-geo-grey p-4 rounded-xl text-lg gap-6">
        <h1 className="text-xl font-semibold">
          Immediate Strategies to Deploy
        </h1>
        <div className="flex flex-col gap-4">
          <Suggestions suggestions={suggestions} />
        </div>
        <Button className="bg-geo-teal text-white text-lg py-6">
          Hand off to Chief
        </Button>
      </div>
    </div>
  );
}

export default BotMessage;
