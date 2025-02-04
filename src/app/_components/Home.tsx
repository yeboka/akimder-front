"use client"

import React, { useEffect, useState } from "react";
import Container from "./container";
import Image from "next/image";
import Search from "./search";
import RegionCards from "./regionCards";
import NewsCards from "./newsCards";
import Link from "next/link";
import Banner from "./banners/banner";

function HomePage() {

  const [locale, setLocale] = useState<string>("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "ru")
    }
  }, [])

  return (
    <>
      <Container className={'bg-secondary  relative'}>
        <div className={'w-full max-h-[204px] absolute h-64 flex justify-center overflow-hidden'}>
          <div className={"w-full max-w-[1092px] relative absolute  max-h-[204px] h-64"}>
            <Image src={'https://www.gov.kz/static/media/ornament.8ce1d830.svg'}
                   alt={''}
                   width={60}
                   height={200}
                   className={'absolute left-0 top-0 '}/>
          </div>
          <Image src={' /assets/gerb.svg'}
                 width={300}
                 height={424}
                 alt={'Национальный герб казахстана'}
                 className={'absolute -right-[150px] -top-[100px]'}
          />
        </div>
        <div className={'w-full max-h-[204px] h-64 relative'}>
          <div className={'w-full absolute top-1 flex justify-center sm:my-10 md:my-14 lg:my-20 xl:my-24 '}>
            <Search/>
          </div>
        </div>
      </Container>
      <Container>
        <>
          <section className={'w-full flex flex-col gap-y-8 my-10'}>
            <h1 className={'text-[42px] font-semibold'}>
              {
                <span>{locale === "ru" ? "Акиматы" : locale === "en" ? "Akimats" : "Әкімдіктер"}</span>
              }
            </h1>
            <section className={'flex  flex-col-reverse  items-start md:flex-row gap-5 justify-between'}>
              <section>
                <RegionCards/>
                <h2 className={'text-[42px] font-semibold mb-10 mt-10'}>
                  {locale === "ru" ? "Новости страны" : locale === "en" ? "Country News" : "Ел жаңалықтары"}
                </h2>
                <NewsCards/>
              </section>
              <aside className={'flex text-[12px] md:flex-col w-full md:w-auto justify-center gap-2 items-start'}>
                <section
                  className="flex flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
                  <div
                    className={"w-[200px] h-[250px] bg-cover bg-start"}
                    style={{
                      backgroundImage: 'url("/assets/Kassym-Jomart_Tokayev.jpg")'
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
                </section>
                <section
                  className="flex  flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
                  <div
                    className={"w-[200px] h-[250px] bg-cover bg-center"}
                    style={{
                      backgroundImage: 'url("/assets/bektenov.jpg")'
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
                </section>
              </aside>
            </section>
          </section>
          <Banner/>
          <article className="my-4 px-3" id={"about_us"}>
            <h3 className="font-bold text-[42px]">{
              locale === "ru" ?
                <>О нас</>
                :
                locale === "en" ?
                  <>About us</>
                  :
                  <>Біз туралы</>
            }</h3>
            <p>
              {
                locale === "ru" ?
                  <>&emsp;Добро пожаловать на Акимпресс — ваш надежный источник актуальной информации об акиматах Казахстана. Мы освещаем последние события в регионах, публикуем оперативные новости, а также делимся важными решениями и инициативами акимов.
                      <br/>
                    &emsp;Наша цель — предоставлять достоверную и актуальную информацию о деятельности органов местного самоуправления, помогая жителям городов, районов и сел быть в курсе важных изменений. Мы рассказываем о развитии инфраструктуры, реализации социальных программ, экономических инициативах и всех аспектах, влияющих на жизнь граждан. Здесь вы найдете подробности о ключевых решениях акимов, их планах и стратегиях, а также сможете следить за изменениями в управлении регионом.
                      <br/>
                    &emsp;Акимпресс стремится к тому, чтобы каждый мог легко получить доступ к информации о своем регионе, понимать, какие меры предпринимаются для улучшения качества жизни, и быть вовлеченным в процессы развития своей области. Благодаря нашим материалам вы всегда будете в курсе актуальных событий, узнаете о значимых инициативах и сможете оценить динамику изменений в разных уголках страны.</>
                  :
                  locale === "en" ?
                    <>&emsp;Welcome to Akimpress, your reliable source of up—to-date information about akimats of Kazakhstan. We cover the latest developments in the regions, publish operational news, and share important decisions and initiatives of akims.

                        <br/>
                      &emsp;Our goal is to provide reliable and up—to-date information about the activities of local governments, helping residents of cities, districts and villages to keep abreast of important changes. We talk about the development of infrastructure, the implementation of social programs, economic initiatives and all aspects that affect the lives of citizens. Here you will find details about the key decisions of the akims, their plans and strategies, as well as be able to monitor changes in the management of the region.

                        <br/>
                      &emsp;We strive to ensure that everyone can easily access information about their region, understand what measures are being taken to improve the quality of life, and be involved in the development of their region. Thanks to our materials, you will always be aware of current events, learn about significant initiatives, and be able to assess the dynamics of change in different parts of the country.</>
                    :
                    <>&emsp;Акимпресс сайтына қош келдіңіз — Қазақстан әкімдіктері туралы өзекті ақпараттың сенімді көзі. Біз өңірлердегі соңғы оқиғаларды жариялаймыз, жедел жаңалықтар жариялаймыз, сондай-ақ әкімдердің маңызды шешімдері мен бастамаларымен бөлісеміз.
                      <br/>
                      &emsp;Біздің мақсатымыз-қалалардың, аудандардың және ауылдардың тұрғындарына маңызды өзгерістерден хабардар болуға көмектесу арқылы жергілікті өзін-өзі басқару органдарының қызметі туралы сенімді және өзекті ақпарат беру. Біз инфрақұрылымды дамыту, әлеуметтік бағдарламаларды іске асыру, экономикалық бастамалар және азаматтардың өміріне әсер ететін барлық аспектілер туралы айтып береміз. Мұнда сіз әкімдердің негізгі шешімдері, олардың жоспарлары мен стратегиялары туралы мәліметтерді таба аласыз, сондай-ақ өңірді басқарудағы өзгерістерді қадағалай аласыз.
                      <br/>
                      &emsp;Акимпресс әркімнің өз аймағы туралы ақпаратқа оңай қол жеткізуіне, өмір сүру сапасын жақсарту үшін қандай шаралар қабылданып жатқанын түсінуге және өз саласының даму процестеріне қатысуға ұмтыламыз. Біздің материалдарымыздың арқасында сіз әрқашан өзекті оқиғалардан хабардар боласыз, маңызды бастамалар туралы білесіз және елдің әр түкпіріндегі өзгерістердің динамикасын бағалай аласыз.</>
              }
            </p>
          </article>
        </>
      </Container>
    </>
  );
}

export default HomePage;
