import React from "react";
import { Button } from "../ui/button";

export function CustomButton_({
  className,
  children,
  type = "Button",
  ...props
}) {
  return (
    <Button
      variant="ghost"
      className={`w-full rounded-md px-3 py-2 sm:w-auto bg-cyan-400 hover:bg-cyan-500 font-bold  ${className}`}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
}

export function CustomButton_1({
  type = "button",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`mr-1 rounded-md bg-cyan-400 hover:bg-[#20b2d6] px-3 py-2 text-center font-bold text-black shadow-[4px_4px_0px_0px_#054d5f] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
