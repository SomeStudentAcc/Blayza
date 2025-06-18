import React from "react";
import MainProductCard from "./MainProductCard";

const prods = [
  {
    id: 1,
    name: "Therapy Air Smart",
    img: "/prod1.png",
    description:
      "Уникальная система очистки воздуха, удаляющая 99,9% вредных частиц и патогенов. Система содержит трехступенчатый фильтр на 360°, генератор отрицательных ионов и УФ-свет.",
    capabilities: [
      {
        id: 1,
        text: "3-ступенчатая фильтрация",
      },
      {
        id: 2,
        text: "Площадь помещения до 71 м²",
      },
      {
        id: 3,
        text: "Сенсорная панель",
      },
    ],
    price: "15 000 000",
  },
  {
    id: 2,
    name: "Therapy Air iOn",
    img: "/prod2.png",
    description:
      "Инновационный очиститель воздуха с 5-ступенчатой системой фильтрации и ионизацией воздуха.",
    capabilities: [
      {
        id: 1,
        text: "6-ступенчатая фильтрация",
      },
      {
        id: 2,
        text: "Площадь помещения до 28 м²",
      },
      {
        id: 3,
        text: "Интеллектуальный режим работы",
      },
    ],
    price: "15 000 000",
  },
  {
    id: 3,
    name: "My Ion Pro",
    img: "/prod3.png",

    description:
      "Компактный очиститель воздуха с интуитивным управлением и функцией ароматерапии.",
    capabilities: [
      {
        id: 1,
        text: "До 36 часов автономной работы",
      },
      {
        id: 2,
        text: "Ионизирует воздух в радиусе 50см",
      },
      {
        id: 3,
        text: "Выдержанный дизайн — сочетается с любым стилем.",
      },
    ],
    price: "2 300 000",
  },
  {
    id: 4,
    name: "My Ion",
        img: "/prod4.png",

    description:
      "Базовая модель с надежной системой очистки и низким уровнем шума для спокойной работы.",
    capabilities: [
      {
        id: 1,
        text: "До 10 часов автономной рабыты",
      },
      {
        id: 2,
        text: "Ионизирует воздух в радиусе 30см",
      },
      {
        id: 3,
        text: "Вес: 25 гр",
      },
    ],
    price: "1 900 000",
  },
];

export default function MainProducts() {
  return (
    <div className="bg-[#0f969c1a]">
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
