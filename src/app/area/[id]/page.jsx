"use client"

import React, {useEffect, useState} from 'react';
import Container from "@/app/_components/container";
import InstagramIcon from '../_assets/lyra-icon-InstagramLogo.svg';
import TelegramIcon from '../_assets/lyra-icon-TelegramLogo.svg';
import WhatsappIcon from '../_assets/lyra-icon-brand-whatsapp281.svg';
import Image from "next/image";
import Link from "next/link";
import Eye from "@/app/_components/newsCards/components/assets/lyra-icon-eye-open.svg";
import Card from "@/app/_components/newsCards/components/Card";
import {useParams} from "next/navigation";
import axiosInstance from "@/service";
import {format} from "date-fns";
import {kk, ru} from "date-fns/locale";
import {Carousel} from "antd";
import Banner from "../../_components/banners/banner";

const Page = () => {
    const [akimatInfo, setAkimatInfo] = useState(null);
    const [newsData, setNewsData] = useState([]);
    const [advs, setAdvs] = useState([]);
    const [loading, setLoading] = useState(true)
    const [showMoreHeadInfo, setShowMoreHeadInfo] = useState(false)
    const [showMoreRegionInfo, setShowMoreRegionInfo] = useState(false)
    const params = useParams()
    const [locale, setLocale] = useState("ru")
    useEffect(() => {
        if (typeof window !== "undefined") {
            setLocale(window.localStorage.getItem("locale") || "ru")
        }
    }, [])
    useEffect(() => {
        setLoading(true)
        Promise.all([
            axiosInstance.get(`/akimat/${params.id}`)
                .then((res) => setAkimatInfo(res.data))
                .catch((error) => console.error('Error fetching Akimat info:', error)),
            axiosInstance.get(`/news/akimat/${params.id}`)
                .then((res) => setNewsData(res.data))
                .catch((error) => console.error('Error fetching News data:', error)),
            axiosInstance.get("/advertisement")
                .then((res) => setAdvs(res.data))
                .catch((error) => console.error('Error fetching Advertisement data:', error)),
        ]).finally(() => {
            setLoading(false)
        })
    }, []);


    if (loading) {
        return <div>
            Loading
        </div>
    }

    return (
        <>
            <Container className={'bg-secondary overflow-hidden'}>
                <div className={'w-full'}>
                    <div className={'w-full  flex justify-between sm:my-10 md:my-14 lg:my-20 xl:my-24'}>
                        <p className={'text-white text-[24px] font-bold leading-[28.4px]'}>
                            {locale === "ru" ? akimatInfo?.title_ru : akimatInfo?.title_kk}
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
            <Container className={'py-8'}>
                <div className={'w-full'}>
                    <Link href={'/'}>{locale === "ru" ? "Главная страница" : "Басты бет"}</Link> /
                    <Link
                        href={`/area/${params.id}`}>{locale === "ru" ? akimatInfo?.title_ru : akimatInfo?.title_kk}</Link> /
                    {/*<Link href={'/area/1'}>Пресс центр</Link>*/}
                </div>
                <h1 className={'w-full text-[42px] my-8 font-semibold'}>
                    {locale === "ru" ? "Главные новости" : "Басты жаңалықтар"}
                </h1>
                {newsData && newsData.length > 0 && <div className={'flex w-full mb-10'}>
                    <div className={'w-3/4 flex flex-col gap-y-3'}>
                        <div
                            className={'w-full bg-cover bg-center relative'}
                            style={{
                                backgroundImage: `url("${newsData[0].image_url}")`,
                            }}
                        >
                            <div className={'w-full h-[450px] bg-gradient-to-t from-black opacity-30 '}></div>
                            <div className={'absolute bottom-[20px] left-[20px] w-2/3 flex flex-col opacity-100'}>
                                <Link href={'/news'} className={'text-[28px] leading-[30px] text-white'}>
                                    {newsData[0].title}
                                </Link>
                                <div className={' flex gap-6 text-white '}>
                                    <p>
                                        {new Date(newsData[0].createdAt.toString()) ? format(new Date(new Date(newsData[0].createdAt.toString())), 'd MMMM', {locale: locale === "ru" ? ru : kk}) : ''}
                                    </p>
                                    <p className={'flex gap-x-1'}>
                                        <Image src={Eye} alt={""}/>
                                        {newsData[0].view_count}
                                    </p>
                                    {/*<p className={'flex gap-x-1'}>*/}
                                    {/*  <Image src={Comment} alt={""} />*/}
                                    {/*  23*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className={'flex w-full flex-wrap gap-x-[20px] gap-y-[20px] justify-center'}>
                            {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                newsData.map((item) => {
                                    console.log(item)
                                    return <Card id={item.id} title={item.title} date={item.createdAt}
                                                 view_count={item.view_count}
                                                 image={item.image_url}
                                                 key={item.id} width={258}/>
                                })
                            }
                        </div>
                    </div>
                    {/*<div className={'w-1/4 flex flex-col px-2 mb-8'}>*/}
                    {/*  <div className={'flex text-[16px] bg-primary w-full'}>*/}
                    {/*    <div className={'flex flex-1 text-white justify-center'}>{locale === "ru" ? "Последние события" : "Соңғы оқиғалар"}</div>*/}
                    {/*  </div>*/}
                    {/*  <div className={'flex flex-col w-full'}>*/}
                    {/*    <div className={' flex flex-col w-full gap-3 mt-4'}>*/}
                    {/*      <h3 className={'text-[16px] font-medium'}>01 ноября - 30 ноября</h3>*/}
                    {/*      <div className={'flex gap-x-[16px] text-black mb-6 text-[16px]'}>*/}
                    {/*        Областной конкурс «Тагылымы телімгер - жас маманнын зергері»*/}
                    {/*      </div>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
                }
            </Container>
            {
                akimatInfo.type !== "village" && <Container className={'mb-7'}>
                    <h1 className={'w-full text-[42px] mt-8 mb-3 font-semibold'}>
                        {
                            akimatInfo.type === "regional" ?
                                <span>{locale === "ru" ? "Районные акиматы" : "Аудандық әкімдіктер"}</span>
                                :
                                <span>{locale === "ru" ? "Сельские акиматы" : "Ауылдық әкімдіктер"}</span>

                        }
                    </h1>
                    <div className={'w-full flex gap-[30px]'}>
                        {
                            akimatInfo?.childs.length === 0 &&
                            <p>{locale === "ru" ? "Нет районных акиматов" : "Аудандық әкімдіктер жоқ"}</p>
                        }
                        {akimatInfo?.childs.map((item) => (
                            <Link
                                href={`/area/${item.id}`}
                                key={item.id}
                                className={'font-medium cursor-pointer flex items-center justify-start hover:underline gap-2'}
                            >
                                <span className={'w-[5px] h-[5px] rounded-full bg-black'}/>
                                <span>
              {locale === "ru" ? item.title_ru : item.title_kk}
            </span>
                            </Link>
                        ))}
                    </div>
                </Container>
            }
            <Carousel arrows autoplay={true}>
                {advs.map((item) => (
                    <div key={item.id}>
                        <a href={item.link}>
                            <div
                                href={item.link}
                                style={{
                                    backgroundImage: `url("${item.image_url}")`, // Ensure it's a valid URL format
                                    backgroundSize: 'cover',
                                    backgroundColor: "blue",// Ensures the image covers the entire div
                                    backgroundPosition: 'center', // Centers the image within the div
                                    height: '160px', // Make sure the div has height
                                }}
                            >
                            </div>
                        </a>
                    </div>
                ))}
            </Carousel>

            <Container className={'mb-5'}>
                <h1 className={'text-[35px] w-full font-semibold'}>
                    {
                        <span>{locale === "ru" ? "Об области" : "Облыс туралы"}</span>
                    }
                </h1>
                <div className="w-full flex gap-4">
                    <div
                        className={`bg-cover bg-center bg-gray-300 w-[460px] h-[300px] ${!akimatInfo.region_image ? "animate-pulse" : ""}`}
                        style={{
                            backgroundImage: `url("${akimatInfo.region_image}")`
                        }}
                    ></div>
                    <div className="flex flex-col gap-5 max-w-[60%]">
                        <h3 className="text-[20px] text-semibold">
                            {locale === "ru" ? akimatInfo.region_name_ru : akimatInfo.region_name_kk}
                        </h3>
                        <p className="text-wrap">
                            {
                                locale === "ru" ?
                                    <Text text={akimatInfo.region_description_ru} isShowMore={showMoreRegionInfo} setIsShowMore={setShowMoreRegionInfo} locale={locale}/>
                                    :
                                    <Text text={akimatInfo.region_description_kk} isShowMore={showMoreRegionInfo} setIsShowMore={setShowMoreRegionInfo} locale={locale}/>
                            }
                        </p>
                    </div>
                </div>
            </Container>

            <Container className={'mb-5'}>
                <h1 className={'text-[35px] w-full font-semibold'}>
                    {
                        <span>{locale === "ru" ? "Руководство" : "Басшылық"}</span>
                    }
                </h1>
                <div className={`w-full flex gap-4 p-4 bg-[#0A478C17]`}>
                    <div
                        className={`bg-cover bg-center bg-gray-300 w-[200px] h-[230px] ${!akimatInfo.head_image ? "animate-pulse" : ""}`}
                        style={{
                            backgroundImage: `url("${akimatInfo.head_image}")`
                        }}
                    ></div>
                    <div className="flex flex-col gap-5 max-w-[60%]">
                        <h3 className="text-[20px] text-semibold text-wrap">
                            {locale === "ru" ? akimatInfo.head_name_ru : akimatInfo.head_name_kk}
                        </h3>
                        <p className="text-wrap">
                            {
                                locale === "ru" ?
                                    <Text text={akimatInfo.head_description_ru} isShowMore={showMoreHeadInfo} setIsShowMore={setShowMoreHeadInfo} locale={locale}/>
                                    :
                                    <Text text={akimatInfo.head_description_kk} isShowMore={showMoreHeadInfo} setIsShowMore={setShowMoreHeadInfo} locale={locale}/>
                            }
                        </p>
                    </div>
                </div>
            </Container>
            <Container>
                <Banner/>
            </Container>
        </>
    );
};

const Text = ({text, isShowMore, setIsShowMore, locale}) => {

    const onShowMoreClick = () => {
        setIsShowMore(prev => !prev)
    }

    return <p className="text-wrap">
        {isShowMore ? text : text?.substring(0, 400)}
        {text.length > 210 && <p className="hover:cursor-pointer text-blue-700" onClick={() => onShowMoreClick()}>{
            locale === "ru" ?
                !isShowMore ? "Посмотреть больше" : "Скрыть"
                :
                !isShowMore ? "Көбірек оқу" : "Жасыру"
        }</p>}
    </p>
}

export default Page;
