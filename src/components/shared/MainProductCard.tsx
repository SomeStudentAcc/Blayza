import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import MyBtn from "../ui/MyBtn";
import Link from "next/link";

interface Prod {
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
}

interface Props {
  prod: Prod;
}

export default function MainProductCard({ prod }: Props) {
  return (
    <Link
      href={`catalog/${prod.url}`}
      className="rounded-[25px] overflow-hidden bg-white flex flex-col group cursor-pointer"
    >
      <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] w-full h-[250px] flex justify-center items-center">
        <Image
          className="max-h-[80%] object-contain group-hover:scale-[1.1] transition-all ease-in-out duration-450"
          src={prod.img}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-semibold mb-4">{prod.name}</h3>
        <p className="mb-6">{prod.description}</p>
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
      </div>
      <div className="px-8 pb-8 flex flex-col gap-3">
        <div>
          <h2 className="text-[#0f969c] font-bold text-[25px] text-center mb-2">
            {prod.price} сум
          </h2>
          <MyBtn text="Подробнее" className="w-full" />
        </div>
      </div>
    </Link>
  );
}
