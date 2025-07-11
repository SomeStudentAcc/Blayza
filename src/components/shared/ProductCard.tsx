import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyBtn from "../ui/MyBtn";
import { Check } from "lucide-react";

interface Prod {
  id: number;
  name: string;
  url: string;
  img: string;
  price: string;
  category: string;
  description?: string;
  type?: string;
  sex?: string;
  capabilities?: {
    id: number;
    text: string;
  }[];
  characteristics?: {
    description: string;
    title: string;
  }[];
  features?: {
    description: string;
    title: string;
  }[];
}

interface Props {
  prod: Prod;
}

export default function ProductCard({ prod }: Props) {
  return (
    <Link
      href={`/catalog/${prod.category}/${prod.url}`}
      className="rounded-[25px] overflow-hidden bg-white flex flex-col group cursor-pointer h-full"
    >
      <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] w-full h-[250px] flex justify-center items-center">
        <Image
          className="h-[220px] w-auto object-contain group-hover:scale-110 transition-all ease-in-out duration-300"
          src={prod.img}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="p-8 flex-grow  h-full">
        <h3 className="text-2xl font-semibold mb-1 min-h-[70px]">
          {prod.name}
        </h3>
        {prod.description && (
          <div className="mb-3">
            {prod.description.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
        {prod.capabilities && (
          <div className="flex flex-col gap-2">
            {prod.capabilities.map((el) => (
              <div key={el.id} className="flex gap-2 items-center">
                <div className="rounded-full h-[15px] w-[15px] bg-[#0f969c] flex justify-center items-center">
                  <Check size={12} color="white" />
                </div>
                <span>{el.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="px-8 pb-8 flex flex-col justify-end gap-3 h-full">
        <h2 className="text-[#0f969c] font-bold text-[25px] text-center mb-2">
          {prod.price} сум
        </h2>
        <MyBtn text="Подробнее" className="w-full" />
      </div>
    </Link>
  );
}
