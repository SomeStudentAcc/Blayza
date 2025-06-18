import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

export default function MyInput({ label, placeholder,  }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="block mb-2 text-[0.9rem] text-[#555] font-medium">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={`w-full p-4 border border-[#eee] rounded-[10px] font-sans text-base transition-all focus:border-[#0f969c] focus:ring-4 focus:ring-[#0f969c1a] focus:outline-none`}
      />
    </div>
  );
}
