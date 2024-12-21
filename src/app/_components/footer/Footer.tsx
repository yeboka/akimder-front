"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { PhoneOutlined } from "@ant-design/icons";

const Footer: React.FC = () => {
  const [locale, setLocale] = useState<string>("ru")
  useEffect(() => {
    if (typeof window === "undefined") return
    const storedLocale = window.localStorage.getItem("locale")
    setLocale(storedLocale || "")
  }, [])

  return (
    <>
      <footer className="flex justify-center bg-primary w-full pb-10 px-4">
        <div className={'max-w-[1092px] w-full flex flex-wrap justify-between items-top py-10 text-white'}>
          {/* Left Section: Logo and Social Media Icons */}
          {/* Right Section: Navigation Links */}
          <div className="flex flex-col items-start gap-2">
            <a href="https://www.gov.kz/memleket/entities/prokuror?lang=kk&ysclid=lrd6cu71p8886444077" className="text-[18px] hover:underline">
              {locale === "ru" ? "Центр избирательной комиссии" : "Сайлау комиссиясының орталығы"}
            </a>
            <a href="https://www.election.gov.kz/" className="text-[18px] hover:underline">
              {locale == "ru" ? "Главная прокуратура" : "Бас прокуратура"}
            </a>
            <a href="https://www.gov.kz/memleket/entities/anticorruption?lang=ru" className="text-[18px] hover:underline">
              Антикор
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <a href="https://sud.gov.kz/rus" className="text-[18px] hover:underline">
              {locale === "ru" ? "Верховный суд" : "Жоғарғы Сот"}
            </a>
            <a href="https://senate.parlam.kz/ru-RU/about/deputies" className="text-[18px] hover:underline">
              {locale === 'ru' ? "Депутаты Сената" : ""}
            </a>
            <a href="https://mazhilis.parlam.kz/#/kk/home" className="text-[18px] hover:underline">
              {locale === "ru" ? "Мажилис Парламента" : "Парламент Мәжілісі"}
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className={'flex gap-3'}>
              <Image src={'/lyra-icon-brand-whatsapp281.svg'} alt={"whatsApp"}  width={16} height={16}/> WhatsApp: +7-747-420-28-08
            </div>
            <div className={'flex gap-3'}>
                <PhoneOutlined /> Active: +7-775-420-28-08
            </div>
            <div className={'flex gap-3'}>
              <PhoneOutlined /> Beeline: +7-776-420-28-08
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
