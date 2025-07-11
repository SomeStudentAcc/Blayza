"use client";
import React from "react";
import Link from "next/link";
const cats = [
  {
    id: 1,
    name: "Очистители воздуха",
    url: "/catalog",
  },
  {
    id: 2,
    name: "Hyper optics",
    url: "/catalog/glasses",
  },
];

export default function CategoryBtns() {
  return (
    <div className="mb-10">
      <div className="py-5"></div>
      <h2 className="text-[28px] md:text-[35px] font-bold mb-5">Выберите категорию</h2>
      <div className="flex flex-wrap gap-3 md:gap-5">
        {cats.map((el) => (
          <Link
            href={el.url}
            key={el.id}
            className="px-2 md:px-5 py-3 bg-gradient-to-br from-[#0f969c] to-[#31708e] text-white font-semibold text-base tracking-[0.5px] no-underline rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-[0_10px_25px_rgba(15,150,156,0.3)]  overflow-hidden  text-center"
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
