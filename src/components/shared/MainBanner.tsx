import React from "react";
import MyBtn from "../ui/MyBtn";
import Image from "next/image";
import { Shield, Wind } from "lucide-react";

export default function MainBanner() {
  return (
    <div className="">
      <div className=" container px-5 md:px-1 mx-auto flex flex-col md:flex-row md:justify-between gap-5 py-10 md:py-35 pb-20">
        <div className="w-full max-w-[667px]">
          <div className="flex items-center md:items-start flex-col gap-6 mb-12">
            <h4 className="text-[#31708e] w-full max-w-[445px] text-center  text-lg font-medium bg-[#0F969C1A] rounded-[30px] py-2 px-6 uppercase tracking-wide">
              Официальный дистрибьютор Zepter
            </h4>
            <h1 className="text-[2.2rem] text-center md:text-start md:text-[3.2rem] md:leading-[60px] ">
              <strong className="font-bold text-[#0f969c]">BLAYZA</strong> —
              Улучшай качество жизни вместе с нами.
            </h1>
            <p className="text-[#555] text-[19px] text-center md:text-start ">
              Заботимся о вашем здоровье и комфорте каждый день. Передовые
              товары для качественной жизни — теперь в Узбекистане.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <MyBtn
              className="w-full max-w-[277px]"
              text="Подробнее о продуктях"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            className="img-card "
            src={"/model2.png"}
            height={500}
            width={500}
            alt=""
          />
          <div className="flex absolute top-[20%] right-0 gap-4 items-center bg-[#FFFFFFE6] rounded-[12px] p-2 w-max shield">
            <div className="w-max h-max bg-gradient-to-br p-1 from-[#0f969c] to-[#31708e] rounded-[6px] flex justify-center items-center">
              <Shield color="white" size={25} />
            </div>

            <div className="w-full max-w-[90px]">
              <h4 className="text-sm font-semibold">Чистота 99.9%</h4>
              <p className="text-[12px] text-[#555]">Удаление аллергенов</p>
            </div>
          </div>

          <div className="flex absolute bottom-[20%] left-0 gap-4 items-center bg-[#FFFFFFE6] rounded-[12px] p-2 w-max wind">
            <div className="w-max h-max bg-gradient-to-br p-1 from-[#0f969c] to-[#31708e] rounded-[6px] flex justify-center items-center">
              <Wind color="white" size={25} />
            </div>

            <div className="w-full max-w-[90px]">
              <h4 className="text-sm font-semibold">Свежесть</h4>
              <p className="text-[12px] text-[#555]">Ионизация воздуха</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
