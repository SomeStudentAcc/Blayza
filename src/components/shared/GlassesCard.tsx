import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyBtn from "../ui/MyBtn";

interface Prod {
  id: number;
  name: string;
  url: string;
  img: string;
  price: string;
  type: string;
}

interface Props {
  prod: Prod;
}

export default function GlassesCard({ prod }: Props) {
  return (
    <Link
      href={`#`}
      className="rounded-[25px] overflow-hidden bg-white flex flex-col group cursor-pointer h-full"
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
      <div className="p-8 flex-grow h-full">
        <h3 className="text-2xl font-semibold mb-4 min-h-[65px]">{prod.name}</h3>
        {/*         <p className="mb-6">{prod.description}</p>
         */}{" "}
      </div>
      <div className="px-8 pb-8 flex flex-col gap-3 h-full">
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
