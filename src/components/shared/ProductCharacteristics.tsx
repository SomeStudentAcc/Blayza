"use client";
import { CircleCheck } from "lucide-react";
import React, { useState } from "react";

const headings = [
  {
    id: 1,
    name: "Характеристики",
  },
  {
    id: 2,
    name: "Особенности",
  },
  {
    id: 3,
    name: "Галерея",
  },
];

interface Props {
  selectedProd:
    | {
        id: number;
        name: string;
        img: string;
        url: string;
        description: string;
        capabilities: {
          id: number;
          text: string;
        }[];
        price: string;
        characteristics: {
          description: string;
          title: string;
        }[];

        features: {
          description: string;
          title: string;
        }[];
      }
    | undefined;
}

export default function ProductCharacteristics({ selectedProd }: Props) {
  const [view, setView] = useState(1);
  return (
    <div className="container px-5 md:px-1 mx-auto mb-20">
      <div className="flex justify-center mb-5">
        <div className="flex gap-3">
          {headings.map((el) => (
            <p
              onClick={() => setView(el.id)}
              className={`${
                view == el.id ? "text-[#0f969c] border-b-[3px]" : ""
              } cursor-pointer pb-2 px-1 md:px-5 text-[16px] md:text-[20px] font-semibold`}
              key={el.id}
            >
              {el.name}
            </p>
          ))}
        </div>
      </div>
      {view == 1 && (
        <div className="grid grid-cols-custom-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {selectedProd?.characteristics.map((el, index) => (
            <div
              key={index}
              className="p-3 lg:p-5 rounded-[16px] bg-white sm:max-w-[380px] w-full"
            >
              <h2 className="text-xl font-bold mb-3">{el.title}</h2>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      )}
      {view == 2 && (
        <div className="grid grid-cols-custom-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {selectedProd?.features.map((el, index) => (
            <div
              key={index}
              className="p-3 lg:p-5 rounded-[16px] bg-white sm:max-w-[380px] w-full flex gap-3"
            >
              <CircleCheck color="#0f969c" size={20} className="flex-shrink-0" />
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
