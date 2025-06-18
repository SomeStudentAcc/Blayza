import React from "react";
import WhyUsCard from "./WhyUsCard";

export default function WhyUs() {
  return (
    <div className="bg-[#0f969c1a]">
      <div className=" container px-5 md:px-1 mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-[#0f969c] text-lg font-semibold tracking-wide uppercase text-center">
            Наши преимущества
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-bold md:tracking-wide text-center">
            Почему выбирают нас
          </h2>
          <p className="w-full max-w-[700px] text-[#555] text-lg text-center">
            Мы предлагаем только оригинальную продукцию Zepter с полным
            сервисным обслуживанием и гарантией качества
          </p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5 pb-20">
          <WhyUsCard
            icon={1}
            title="Оригинальная продукция"
            text="Мы являемся официальным дистрибьютором Zepter в Узбекистане и гарантируем 100% оригинальность всей продукции."
          />
          <WhyUsCard
            icon={2}
            title="Доставка по Узбекистану"
            text="Доставляем нашу продукцию в любой регион Узбекистана быстро и безопасно. Возможна экспресс-доставка в день заказа."
          />
          <WhyUsCard
            icon={3}
            title="Удобная оплата"
            text="Возможна рассрочка платежа или частичная предоплата для вашего удобства. Принимаем наличные и безналичные платежи."
          />
        </div>
      </div>
    </div>
  );
}
