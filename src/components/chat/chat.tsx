"use client";

import { useEffect, useRef, useState } from "react";
import ChatBot from "@/components/chat/chatbot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";
import { ArrowUp, Loader2, MoveDiagonal, Plus, Sparkles } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/gemini/",
  });

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollIntoViewInterval = () => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    scrollIntoViewInterval();

    return () => scrollIntoViewInterval();
  }, [messages]);

  return (
    <div className="flex flex-col bg-geo-black border-none w-[25rem] py-4 rounded-s-xl rounded-e-xl z-20">
      <CardTitle className="absolute -top-9 p-2 bg-geo-dark text-white text-sm font-medium px-8 rounded-t-lg">
        Live Chat
      </CardTitle>
      <CardContent className="flex flex-col h-full justify-between py-0">
        <ScrollArea
          className="h-full mb-4 overflow-y-hidden"
          id="messageContainer"
        >
          <div
            className="space-y-4 justify-end items-end flex flex-col overflow-y-hidden"
            ref={ref}
          >
            {messages.map((m, index) => (
              <div key={m.id}>
                {m.role === "user" ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                      <Avatar className="bg-slate-400 w-6 h-6 rounded-full">
                        <AvatarFallback>🦊</AvatarFallback>
                      </Avatar>
                      <span className="text-lg text-white font-light">you</span>
                    </div>
                    <h2 className="w-full text-white bg-geo-light p-4 rounded-xl text-lg">
                      {m.content}
                    </h2>

                    {index == messages.length - 1 && m.role == "user" && (
                      <div className=" rounded-xl p-4 flex flex-row gap-x-2">
                        <Avatar className="size-8">
                          <AvatarFallback className="bg-geo-teal">
                            🐸
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex gap-y-2 flex-col">
                          <div className="flex items-center gap-x-2 flex-row">
                            <span className="font-bold text-xl">
                              strategist
                            </span>
                          </div>

                          <Loader2 className="animate-spin mx-auto" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <ChatBot index={index} messages={messages} m={m} />
                    <div className="flex flex-col items-center justify-center mt-4">
                      <div className="mx-auto">
                        <span className="font-bold text-xl text-geo-teal text-opacity-50  text-center">
                          Ask a follow-up question
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <ScrollBar className="bg-geo-teal" />
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            placeholder="Ask for assistance..."
            onChange={handleInputChange}
            className="gap-4 text-geo-white rounded-lg bg-geo-grey border-none text-lg py-6 placeholder-gray-800"
          />

          <Button
            type="submit"
            className="bg-geo-teal p-1 rounded-lg h-full aspect-square"
          >
            <ArrowUp style={{ fontSize: "30px" }} />
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
