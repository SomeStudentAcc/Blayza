import { Funnel, Laptop, Users, Wind } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  text: string;
  icon: number;
  model: string;
}

export default function TechnologyCard({ text, title, icon, model }: Props) {
  return (
    <div className="rounded-[25px] overflow-hidden bg-white flex flex-col group cursor-pointer p-8">
      <div className=" w-full  flex justify-center items-center">
        <div className="flex mb-4">
          <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full  bg-[#0f969c1a]">
            {icon == 1 && <Users color="#31708e" size={40} />}
            {icon == 2 && <Funnel color="#31708e" size={40} />}
            {icon == 3 && <Wind color="#31708e" size={40} />}
            {icon == 4 && <Laptop color="#31708e" size={40} />}
          </div>
        </div>
      </div>
      <div className=" flex-grow mb-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-center">{text}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <button className="inline-block px-4 py-1 bg-[#0f969c1a]  text-[#31708e] font-semibold text-base tracking-[0.5px] no-underline rounded-full cursor-pointer overflow-hidden text-center">
            {model}
          </button>
        </div>
      </div>
    </div>
  );
}
