import CategoryBtns from "@/components/shared/CategoryBtns";
import ProductCard from "@/components/shared/ProductCard";
import { prods } from "@/constants";
import React from "react";

export default function Catalog() {
  return (
    <div className=" container px-5 md:px-1 mx-auto">
      <CategoryBtns />
      <div>
        <h2 className=" text-[28px] md:text-[35px] font-bold mb-5 text-center">
          Очистители воздуха
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {prods.map((el) => (
            <ProductCard key={el.id} prod={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
