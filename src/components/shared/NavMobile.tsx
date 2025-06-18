import { X } from "lucide-react";

interface Props {
  isMobNav: boolean;
  setMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigation = [
  { title: "Главная" },
  { title: "О нас" },
  { title: "Продукция" },
  { title: "Преимущества" },
  { title: "Технологии" },
  { title: "Контакты" },
];

export default function NavMobile({ isMobNav, setMobNav }: Props) {
  return (
    <>
      {/* Overlay */}
      {isMobNav && (
        <div
          className="md:hidden fixed inset-0 bg-white bg-opacity-50 z-40"
          onClick={() => setMobNav(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-full  bg-white z-50 transform transition-transform duration-300 ${
          isMobNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Меню</h2>
            <button
              className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-black group cursor-pointer transition duration-200 "
              onClick={() => setMobNav(false)}
            >
              <X
                size={24}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          <ul>
            {navigation.map((item, index) => (
              <li
                key={index}
                className="flex justify-center text-xl text-black items-center border-b border-white/10 py-4 cursor-pointer hover:text-gray-300"
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-1 lg:gap-2 justify-center text-black text-xl">
            <p className="">RU</p>
            <p className="">UZ</p>
            <p className="">EN</p>
          </div>
        </div>
      </div>
    </>
  );
}
