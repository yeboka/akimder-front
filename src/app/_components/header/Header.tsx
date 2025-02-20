"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import PersonIcon from './assets/personIcon.svg'
import ArrowIcon from './assets/lyra-icon-Arrow.svg'
import Link from "next/link";
import Container from "@/app/_components/container";
import Modal from "@/app/_components/header/components/Modal";
import axiosInstance from "@/service";
import { usePathname } from "next/navigation";
import LanguageSelector from "@/app/_components/header/components/languageSelector";

export interface User {
  firstName: string;
  lastName?: string;
  email?: string;
  // другие поля, которые могут быть в ответе от API
}


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState(true);
  const pathName = usePathname()
  const [locale, setLocale] = useState<string>("ru")
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "")
    }
  }, [])
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/protected/profile'); // Protected route
        setUser(response.data.user); // Assuming the backend sends the user data
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      } finally {
        // setLoading(false);
      }
    };

    fetchUserProfile();
  }, [pathName]);


  return (
    <header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Container className={'bg-primary'}>
        <nav className={'w-full flex items-center justify-between  py-[11px]'}>
          <section className="flex items-center gap-4">
            <Link className={'cursor-pointer text-[14px] font-bold text-white'} href={'/'}>
              <Image src={"/assets/akimpressLogo.png"} alt={"Akimpress logo, home button. Акимпресс лого, кнопка главной страницы"} width={70} height={50}/>
            </Link>
            <button className="flex gap items-center text-white" onClick={() => setIsModalOpen(true)}>
              {locale === "ru" ? "Государственные органы" : locale === "en" ? "Government agencies" : "Мемлекеттік органдар"}
              <Image src={ArrowIcon} alt={''} width={29} height={29}/>
            </button>
          </section>
          <section className={'flex gap-[20px]'}>
            <LanguageSelector />
            <Link href={"/login"} className={'text-white flex items-center px-[10px] py-[8px] gap-[10px]'}>
              {
                user ? <Link href={"/admin"} className={"text-[14px] font-normal text-white"}>
                  {user.firstName}
                </Link> :
                  <>
                    <Image src={PersonIcon} width={24} height={24} alt={''}/>
                    {locale === "ru" ? "Вход" : locale === "en" ? "Sign in" : "Кіру"}
                  </>
              }
            </Link>
          </section>
        </nav>
      </Container>
    </header>

  );
};

export default Header;