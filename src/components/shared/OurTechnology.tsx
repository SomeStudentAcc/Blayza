import React from "react";
import TechnologyCard from "./TechnologyCard";

const tech = [
  {
    title: "Ионизация",
    text: "Технология ионизации воздуха насыщает пространство отрицательными ионами, которые притягивают и нейтрализуют загрязняющие частицы, бактерии и вирусы.",
    icon: 1,
    model: "Все модели",
  },
  {
    title: "HEPA-фильтрация",
    text: "Высокоэффективные HEPA-фильтры улавливают до 99,97% частиц размером от 0,3 микрона, включая пыльцу, пыль, споры плесени и другие аллергены.",
    icon: 2,
    model: "Therapy Air серия",
  },
  {
    title: "Фотокаталитическое окисление",
    text: "Технология фотокаталитического окисления использует ультрафиолетовый свет и катализатор для разложения вредных веществ и устранения неприятных запахов.",
    icon: 3,
    model: "Therapy Air Smart, iOn",
  },
  {
    title: "Умные сенсоры",
    text: "Встроенные датчики качества воздуха постоянно мониторят состояние атмосферы в помещении и автоматически регулируют работу очистителя.",
    icon: 4,
    model: "Therapy Air Smart",
  },
];

export default function OurTechnology() {
  return (
    <div >
      <div className=" container px-5 md:px-1 mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-[#0f969c] text-lg font-semibold tracking-wide uppercase text-center">
            Наши технологии
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-bold md:tracking-wide text-center">
            Инновации в очистке воздуха
          </h2>
          <p className="w-full max-w-[700px] text-[#555] text-lg text-center">
            Узнайте, как современные технологии Zepter помогают сделать воздух в
            вашем доме чистым и безопасным
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {tech.map((el, index) => (
            <TechnologyCard
              key={index}
              text={el.text}
              title={el.title}
              icon={el.icon}
              model={el.model}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
