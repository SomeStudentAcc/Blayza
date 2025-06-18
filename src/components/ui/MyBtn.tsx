import clsx from "clsx";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

export default function MyBtn({ text, className }: Props) {
  return (
    <button
      className={clsx(
        "inline-block px-10 py-4 bg-gradient-to-br from-[#0f969c] to-[#31708e] text-white font-semibold text-base tracking-[0.5px] no-underline rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-[0_10px_25px_rgba(15,150,156,0.3)] relative overflow-hidden z-[1] text-center",
        className
      )}
    >
      {text}
    </button>
  );
}
