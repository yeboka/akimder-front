"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Eye from "@/app/_components/newsCards/components/assets/lyra-icon-eye-open.svg";
import Container from "@/app/_components/container";
import InstagramIcon from "@/app/area/_assets/lyra-icon-InstagramLogo.svg";
import TelegramIcon from "@/app/area/_assets/lyra-icon-TelegramLogo.svg";
import WhatsappIcon from "@/app/area/_assets/lyra-icon-brand-whatsapp281.svg";
import Link from "next/link";
import axiosInstance from "@/service";
import {useParams} from "next/navigation";
import {format} from "date-fns";
import {kk, ru, enUS} from "date-fns/locale";

const Page = () => {

    const [newsData, setNewsData] = useState();
    const [news, setNews] = useState();
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const [locale, setLocale] = useState("ru")
    useEffect(() => {
        if (typeof window !== "undefined") {
            setLocale(window.localStorage.getItem("locale") || "ru")
        }
    }, [])

    useEffect(() => {
        setLoading(true)
        axiosInstance.get(`/news/${params.id}`)
            .then((res) => {
                setNewsData(res.data)
                return res.data.akimat_id;
            })
            .then(async (id) => {
                const response = await axiosInstance.get(`/news/akimat/${id}`)
                setNews(response.data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div>
            loading
        </div>
    }

    return (
        <>
            <Container className={'bg-secondary overflow-hidden '}>
                <div className={'w-full'}>
                    <div className={'w-full  flex justify-between sm:my-10 md:my-14 lg:my-20 xl:my-24'}>
                        <p className={'text-white text-[24px] font-bold leading-[28.4px]'}>
                            {newsData.akimat_name}
                        </p>
                        <div className={'flex gap-[30px]'}>
                            <Image src={InstagramIcon} alt={''} width={20} height={20}/>
                            <Image src={TelegramIcon} alt={''} width={20} height={20}/>
                            <Image src={WhatsappIcon} alt={''} width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </Container>
            <hr/>
            <Container>
                <div className={'flex flex-col w-full mt-5'}>
                    <div className={'flex flex-col w-full'}>
                        <div className={'w-full my-4'}>
                            <Link href={'/'}>{locale === "ru" ? "Главная страница" : locale === "en" ? "Main page" : "Басты бет"}</Link> / <Link
                            href={'/area'}>{newsData.akimat_name}</Link>
                            {/*/ <Link href={'/area/1'}>Пресс центр</Link>*/}
                        </div>
                        <h1 className={'w-3/4 text-[42px] font-semibold'}>{newsData.title}</h1>
                        <div className={'flex gap-x-[21px] text-[#7F7C7C] mb-6'}>
                            <p>
                                {new Date(newsData.createdAt?.toString()).toLocaleDateString(locale, {
                                    day: 'numeric',
                                    month: 'long'
                                })}
                            </p>
                            <p className={'flex gap-x-1'}>
                                <Image src={Eye} alt={""}/>
                                {newsData.view_count}
                            </p>
                            {/*<p className={'flex gap-x-1'}>*/}
                            {/*  <Image src={Comment} alt={""} />*/}
                            {/*  23*/}
                            {/*</p>*/}
                        </div>
                    </div>
                    <div className={'flex w-full mb-10'}>
                        <div className={'w-3/4 flex flex-col gap-y-3'}>
                            <div
                                className={'w-full bg-cover bg-center h-[271px]'}
                                style={{
                                    backgroundImage: `url("${newsData.image_url}")`
                                }}
                            ></div>
                            <h3 className={'wrap text-[28px] font-medium leading-[35px]'}>
                                {newsData.title}
                            </h3>
                            <p className={'wrap text-[16px] mt-3'}>
                                {newsData.text}
                            </p>
                            {/*<p className={'wrap text-[16px] mt-2'}>*/}
                            {/*  В последний день соревнований напряжение в зале достигло пика: на татами вышли финалисты спортивного и боевого самбо.*/}
                            {/*</p>*/}
                            {/*<p className={'wrap text-[16px] mt-2'}>*/}
                            {/*  Спортивное самбо фокусируется на бросках, удержаниях и болевых приемах, но при этом исключает удары. Цель состоит в том, чтобы победить соперника за счет технических приемов, не нанося ему серьезных повреждений. В спортивном самбо техники удушения, а также удары строго запрещены, в отличие от боевого, где удушающие приемы разрешены. Спортивное самбо включает множество бросков, болевых на руки и ноги.*/}
                            {/*</p>*/}
                            {/*<p className={'wrap text-[16px] mt-2'}>*/}
                            {/*  Боевое самбо, напротив, включает не только броски и болевые приемы, но также удары руками, ногами, локтями и коленями. Боевое самбо разработано для самообороны и предназначено для реальных боевых ситуаций.*/}
                            {/*</p>*/}
                        </div>
                        <div className={'w-1/4 flex flex-col px-2 mb-8'}>
                            <div className={'flex text-[16px] bg-primary w-full'}>
                                <div
                                    className={'flex flex-1 text-white justify-center py-2'}>{locale === "ru" ? "Последние события" : locale === "en" ? "Recent events" : "Соңғы оқиғалар"}</div>
                            </div>
                            <div className={'flex flex-col w-full'}>
                                {
                                    news.map((item) => {
                                        return <div key={item.id} className={' flex flex-col w-full gap-3 mt-4'}>
                                            <h3 className={'text-[16px] font-medium'}>
                                                {item.title}
                                            </h3>
                                            <div className={'flex gap-x-[16px] text-[#7F7C7C] mb-6 text-[16px]'}>
                                                <p>
                                                    {new Date(item.createdAt?.toString()) ? format(new Date(new Date(item.createdAt?.toString())), 'd MMMM', {locale: locale === "ru" ? ru : locale === "en" ? enUS : kk}) : ''}
                                                </p>
                                                <p className={'flex gap-x-1'}>
                                                    <Image src={Eye} alt={""}/>
                                                    {item.view_count}
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default Page;