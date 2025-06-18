import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const products = [
  { name: "Therapy Air Smart" },
  { name: "Therapy Air iOn" },
  { name: "My Ion Pro" },
  { name: "My Ion" },
  { name: "Фильтры и аксессуары" },
];

const info = [
  {
    icon: 1,
    title: "Адрес",
    text: "г. Ташкент, Мирзо ул, улица Оккургон дом 43а",
  },
  {
    icon: 2,
    title: "Телефон",
    text: "+998 90 997 77 90",
  },
  {
    icon: 3,
    title: "Email",
    text: "info@blayza.uz",
  },
];

export default function Footer() {
  return (
    <div className="bg-[#2d3142] text-white">
      <div className=" container px-5 md:px-1 mx-auto pt-20 pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between mb-14">
          <div className="flex flex-col gap-8">
            <h2 className="text-[32px] font-bold">BLAYZA</h2>
            <p className="text-[#FFFFFF80] max-w-[422px] w-full">
              Заботимся о вашем здоровье и комфорте каждый день. Передовые
              товары для качественной жизни — теперь в Узбекистане.
            </p>
            <div className="flex gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
                <Instagram color="white" size={16} />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
                <Send color="white" size={16} />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
                <Facebook color="white" size={16} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[20px] font-semibold mb-6">Каталог</h2>
            <div className="flex flex-col gap-4">
              {products.map((el, index) => (
                <div key={index}>
                  <div>
                    <p className="text-[#FFFFFF80] text-[18px] hover:text-[#0f969c] cursor-pointer">
                      {el.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] font-semibold mb-6">Контакты</h2>
            <div className="flex flex-col gap-4">
              {info.map((el, index) => (
                <div className="flex  gap-3" key={index}>
                  {el.icon == 1 && <MapPin color="#0f969c" size={20} />}
                  {el.icon == 2 && <Phone color="#0f969c" size={20} />}
                  {el.icon == 3 && <Mail color="#0f969c" size={20} />}

                  <div>
                    <p className="text-[#FFFFFF80] text-[18px] max-w-[180px] w-full">
                      {el.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-[#FFFFFF80] text-[#FFFFFF80] mb-6" />
          <p className="text-center text-[#FFFFFF80]">
            © 2025 BLAYZA. Все права защищены. Официальный дистрибьютор Zepter в
            Узбекистане.
          </p>
        </div>
      </div>
    </div>
  );
}
