import React from "react";

interface ChatHeaderProps {
  chatName: string;
  onNewChat?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  chatName,
  onNewChat,
}) => {
  return (
    <div className="flex w-full items-center gap-4 font-medium flex-wrap p-4 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/1a969de6038434f640dcabfaf266014688ed5d9772eafe19e035f8bc862abb9e?placeholderIfAbsent=true"
        className="aspect-[2] object-contain w-16 self-stretch shrink-0 gap-[-16px] my-auto"
        alt="Chat icon"
      />
      <div className="text-zinc-950 text-xl self-stretch flex-1 shrink basis-8 my-auto max-md:max-w-full">
        {chatName}
      </div>
      <button
        className="justify-center items-center bg-zinc-900 self-stretch flex min-h-10 gap-2 text-sm text-white my-auto px-4 py-2 rounded-lg"
        onClick={onNewChat}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/7d5a64de79f45ce18c5646e43ba40fb655a2889454f6490d0549e7a94616b0cd?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="New chat icon"
        />
        <div className="self-stretch min-h-6 my-auto">New chat</div>
      </button>
    </div>
  );
};
