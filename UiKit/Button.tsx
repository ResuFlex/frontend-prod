"use client";

import cn from "classnames";

const Button = ({
  text,
  color = "bg-theme-500",
  onClick,
}: {
  text: string;
  color: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={cn(
        "text-black rounded-md py-2 px-4 font-medium text-xl hover:cursor-pointer hover:bg-theme-600",
        color
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
