import React from "react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import Suggestions, { SuggestionProps } from "./suggestion";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Message } from "ai";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";
import { motion } from "framer-motion";

/**
 * Firebase configuration object.
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "geoflare-e56a6.firebaseapp.com",
  databaseURL: "https://geoflare-e56a6-default-rtdb.firebaseio.com",
  projectId: "geoflare-e56a6",
  storageBucket: "geoflare-e56a6.appspot.com",
  messagingSenderId: "22597622869",
  appId: "1:22597622869:web:1e0c2e2d98e002fbd888dc",
};

/**
 * Initializes the Firebase app with the provided configuration.
 *
 * @param {Object} firebaseConfig - The configuration object for Firebase.
 * @returns {FirebaseApp} The initialized Firebase app.
 */
const app      = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * Represents the props for the ChatBot component.
 * @property {number} index - The index of the chat message.
 * @property {Message[]} messages - The array of chat messages.
 * @property {Message} m - The chat message.
 * @returns The props for the ChatBot component.
 */
interface ChatBotProps {
  index: number;
  messages: Message[];
  m: Message;
}

/**
 * Represents a chatbot component.
 *
 * @component
 * @param {ChatBotProps} props - The props for the ChatBot component.
 * @returns {JSX.Element} The rendered ChatBot component.
 */
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

  /**
   * Represents a block of information in the chatbot.
   * @property {string} message - The message in the block.
   * @property {string} time - The time of the block.
   * @property {string} difficulty - The difficulty of the block.
   */
  interface Block {
    message: string;
    time: string;
    difficulty: string;
  }

  /**
   * Maps the JSON blocks to a formatted suggestion object.
   *
   * @param mJSONBlocks - The JSON blocks to be mapped.
   * @returns An array of formatted suggestion objects.
   */
  const formattedSuggestions = mJSONBlocks.map((block: Block) => ({
    suggestion: block.message,
    launch_time: block.time,
    difficulty: block.difficulty,
  }));

  /**
   * Accepts a mission and updates the mission object in the database.
   *
   * @param ipt_id - The ID of the mission.
   * @param ipt_suggestion - The suggestion for the mission. If undefined, a fallback value will be used.
   * @param ipt_launch_time - The launch time for the mission. If undefined, a fallback value will be used.
   * @param ipt_difficulty - The difficulty of the mission. If undefined, a fallback value will be used.
   * @returns A Promise that resolves when the update is complete.
   */
  function acceptMission(
    ipt_id: string,
    ipt_suggestion: string | undefined,
    ipt_launch_time: string | undefined,
    ipt_difficulty: string | undefined,
  ) {
    
    // create the action object
    const mission_id  = ipt_id;
    const suggestion  = ipt_suggestion ?? "Fallback Title";
    const launch_time = ipt_launch_time ?? "Fallback Tag";
    const difficulty  = ipt_difficulty ?? "Fallback Link";

    /**
     * Represents a mission object.
     * @typedef {Object} Mission
     * @property {string} id - The ID of the mission.
     * @property {string} suggestion - The suggestion for the mission.
     * @property {string} launch_time - The launch time of the mission.
     * @property {string} difficulty - The difficulty level of the mission.
     */

    const mission = {
      id: mission_id,
      suggestion: suggestion,
      launch_time: launch_time,
      difficulty: difficulty,
    };

    /**
     * Represents a mission block.
     */
    interface MissionBlock {
      id: string;
      suggestion: string;
      launch_time: string;
      difficulty: string;
    }

    const updates: { [key: string]: MissionBlock } = {};
    updates["/mission/" + mission_id] = mission;

    return update(ref(database), updates);
  }

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
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
          onClick={() =>
            formattedSuggestions.forEach((suggestion: SuggestionProps) => {
              acceptMission(
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
    </motion.div>
  );
};

export default ChatBot;
