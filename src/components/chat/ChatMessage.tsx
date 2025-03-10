
import React from "react";

interface ChatMessageProps {
  avatar: string;
  content: string;
  isUser?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  avatar,
  content,
  isUser = false,
}) => {
  if (isUser) {
    return (
      <div className="flex w-full flex-col items-end text-base text-zinc-900 font-normal leading-6 mt-8 max-md:max-w-full">
        <div className="flex-1 shrink basis-[0%] max-w-[600px] bg-zinc-100 w-[600px] gap-2 px-4 py-3 rounded-[16px_16px_16px_8px] max-md:max-w-full">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-2 flex-wrap pr-8 max-md:max-w-full max-md:pr-5">
      <div className="flex items-center gap-2.5 w-5 py-0.5">
        <img
          src={avatar}
          className="aspect-[1] object-contain w-5 self-stretch my-auto"
          alt="Avatar"
        />
      </div>
      <div className="text-zinc-900 text-base font-normal flex-1 shrink basis-[0%] max-md:max-w-full">
        {content}
      </div>
    </div>
  );
};
