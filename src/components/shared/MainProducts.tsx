import React from "react";
import MainProductCard from "./MainProductCard";
import { prods } from "@/constants";

export default function MainProducts() {
  return (
    <div>
      <div className=" container px-5 md:px-1 mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-[#0f969c] text-lg font-semibold tracking-wide uppercase text-center">
            Каталог продукции
          </h4>
          <h2 className="text-[30px] md;text-[40px] font-bold md:tracking-wide text-center">
            Лучшие очистители воздуха Zepter
          </h2>
          <p className="w-full max-w-[700px] text-[#555] text-lg text-center">
            Выберите идеальное решение для вашего дома или офиса из линейки
            премиальных очистителей воздуха
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {prods.map((el) => (
            <MainProductCard key={el.id} prod={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
