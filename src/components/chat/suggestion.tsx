import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

/**
 * Represents the props for a suggestion component.
 */
export interface SuggestionProps {
  suggestion: string;
  launch_time: string;
  difficulty: string;
}

/**
 * Represents the props for the Suggestions component.
 */
export interface SuggestionsProps {
  suggestions: SuggestionProps[];
}

/**
 * Renders a list of suggestions.
 *
 * @param {SuggestionsProps} suggestions - The array of suggestions to render.
 * @returns {JSX.Element} The rendered list of suggestions.
 */
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

/**
 * Renders a suggestion card with the provided suggestion, launch time, and difficulty.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.suggestion - The suggestion text.
 * @param {string} props.launch_time - The launch time.
 * @param {string} props.difficulty - The difficulty level.
 * @returns {JSX.Element} The rendered suggestion card.
 */
function Suggestion({ suggestion, launch_time, difficulty }: SuggestionProps) {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handles the click event for a suggestion.
   */
  const handleSuggestionClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Card
      className={`outline-2 outline border-none bg-geo-someotherfuckignshadeofgrey p-4  hover:filter-none hover:outline-geo-teal hover:brightness-100 ${
        isHovered
          ? "filter-none outline-geo-teal brightness-100"
          : "filter outline-geo-light brightness-50"
      }`}
      onClick={handleSuggestionClick}
    >
      <h2 className="text-white font-medium pb-2 text-lg">{suggestion}</h2>

      
      <CardContent className="flex p-0 flex-col gap-2 items-center">


        <div className="flex justify-between text-sm font-medium items-center w-full">
          <h4 className="text-slate-400 text-sm p-0">launch time</h4>
          <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
            <Clock></Clock>
            <h4 className="text-sm p-0">{launch_time}</h4>
          </div>
        </div>


        <div className="flex justify-between text-sm font-medium items-center w-full">
          <h4 className="text-slate-400 text-sm p-0">difficulty</h4>
          <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
            <h4 className="text-sm p-0 pb-px">{difficulty}</h4>
          </div>
        </div>


      </CardContent>
    </Card>
  );
}

export default Suggestions;
