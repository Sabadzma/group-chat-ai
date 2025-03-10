
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatOpener } from "./ChatOpener";
import { ChatInput } from "./ChatInput";

interface Message {
  id: string;
  content: string;
  avatar: string;
  isUser: boolean;
}

interface ChatBodyProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export const ChatBody: React.FC<ChatBodyProps> = ({
  messages,
  onSendMessage,
}) => {
  return (
    <div className="relative flex w-full flex-col overflow-hidden flex-1 pt-[72px] pb-4 px-6 max-md:max-w-full max-md:px-5">
      <div className="self-center relative z-0 w-[750px] max-w-[750px] flex-1 max-md:max-w-full">
        <ChatOpener models={["o3-mini", "Claude 3.7", "Gemini 2.0 Flash"]} />

        <div className="z-0 w-full mt-8 max-md:max-w-full">
          {messages.map((message) => (
            <div key={message.id} className="mt-5 first:mt-0">
              <ChatMessage
                avatar={message.avatar}
                content={message.content}
                isUser={message.isUser}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-0 flex min-h-[157px] w-full bottom-[-157px] h-[157px] inset-x-0 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="absolute z-0 flex min-h-[63px] max-w-full w-[1162px] h-[63px] top-0 inset-x-0 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute z-0 flex min-h-[157px] max-w-full w-[1162px] h-[157px] bottom-0 inset-x-0 bg-gradient-to-t from-white to-transparent" />

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};
