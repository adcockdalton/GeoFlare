import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

interface SuggestionProps {
  suggestion: string;
  launch_time: number;
  difficulty: string;
}

export interface SuggestionsProps {
  suggestions: SuggestionProps[];
}

function Suggestions({ suggestions }: SuggestionsProps) {
  return (
    <div className="flex flex-col gap-4">
      {suggestions.map((suggestion, index) => (
        <Suggestion
          key={index}
          suggestion={suggestion.suggestion}
          launch_time={suggestion.launch_time}
          difficulty={suggestion.difficulty}
        />
      ))}
    </div>
  );
}

function Suggestion({ suggestion, launch_time, difficulty }: SuggestionProps) {
  return (
    <Card className="filter brightness-50 outline-2 outline border-none bg-geo-someotherfuckignshadeofgrey p-4 outline-geo-light  hover:filter-none hover:outline-geo-teal hover:brightness-100">
      <h2 className="text-white font-medium pb-2">{suggestion}</h2>
      <CardContent className="flex p-0 flex-col gap-2 items-center">
        <div className="flex justify-between text-sm font-medium items-center w-full">
          <h4 className="text-slate-400">launch time</h4>
          <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
            <Clock></Clock>
            <h4>{launch_time} minutes</h4>
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium items-center w-full">
          <h4 className="text-slate-400">difficulty</h4>
          <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
            <h4>{difficulty}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Suggestions;
