import React from "react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar: React.FC = () => {
  return (
    <div className="min-w-60 flex-1 shrink basis-[0%] max-w-[270px] py-2">
      <div className="flex w-full flex-col px-2">
        <div className="flex min-h-12 max-w-full w-[239px] items-center gap-[40px_46px] px-2 py-3.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/f2293403ccbd71e0b1058cf0c2475d24f027295b34f06befccef1a8795abb6b1?placeholderIfAbsent=true"
            className="aspect-[6.94] object-contain w-[139px] self-stretch my-auto"
            alt="Logo"
          />
        </div>
      </div>
      <div className="w-full overflow-hidden font-normal flex-1 mt-2">
        <div className="w-full flex-1">
          <div className="w-full p-2">
            <div className="self-stretch min-h-8 flex-1 shrink basis-[0%] w-full gap-2.5 text-xs text-zinc-500 px-2">
              Group chats
            </div>
            <div className="w-full text-sm whitespace-nowrap">
              <SidebarItem
                icon="⛈️️"
                title="Precipitation calculator"
                isActive={true}
                hasNotification={true}
              />
              <SidebarItem icon="📑" title="LLM research papers" />
              <SidebarItem icon="📘" title="Book about Design systems" />
              <SidebarItem
                icon={
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/b13f759e7ea1bd2d9ae4704c93d33b8d1539a3e1bfd885558ee4b21ec8c6abbb?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                    alt="New chat"
                  />
                }
                title="New chat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
