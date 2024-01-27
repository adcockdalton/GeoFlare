import React from 'react';
import UserMessage from './user-message';
import BotMessage from './bot-message';
import { SuggestionsProps } from './suggestion';
import {
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { SendHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const sampleSuggestions = [
    {
        suggestion: "Use fire-resistant materials for construction",
        launch_time: 30,
        difficulty: "Medium",
    },
    {
        suggestion: "Install smoke detectors and fire alarms",
        launch_time: 60,
        difficulty: "Hard",
    },
    {
        suggestion: "Create firebreaks and clear vegetation around buildings",
        launch_time: 45,
        difficulty: "Easy",
    },
];

const sampleMessage = "How do I address this situation? I'm not sure what to do.";
const sampleMessage2 = "Thank you for the suggestion!";


function ChatBot() {
    return (
        <div className="flex flex-col bg-geo-black border-none  w-[25rem] py-4   rounded-s-xl rounded-e-xl z-20">
            <CardTitle className="absolute -top-9 p-2 bg-geo-dark text-white text-sm font-medium px-8 rounded-t-lg">
                Live Chat
            </CardTitle>
            <CardContent className="flex flex-col h-full justify-between py-0">
                <ScrollArea className="h-full mb-4 pr-4">
                    <div className="flex flex-col gap-4">
                        <UserMessage message={sampleMessage} />
                        <BotMessage suggestions={sampleSuggestions} />
                        <UserMessage message={sampleMessage2} />
                    </div>
                </ScrollArea>
                <div className="flex gap-2">
                    <Input
                        className="gap-4 text-geo-white rounded-lg bg-geo-grey border-none text-lg py-6 placeholder-gray-800"
                        placeholder="ask for assistance..."
                    ></Input>
                    <Button className="bg-geo-teal p-1 rounded-lg h-full aspect-square  ">
                        <SendHorizontal></SendHorizontal>
                    </Button>
                </div>
            </CardContent>
        </div>
    );
};

export default ChatBot;
