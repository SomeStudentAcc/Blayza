import { Handshake, Heart, Medal, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import MyBtn from "../ui/MyBtn";

export default function WhoAreWe() {
  return (
    <div className=" pb-20">
      <div className=" container px-5 md:px-1 mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-[#0f969c] text-lg font-semibold tracking-wide uppercase text-center">
            Кто мы
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-bold md:tracking-wide text-center">
            О компании BLAYZA
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-[5rem]">
          <div className="max-w-[500px] w-full h-full">
            <Image
              className="rounded-[25px]"
              src={"/newofis.jpg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#0f969c] text-lg text-center md:text-start font-semibold tracking-wide uppercase">
                Наша история
              </h4>
              <h2 className="text-[30px] md:text-[40px] font-bold md:tracking-wide text-center md:text-start">
                Чистый воздух для каждой семьи в Узбекистане
              </h2>
            </div>
            <p className="mb-6 text-center md:text-start">
              Компания BLAYZA является официальным дистрибьютором продукции
              Zepter в Узбекистане, мы сотрудничаем напрямую с производителем,
              что позволяет нам гарантировать оригинальность и высокое качество
              всей продукции.
            </p>
            <p className="mb-6 text-center md:text-start">
              Наша миссия — улучшить качество вашей жизни. Мы предлагаем
              продукцию, которая помогает создать здоровую и гармоничную
              атмосферу — как для вас лично, так и в вашем доме.
            </p>
            <div className="grid justify-center md:justify-start sm:grid-cols-2 gap-5">
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full  bg-[#0f969c1a]">
                  <Medal color="#31708e" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Высокое качество</h4>
                  <p className="text-[#555] text-[14px]">
                    Только оригинальная продукция от Zepter
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full  bg-[#0f969c1a]">
                  <Users color="#31708e" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Профессиональный подход
                  </h4>
                  <p className="text-[#555] text-[14px]">
                    Квалифицированные консультации
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full  bg-[#0f969c1a]">
                  <Handshake color="#31708e" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Надежный партнер</h4>
                  <p className="text-[#555] text-[14px]">
                    Гарантийное обслуживание
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full  bg-[#0f969c1a]">
                  <Heart color="#31708e" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Забота о клиентах</h4>
                  <p className="text-[#555] text-[14px]">
                    Индивидуальный подход к каждому
                  </p>
                </div>
              </div>
            </div>

            <MyBtn text="Связаться с нами" className="md:max-w-[260px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
