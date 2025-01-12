"use client"

import React, {useEffect, useState} from "react";
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
                    <Image src={'/gerb.svg'}
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
                                <RegionCards />
                                <h2 className={'text-[42px] font-semibold mb-10 mt-10'}>
                                    {locale === "ru" ? "Новости страны" : locale === "en" ? "Country News" : "Ел жаңалықтары"}
                                </h2>
                                <NewsCards/>
                            </section>
                            <aside className={'flex text-[12px] md:flex-col w-full md:w-auto justify-center gap-2 items-start'}>
                                <section className="flex flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
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
                                </section>
                                <section className="flex  flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5">
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
                                </section>
                            </aside>
                        </section>
                    </section>
                    <Banner/>
                </>
            </Container>
        </>
    );
}

export default HomePage;
