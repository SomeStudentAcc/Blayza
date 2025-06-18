import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import React from "react";
import ContactCardInputs from "./ContactCardInputs";

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
  {
    icon: 4,
    title: "Рабочие часы",
    text: "Пн-Пт: 9:00 - 19:00  Сб: 10:00 - 16:00",
  },
];

export default function ContactCard() {
  return (
    <div className="bg-[#0f969c1a] pb-20 px-5 md:px-1">
      <div className="bg-white rounded-[25px] shadow-[0_30px_60px_rgba(0,0,0,0.1)]  flex flex-col md:flex-row overflow-hidden container  mx-auto">
        <div className="contact-info flex flex-col gap-8 p-[2rem] lg:p-[4rem] md:max-w-[505px] w-full">
          <h2 className="text-3xl font-semibold">Свяжитесь с нами</h2>
          <p>
            Остались вопросы? Наши специалисты готовы проконсультировать вас по
            всем вопросам и помочь с выбором очистителя воздуха, подходящего
            именно вам.
          </p>

          <div className="flex flex-col gap-6">
            {info.map((el, index) => (
              <div className="flex gap-3" key={index}>
                {el.icon == 1 && (
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full  bg-[#ffffff33]">
                    <MapPin size={20} />
                  </div>
                )}
                {el.icon == 2 && (
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full  bg-[#ffffff33]">
                    <Phone size={20} />
                  </div>
                )}
                {el.icon == 3 && (
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full  bg-[#ffffff33]">
                    <Mail size={20} />
                  </div>
                )}
                {el.icon == 4 && (
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full  bg-[#ffffff33]">
                    <Clock size={20} />
                  </div>
                )}

                <div>
                  <h4 className="text-[18px] font-bold">{el.title}</h4>
                  <p>{el.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
              <Instagram size={16} />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
              <Send size={16} />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
              <Facebook size={16} />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-[#ffffff33]">
              <Youtube size={16} />
            </div>
          </div>
        </div>
        <ContactCardInputs />
      </div>
    </div>
  );
}
