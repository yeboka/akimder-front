"use client"

import Container from "@/app/_components/container";
import Search from "@/app/_components/search";
import RegionCards from "@/app/_components/regionCards";
import NewsCards from "@/app/_components/newsCards";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Banner from "@/app/_components/banners/banner";

export default function Home() {

  const [locale, setLocale] = useState<string>("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "ru")
    }
  }, [])

  return (
    <>
      <Container className={'bg-secondary overflow-hidden relative'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={'/gerb.svg'} width={300} alt={''}
             className={'absolute -right-[150px] -top-[100px]'}/>
        <div className={'w-full max-h-[204px]  h-64 relative'}>
          <div className={"w-full relative  max-h-[204px] h-64"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'https://www.gov.kz/static/media/ornament.8ce1d830.svg'} alt={''}
                 className={'absolute left-0 top-0 '}/>
          </div>
          <div className={'w-full absolute top-1 flex justify-center sm:my-10 md:my-14 lg:my-20 xl:my-24 '}>
            <Search/>
          </div>
        </div>
      </Container>
      <Container>
        <>
          <div className={'w-full flex flex-col gap-y-8 my-10'}>
            <h1 className={'text-[42px] font-semibold'}>
              {
                <span>{locale === "ru" ? "Акиматы" : locale === "en" ? "Akimats" : "Әкімдіктер"}</span>
              }
            </h1>
            <div className={'flex  flex-col-reverse  items-start md:flex-row gap-5 justify-between'}>
              <div>
                <RegionCards />
                <h1 className={'text-[42px] font-semibold mb-10 mt-10'}>
                  {locale === "ru" ? "Новости страны" : locale === "en" ? "Country News" : "Ел жаңалықтары"}
                </h1>
                <NewsCards/>
              </div>
              <div className={'flex text-[12px] md:flex-col w-full md:w-auto justify-center gap-2 items-start'}>
                <div className="flex flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
                  <div
                    className={"w-[200px] h-[250px] bg-cover bg-start"}
                    style={{
                      backgroundImage: 'url("/Kassym-Jomart_Tokayev.jpg")'
                    }}
                  />
                  <Link href={"https://www.akorda.kz/ru/president/president"}>
                    {
                      locale === "ru" ?
                        <>Президент Республики Казахстан<br/> <strong>Токаев Касым-Жомарт Кемелевич</strong></>
                        :
                        locale === "en" ?
                        <>President of The<br/> Republic of Kazakhstan<br/> <strong>Kassym-Jomart Tokayev</strong></>
                          :
                        <>Қазақстан Республикасының Президенті<br/> <strong>Қасым-Жомарт Кемелұлы Тоқаев</strong></>
                    }
                  </Link>
                </div>
                <div className="flex  flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
                  <div
                    className={"w-[200px] h-[250px] bg-cover bg-center"}
                    style={{
                      backgroundImage: 'url("/bektenov.jpg")'
                    }}
                  />
                  <Link href={"https://primeminister.kz/ru/government/composition/bektenov"} className={'text-[12px]'}>
                    {
                      locale === "ru" ?
                        <>Премьер-министр <br/> Республики Казахстан <br/> <strong>Бектенов Олжас Абаевич</strong> </>
                        :
                        locale === "en" ?
                          <>Prime Minister of The<br/> Republic of Kazakhstan<br/> <strong>Olzhas Bektenov</strong></>
                          :
                        <>Қазақстан Республикасының <br/> Премьер-Министрі <br/> <strong>Олжас Абайұлы
                          Бектенов</strong></>
                    }
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*<div className={'w-full flex my-10 gap-4'}>*/}
          {/*  <Link href={"https://open.egov.kz/"} target={"_blank"} className={'flex-1  text-[14px] gap-2'}>*/}
          {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
          {/*    <img src="https://www.gov.kz/uploads/2019/6/19/a1297e9e09f22c412ddfe056d3d4ed9c_original.19895.svg"*/}
          {/*         alt="d" className={"h-[50px]"}/>*/}
          {/*    <p className={"mt-3"}>НҚА әзірлеу мен бюджетті жасауда қатысу, ашық деректерді алу, мемлекеттік органдарға*/}
          {/*      өтініш жіберу</p>*/}
          {/*  </Link>*/}
          {/*  <Link href={"https://egov.kz/cms/kk"} target={"_blank"} className={'flex-1 text-[14px] gap-2'}>*/}
          {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
          {/*    <img src="https://www.gov.kz/uploads/2020/1/9/602c5a9aaa19882413e630395f7ceb31_original.6761.png" alt="d"*/}
          {/*         className={"h-[50px]"}/>*/}
          {/*    <p className={"mt-3"}>eGov.kz электрондық үкімет порталы – мемлекеттік қызметтерді онлайн түрде алу</p>*/}
          {/*  </Link>*/}
          {/*  <Link href={"https://eotinish.kz/kk"} target={"_blank"} className={'flex-1  text-[14px] gap-2'}>*/}
          {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
          {/*    <img src="https://www.gov.kz/uploads/2023/7/31/557ce713e82d4763d5bd4ae96b4e0cab_original.4211.png" alt="d"*/}
          {/*         className={"h-[50px]"}/>*/}
          {/*    <p className={"mt-3"}>e-Otinish – Мемлекеттік органдарға өтініш беру</p>*/}
          {/*  </Link>*/}
          {/*  <Link href={"https://sb.egov.kz/smart-bridge/home"} target={"_blank"}*/}
          {/*        className={'flex-1 text-[14px] gap-2'}>*/}
          {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
          {/*    <img src="https://www.gov.kz/uploads/2019/6/19/9db49dbece24b92b6d6dd2a7d9c0b5eb_original.12820.svg"*/}
          {/*         alt="d" className={"h-[50px]"}/>*/}
          {/*    <p className={"mt-3"}>Бизнеске мемлекеттік ақпараттық жүйелермен интеграциялануға көмектесетін*/}
          {/*      Платформа</p>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <Banner/>
        </>
      </Container>
    </>
  );
}
