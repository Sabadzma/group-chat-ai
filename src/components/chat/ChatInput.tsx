
import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="self-center z-0 flex w-[750px] max-w-[750px] flex-col items-center mt-[29px] max-md:max-w-full">
      <div className="bg-zinc-100 w-full overflow-hidden p-3 rounded-2xl max-md:max-w-full">
        <div className="flex-1 shrink basis-[0%] min-h-12 w-full gap-2.5 text-sm text-zinc-500 font-normal pl-1 pt-1 max-md:max-w-full">
          <textarea
            className="w-full bg-transparent outline-none resize-none placeholder-zinc-500"
            placeholder="Ask for anything"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
        </div>
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-2 max-md:max-w-full">
          <button className="items-center bg-white self-stretch flex gap-1 text-xs text-zinc-500 font-medium whitespace-nowrap my-auto p-2 rounded-[1000px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/b13f759e7ea1bd2d9ae4704c93d33b8d1539a3e1bfd885558ee4b21ec8c6abbb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Add"
            />
            <div className="self-stretch my-auto">Add</div>
          </button>
          <button
            className="justify-center items-center bg-zinc-900 self-stretch flex flex-col w-7 h-7 my-auto px-1.5 rounded-lg"
            onClick={handleSend}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/6c1374c18bdaa87d1b17d97ecadbea7a29a980114da865dfae4885f730b8212a?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
              alt="Send"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
