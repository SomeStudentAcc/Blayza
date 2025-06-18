import React from "react";
import PowerBtn from "./PowerBtn";

export default function DustButton() {
  return (
    <div className="bg-[#0f969c1a]">
      <div className=" container px-5 md:px-1 mx-auto pb-20">
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-[#0f969c] text-lg font-semibold tracking-wide uppercase text-center">
            Увидьте разницу
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-bold md:tracking-wide text-center">
            Почувствуйте эффект чистого воздуха
          </h2>
        </div>
        <PowerBtn />
      </div>
    </div>
  );
}
