import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";

interface Message {
  id: string;
  content: string;
  avatar: string;
  isUser: boolean;
}

export const ChatLayout: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hey there 👋",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/f38af51fc262cfa80e2592f7f55bde2bcde658f1278cb0053db296f42b80c2c3?placeholderIfAbsent=true",
      isUser: false,
    },
    {
      id: "2",
      content: "Hello, world!",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/c405b4fb36d74d066eab09ae158f61dd56a530ddd7fe2fed479461f985f6a08d?placeholderIfAbsent=true",
      isUser: false,
    },
    {
      id: "3",
      content: "Hi John 🙋🏻‍♂️ How can we help?",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/477258c4ec03d615669c96c5d79ff4c08ba3dcf0123cc3619aea3b38872c2c2a?placeholderIfAbsent=true",
      isUser: false,
    },
    {
      id: "4",
      content:
        "Develop a user-friendly precipitation calculator app with an intuitive interface, allowing users to input area and precipitation depth in various units. Implement accurate calculations and unit conversions, displaying the resulting precipitation volume in selectable units, and ensure error handling for invalid inputs.",
      avatar: "",
      isUser: true,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      avatar: "",
      isUser: true,
    };

    setMessages([...messages, newMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'll help you develop that precipitation calculator app. Let's start by planning the user interface and core functionality.",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/f38af51fc262cfa80e2592f7f55bde2bcde658f1278cb0053db296f42b80c2c3?placeholderIfAbsent=true",
        isUser: false,
      };

      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="items-stretch bg-neutral-100 flex flex-wrap min-h-screen">
      <Sidebar />
      <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] pr-2 py-2 max-md:max-w-full">
        <div className="bg-white w-full overflow-hidden flex-1 rounded-xl max-md:max-w-full">
          <ChatHeader
            chatName="Precipitation calculator web app"
            onNewChat={() => console.log("New chat clicked")}
          />
          <ChatBody messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};
