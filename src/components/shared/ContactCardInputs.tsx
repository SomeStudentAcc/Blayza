import React from "react";
import MyInput from "./MyInput";
import MyBtn from "../ui/MyBtn";

export default function ContactCardInputs() {
  return (
    <div className="lg:flex-1 p-[2rem] lg:p-[4rem] ">
      <h2 className="text-3xl font-semibold mb-8">Свяжитесь с нами</h2>
      <p className="mb-8">
        Остались вопросы? Наши специалисты готовы проконсультировать вас по всем
        вопросам и помочь с выбором очистителя воздуха, подходящего именно вам.
      </p>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-4  w-full">
          <MyInput placeholder="Ваше имя" label="Ваше имя" />
          <MyInput placeholder="+998 __ ___ __ __" label="Ваш телефон" />
        </div>
        <MyInput
          placeholder="Введите ваш email"
          label="Email (необязательно)"
        />
        <div className="flex flex-col gap-3">
          <label className="block mb-2 text-[0.9rem] text-[#555] font-medium">
            Ваше сообщение (необязательно)
          </label>
          <textarea
            placeholder="Опишите ваш запрос или задайте вопрос"
            className="w-full p-4 border min-h-[150px] border-[#eee] rounded-[10px] font-sans text-base transition-all focus:border-[#0f969c] focus:ring-4 focus:ring-[#0f969c1a] focus:outline-none"
          />
        </div>
        <MyBtn text=" Отправить заявку" className="w-full" />
      </div>
    </div>
  );
}
