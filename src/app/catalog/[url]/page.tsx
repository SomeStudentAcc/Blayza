import ProductCharacteristics from "@/components/shared/ProductCharacteristics";
import MyBtn from "@/components/ui/MyBtn";
import { prods } from "@/constants";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

// If you're using Next.js app router, this is a server component by default
export default function Product({ params }: { params: { url: string } }) {
  const { url } = params;
  const selectedProd = prods.find((el) => el.url === url);

  if (!selectedProd) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      <div className="container px-5 md:px-1 mx-auto flex flex-col md:flex-row md:justify-between gap-5 py-10 md:py-35 pb-20">
        <div>
          <Image
            src={selectedProd.img}
            width={400}
            height={400}
            className="max-h-[400px] w-full prod-card"
            alt=""
          />
        </div>
        <div className="max-w-[700px] w-full flex flex-col gap-6">
          <h1 className="text-[48px] font-bold">{selectedProd.name}</h1>
          <p className="text-[#555] text-lg">
            Шестиступенчатая система фильтрации с генератором отрицательных
            ионов, контролирует уровень пыли, температуру и влажность, аллергены
            устраняя загрязняющие вещества. Уничтожает токсичные летучие
            органические соединения и переносимые по воздуху вирусы Чистит до 28
            кв.метров.
          </p>
          <h2 className="text-[#0f969c] font-bold text-[32px]">
            {selectedProd.price} сум
          </h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <MyBtn text="Оставить заявку" className="sm:max-w-[220px] w-full" />
            <button
              className={
                "flex justify-center  gap-3 px-10 py-4 bg-white text-[#0f969c] font-semibold text-base tracking-[0.5px] no-underline rounded-full cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden z-[1] text-center"
              }
            >
              <div className="flex gap-3">
                <Download /> <p>Скачать инструкцию</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ProductCharacteristics selectedProd={selectedProd} />
    </div>
  );
}
