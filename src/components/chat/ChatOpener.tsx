import React from "react";

interface ChatOpenerProps {
  models: string[];
}

export const ChatOpener: React.FC<ChatOpenerProps> = ({ models }) => {
  return (
    <div className="z-0 w-full text-base text-zinc-900 font-medium max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/1a969de6038434f640dcabfaf266014688ed5d9772eafe19e035f8bc862abb9e?placeholderIfAbsent=true"
        className="aspect-[2] object-contain w-16 gap-[-16px]"
        alt="Chat icon"
      />
      <div className="mt-3 max-md:max-w-full">
        {models.map((model, index) => (
          <React.Fragment key={model}>
            <span className="font-bold">{model}</span>
            {index < models.length - 2 && (
              <span className="font-normal">, </span>
            )}
            {index === models.length - 2 && (
              <span className="font-normal"> and </span>
            )}
          </React.Fragment>
        ))}
        <span className="font-normal text-zinc-500">
          {" "}
          have been added to the chat
        </span>
      </div>
    </div>
  );
};
