"use client"
import React, { useEffect, useState } from 'react';
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
            <p className={"text-[18px] "}>{locale === "ru" ? "Государственные символы" : "Мемлекеттік рәміздер"}</p>
            <a href="https://akorda.kz/kz/state_symbols/about_state_symbols" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "О государственных символах" : "Мемлекеттік рәміздер туралы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_flag/" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Флаг Республики Казахстан" : "Қазақстан Республикасының Мемлекеттiк Туы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_emblem" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Герб Республики Казахстан" : "Қазақстан Республикасының Мемлекеттiк Елтаңбасы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_anthem" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Гимн Республики Казахстан" : "Қазақстан Республикасының Мемлекеттік Гимні"}
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <a href="https://akorda.kz/kz/executive_office/ethics_commissioner" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Уполномоченный по этике" : "Әдеп жөніндегі уәкіл"}
            </a>
            <p className={"text-[18px] "}>{locale === "ru" ? "Официальные документы" : "Ресми құжаттар"}</p>
            <a href="https://akorda.kz/kz/addresses" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === 'ru' ? "Послания" : "Жолдаулар"}
            </a>
            <a href="https://akorda.kz/kz/official_documents/constitution" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Конституция" : "Конституция"}
            </a>
            <a href="https://akorda.kz/kz/official_documents/strategies_and_programs" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Стратегии и программы" : "Стратегиялар мен бағдарламалар"}
            </a>
            <a href="https://akorda.kz/kz/official_documents/constitutional_laws" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Конституционные законы" : "Конституциялық заңдар"}
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
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
