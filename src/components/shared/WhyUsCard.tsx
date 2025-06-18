import { Award, CreditCard, Truck } from "lucide-react";
import React from "react";

interface Props {
  icon: number;
  title: string;
  text: string;
}

export default function WhyUsCard({ icon, title, text }: Props) {
  return (
    <div
      className="relative flex items-center flex-col p-10 bg-white rounded-[25px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] text-center z-[1] overflow-hidden transition-all duration-400 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
  before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(15,150,156,0.2),rgba(49,112,142,0.2))]
  before:scale-y-0 hover:before:scale-y-100 before:origin-top before:transition-transform before:duration-500 before:ease-in-out"
    >
      <div className="relative w-[94px] h-[94px] mb-5">
        {/* Rotating dashed border */}
        <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#0F969C4D] bg-[#0f969c1a] rotating-border"></div>

        {/* Static icon */}
        <div className="flex justify-center items-center w-full h-full relative z-10">
          {icon == 1 && <Award color="#31708e" size={40} />}
          {icon == 2 && <Truck color="#31708e" size={40} />}
          {icon == 3 && <CreditCard color="#31708e" size={40} />}
        </div>
      </div>

      <div className="max-w-[260px] w-full flex flex-col gap-5">
        <h2 className=" h-20 text-2xl font-bold">{title}</h2>
        <p className="text-[#555] h-20">{text}</p>
      </div>
    </div>
  );
}
