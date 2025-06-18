"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavMobile from "./NavMobile";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMobnav, setMobNav] = useState(false);
  return (
    <header className={`top-0 z-30 w-full sticky bg-white`}>
      <div className="container px-5 md:px-1 mx-auto py-5 flex justify-between items-center">
        <div className="">
          <Link className="font-extrabold text-[2rem] text-[#0f969c]" href="#">
            BLAYZA
          </Link>
        </div>
        <ul className="hidden md:flex gap-3 lg:gap-8 text-lg font-semibold">
          {[
            { href: "#home", label: "Главная" },
            { href: "#about", label: "О нас" },
            { href: "#products", label: "Продукция" },
            { href: "#advantages", label: "Преимущества" },
            { href: "#technology", label: "Технологии" },
            { href: "#contacts", label: "Контакты" },
          ].map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="text-[#2d3142] text-[16px] lg:text-[16px] hover:text-[#0f969c] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0f969c] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="h-full w-[1px] bg-gray-500"></div>
          <div className="flex gap-1 lg:gap-2 ">
            <p className="text-[#2d3142]">RU</p>
            <p className="text-[#2d3142]">UZ</p>
            <p className="text-[#2d3142]">EN</p>
          </div>
        </ul>
        <Menu onClick={() => setMobNav(true)} className="md:hidden" size={20} />
      </div>
      <NavMobile isMobNav={isMobnav} setMobNav={setMobNav} />
    </header>
  );
}
