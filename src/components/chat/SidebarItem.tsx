import React from "react";

interface SidebarItemProps {
  icon: string | React.ReactNode;
  title: string;
  isActive?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isActive = false,
  hasNotification = false,
  onClick,
}) => {
  return (
    <div
      className={`flex min-h-8 w-full items-center gap-1.5 p-2 rounded-md cursor-pointer ${
        isActive ? "bg-zinc-100" : ""
      }`}
      onClick={onClick}
    >
      <div className="self-stretch flex items-center gap-1.5 flex-1 shrink basis-[0%] my-auto">
        <div className="text-zinc-600 text-center text-ellipsis self-stretch w-4 my-auto">
          {icon}
        </div>
        <div className="text-zinc-900 text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
          {title}
        </div>
      </div>
      {hasNotification && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/70624ef21f684bd8bb04df2b1e86ac05/7e72118a1ea46c34cdf0798dbc359768037dca1dcabeea0d56ee964e1735575a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Notification"
        />
      )}
    </div>
  );
};
