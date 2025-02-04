"use client"
import React, { useEffect, useState } from 'react';
import { PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

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
            <p className={"text-[18px] "}>{locale === "ru" ? "Государственные символы" : locale === "en" ? "State symbols" : "Мемлекеттік рәміздер"}</p>
            <a href="https://akorda.kz/kz/state_symbols/about_state_symbols" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "О государственных символах" : locale === "en" ? "About state symbols" : "Мемлекеттік рәміздер туралы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_flag/" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Флаг Республики Казахстан" : locale === "en" ? "The National Flag of the Republic of Kazakhstan" :  "Қазақстан Республикасының Мемлекеттiк Туы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_emblem" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Герб Республики Казахстан" : locale === "en" ? "The National Coat of Arms of the Republic of Kazakhstan" : "Қазақстан Республикасының Мемлекеттiк Елтаңбасы"}
            </a>
            <a href="https://akorda.kz/kz/state_symbols/kazakhstan_anthem" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale == "ru" ? "Государственный Гимн Республики Казахстан" : locale === "en" ? "The National Anthem of the Republic of Kazakhstan" : "Қазақстан Республикасының Мемлекеттік Гимні"}
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className={"text-[18px] "}>{locale === "ru" ? "Официальные документы" : locale === "en" ? "Official documents" : "Ресми құжаттар"}</p>
            <a href="https://akorda.kz/kz/official_documents/constitution" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Конституция" : locale === "en" ? "The Constitution" :  "Конституция"}
            </a>
            <a href="https://akorda.kz/kz/official_documents/constitutional_laws" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Конституционные законы" : locale === "en" ? "Constitutional laws" : "Конституциялық заңдар"}
            </a>
            <a href="https://akorda.kz/kz/addresses" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === 'ru' ? "Послания" : locale === "en" ? "Messages" : "Жолдаулар"}
            </a>
            <a href="https://akorda.kz/kz/official_documents/strategies_and_programs" className="text-[16px] opacity-[0.9] hover:underline font-light">
              {locale === "ru" ? "Стратегии и программы" : locale === "en" ? "Strategies and programs" : "Стратегиялар мен бағдарламалар"}
            </a>
            <a href="https://akorda.kz/kz/executive_office/ethics_commissioner" className="text-[16px] opacity-[0.9] hover:underline font-light mt-5">
              {locale === "ru" ? "Уполномоченный по этике" : locale === "en" ? "Ethics Commissioner" : "Әдеп жөніндегі уәкіл"}
            </a>
            <a href="https://gostest.kz/" className="text-[16px] opacity-[0.9] hover:underline font-light mt-5">
            {locale === "ru" ? "Государственный тест" : locale === "en" ? "The State test " : "Мемлекеттік тест"}
          </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className={'flex gap-3'}>
              <PhoneOutlined /> Activ: +7-775-420-28-08
            </div>
            <div className={'flex gap-3'}>
              <PhoneOutlined /> Beeline: +7-776-420-28-08
            </div>
            <div className={'flex gap-3 items-center'}>
              <Link href={"https://www.facebook.com/share/14QLJgMgyF/?mibextid=wwXIfr"} target={"_blank"}>
                <Image src={'/assets/icons8-facebook-64.png'} alt={''} width={25} height={25}/>
              </Link>
              <Link href={"https://www.instagram.com/akimpress_kz?igsh=MTd2bjZ4Mm9wN3J3"} target={"_blank"}>
                <Image src={'/assets/lyra-icon-InstagramLogo.svg'} alt={''} width={20} height={20}/>
              </Link>
              <Link href={"https://t.me/akimpress_kz"} target={"_blank"}>
                <Image src={'/assets/lyra-icon-TelegramLogo.svg'} alt={''} width={20} height={20} />
              </Link>
              <Link href={"https://www.tiktok.com/@akimpress.kz?_t=8sQJoT2d3uX&_r=1"} target={"_blank"}>
                <Image src={'/assets/icons8-tiktok.svg'} alt={''} width={25} height={25}/>
              </Link>
              <Link href={"#"} target={"_blank"}>
                <Image src={'/assets/icons8-youtube.svg'} alt={''} width={25} height={25}/>
              </Link>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
