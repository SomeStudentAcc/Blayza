import ProductCharacteristics from "@/components/shared/ProductCharacteristics";
import MyBtn from "@/components/ui/MyBtn";
import { prods } from "@/constants";
import { glasses } from "@/constants/glasses";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

export const revalidate = 600;
export const dynamicParams = true;

export default async function Product({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;
  const combined = [...glasses, ...prods];
  const selectedProd = combined.find((el) => el.url === url);
  if (!selectedProd) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      <div className="container px-5 md:px-1 mx-auto flex flex-col md:flex-row md:justify-between gap-5 py-10 md:py-35 pb-20">
        <div className="aspect-square max-w-[300px] sm:max-w-[400px] w-full flex items-center justify-center">
          <Image
            src={selectedProd.img}
            width={400}
            height={400}
            className="w-full h-full object-contain prod-card"
            alt={selectedProd.name}
          />
        </div>
        <div className="max-w-[700px] w-full flex flex-col gap-6">
          <h1 className="text-[48px] font-bold">{selectedProd.name}</h1>
          {selectedProd.category == "air-purifiers" && (
            <p className="text-[#555] text-lg">
              Шестиступенчатая система фильтрации с генератором отрицательных
              ионов, контролирует уровень пыли, температуру и влажность,
              аллергены устраняя загрязняющие вещества. Уничтожает токсичные
              летучие органические соединения и переносимые по воздуху вирусы
              Чистит до 28 кв.метров.
            </p>
          )}
          {selectedProd.category == "glasses" && (
            <p>
              Линзы Zepter Hyperlight Eyewear — это инновационная технология на
              основе фуллерена C60, молекулы, получившей Нобелевскую премию.
              Линзы не просто блокируют вредный синий и ультрафиолетовый свет, а
              преобразуют его в мягкий, биологически полезный гиперсвет, близкий
              к солнечному спектру. Многослойное покрытие (8 слоёв) включает
              антибликовый слой Ioncoat K+, гидрофобное, олеофобное,
              антистатическое и твёрдое покрытия, а также активный слой с
              фуллереном. Это обеспечивает высокую чёткость изображения и
              комфорт при длительном использовании. Клинически доказаны
              положительные эффекты: снижение зрительного напряжения, улучшение
              сна, концентрации и общего самочувствия. Линзы изготовлены из
              лёгкого и прочного полимера CR-39, сопоставимого по прозрачности
              со стеклом.
            </p>
          )}

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
      {"characteristics" in selectedProd &&
        selectedProd.characteristics.length > 0 && (
          <ProductCharacteristics selectedProd={selectedProd} />
        )}
    </div>
  );
}
