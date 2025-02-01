"use client"

import {useParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../_assets/lyra-icon-InstagramLogo.svg";
import TelegramIcon from "../_assets/lyra-icon-TelegramLogo.svg";
import WhatsappIcon from "../_assets/lyra-icon-brand-whatsapp281.svg";
import {format} from "date-fns";
import {kk, ru} from "date-fns/locale";
import {Carousel} from "antd";
import Eye from "@/app/_components/newsCards/components/assets/lyra-icon-eye-open.svg";
import Banner from "../../_components/banners/banner";
import Container from "../../_components/container";
import Card from "../../_components/newsCards/components/Card";
import {useEffect, useState} from "react";
import axiosInstance from "../../../service";
import {Skeleton} from 'antd';

const PageContent = () => {
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
        return <div className={"w-full flex flex-col items-center gap-8 mb-8"}>
            <Skeleton.Node
                active={true}
                style={{
                    width: "100vw",
                    height: 200,
                    backgroundColor: "#1F3C88",
                    borderRadius: "none"
                }}
            />
            <Container>
                <div className={'w-full flex flex-col gap-8'}>
                    <Skeleton.Input
                        active
                        style={{
                            width: "50%",
                            height: 50
                        }}
                    />
                    <Skeleton active />
                    <Skeleton.Input
                        active={true}
                        style={{
                            width: "70%",
                            height: 50
                        }}
                    />
                    <Skeleton.Node
                        active={true}
                        style={{
                            width: "70%",
                            height: 300
                        }}
                    />
                </div>
            </Container>
        </div>
    }

    return (
        <>
            <Container className={'bg-secondary overflow-hidden'}>
                <section className={'w-full'}>
                    <section className={'w-full  flex justify-between sm:my-10 md:my-14 lg:my-20 xl:my-24'}>
                        <h1 className={'text-white text-[24px] font-bold leading-[28.4px]'}>
                            {akimatInfo[`title_${locale}`]}
                        </h1>
                        <div className={'flex gap-[30px]'}>
                            <Link href={akimatInfo.instagram || "#"}>
                                <Image src={InstagramIcon} alt={'иконка - ссылка на инстаграм'} width={20} height={20}/>
                            </Link>
                            <Link href={akimatInfo.telegram || "#"}>
                                <Image src={TelegramIcon} alt={'иконка - ссылка на телеграм'} width={20} height={20}/>
                            </Link>
                            <Link href={akimatInfo.whatsapp || "#"}>
                                <Image src={WhatsappIcon} alt={'иконка - ссылка на ватсап'} width={20} height={20}/>
                            </Link>
                        </div>
                    </section>
                </section>
            </Container>
            <hr/>
            <Container className={'py-8'}>
                <nav className={'w-full'}>
                    <Link
                        href={'/'}>{locale === "ru" ? "Главная страница" : locale === "en" ? "Main page" : "Басты бет"}</Link> /
                    <Link
                        href={`/area/${params.id}`}>{akimatInfo[`title_${locale}`]}</Link> /
                    {/*<Link href={'/area/1'}>Пресс центр</Link>*/}
                </nav>
                <h2 className={'w-full text-[42px] my-8 font-semibold'}>
                    {locale === "ru" ? "Главные новости" : locale === "en" ? "Main news" : "Басты жаңалықтар"}
                </h2>
                {newsData && newsData.length > 0 && <div className={'flex w-full mb-10'}>
                    <article className={'w-3/4 flex flex-col gap-y-3'}>
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
                                        <Image src={Eye} alt={"icon view count"}/>
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
                                    return <Card id={item.id} title={item.title} date={item.createdAt}
                                                 view_count={item.view_count}
                                                 image={item.image_url}
                                                 key={item.id} width={258}/>
                                })
                            }
                        </div>
                    </article>
                </div>
                }
            </Container>
            {
                akimatInfo.type !== "village" && <Container className={'mb-7'}>
                    <h2 className={'w-full text-[42px] mt-8 mb-3 font-semibold'}>
                        {
                            akimatInfo.type === "regional" ?
                                <span>{locale === "ru" ? "Районные акиматы" : locale === "en" ? "Regional akimats" : "Аудандық әкімдіктер"}</span>
                                :
                                <span>{locale === "ru" ? "Сельские акиматы" : locale === "en" ? "Rural akimats" : "Ауылдық әкімдіктер"}</span>

                        }
                    </h2>
                    <ul className={'w-full flex gap-[30px]'}>
                        {
                            akimatInfo?.childs.length === 0 &&
                            <p>{locale === "ru" ? "Нет районных акиматов" : locale === "en" ? "There are no district akimats" : "Аудандық әкімдіктер жоқ"}</p>
                        }
                        {akimatInfo?.childs.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={`/area/${item.id}`}
                                    className={'font-medium cursor-pointer flex items-center justify-start hover:underline gap-2'}
                                >
                                    <span className={'w-[5px] h-[5px] rounded-full bg-black'}/>
                                    <span>
                                    {item[`title_${locale}`]}
                                </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            }
            <Carousel arrows autoplay={true}>
                {advs.map((item) => (
                    <section key={item.id}>
                        <a href={item.link}>
                            <div
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
                    </section>
                ))}
            </Carousel>

            <Container className={'mb-5'}>
                <h2 className={'text-[35px] w-full font-semibold'}>
                    {
                        <span>{locale === "ru" ? "Об области" : locale === "en" ? "About the region" : "Облыс туралы"}</span>
                    }
                </h2>
                <article className="w-full flex gap-4">
                    <section
                        className={`bg-cover bg-center bg-gray-300 w-[460px] h-[300px] ${!akimatInfo.region_image ? "animate-pulse" : ""}`}
                        style={{
                            backgroundImage: `url("${akimatInfo.region_image}")`
                        }}
                    ></section>
                    <section className="flex flex-col gap-5 max-w-[60%]">
                        <h3 className="text-[20px] text-semibold">
                            {akimatInfo[`region_name_${locale}`]}
                        </h3>
                        <p className="text-wrap">
                            <Text text={akimatInfo[`description_${locale}`]} isShowMore={showMoreRegionInfo}
                                  setIsShowMore={setShowMoreRegionInfo} locale={locale}/>
                        </p>
                    </section>
                </article>
            </Container>

            <Container className={'mb-5'}>
                <h2 className={'text-[35px] w-full font-semibold'}>
                    {
                        <span>{locale === "ru" ? "Руководство" : locale === "en" ? "Management" : "Басшылық"}</span>
                    }
                </h2>
                <article className={`w-full flex gap-4 p-4 bg-[#0A478C17]`}>
                    <section
                        className={`bg-cover bg-center bg-gray-300 w-[200px] h-[230px] ${!akimatInfo.head_image ? "animate-pulse" : ""}`}
                        style={{
                            backgroundImage: `url("${akimatInfo.head_image}")`
                        }}
                    ></section>
                    <section className="flex flex-col gap-5 max-w-[60%]">
                        <h3 className="text-[20px] text-semibold text-wrap">
                            {akimatInfo[`head_name_${locale}`]}
                        </h3>
                        <p className="text-wrap">
                            <Text text={akimatInfo[`head_description_${locale}`]} isShowMore={showMoreHeadInfo}
                                  setIsShowMore={setShowMoreHeadInfo} locale={locale}/>
                        </p>
                    </section>
                </article>
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
        {text !== null && text.length > 400 &&
            <button aria-label="Show more about the region" className="hover:cursor-pointer text-blue-700"
                    onClick={() => onShowMoreClick()}>{
                locale === "ru" ?
                    !isShowMore ? "Посмотреть больше" : "Скрыть"
                    :
                    locale === "en" ?
                        !isShowMore ? "See more" : "Hide"
                        :
                        !isShowMore ? "Көбірек оқу" : "Жасыру"
            }</button>}
    </p>
}

export default PageContent;
