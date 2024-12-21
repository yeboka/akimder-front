"use client"
import React, {useEffect, useState} from 'react';
import Card from "@/app/_components/newsCards/components/Card";
import axiosInstance from "@/service";

const NewsCards = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axiosInstance.get("/news")
        .then((res) => {
          setData(res.data)
        })
        .finally(() => {
          setLoading(false)
        })
  }, [])
  // const areas = [
  //   "Жамбылская область",
  //   "Павлодарская область",
  //   "Алматинская область",
  //   "Астанинская область",
  //   "Акимат Северо-Казахстанской области",
  //   "Алматинская область",
  //   "Абайская область",
  //   "Алматинская область"
  // ];

  // const data = [
  //   {
  //     id: 1,
  //     title: "Как прошел крупнейший за 10 лет чемпионат мира по самбо в Астане",
  //     image: "https://tengrinews.kz/userdata/article/2024/article_2665/thumb_b/photo_3864.jpeg.webp",
  //     region: areas[3], // Астанинская область
  //   },
  //   {
  //     id: 2,
  //     title: "В Павлодаре завершился громкий процесс по делу о смерти 23-летнего парня",
  //     image: "https://tengrinews.kz/userdata/news/2023/news_520251/thumb_b/photo_455210.jpeg.webp",
  //     region: areas[1], // Павлодарская область
  //   },
  //   {
  //     id: 3,
  //     title: "Казахстан готовится к усилению проверок предпринимателей в 2024 году",
  //     image: "https://primeminister.kz/assets/media/5_72.jpg",
  //     region: areas[2], // Алматинская область
  //   },
  //   {
  //     id: 4,
  //     title: "КТЖ объявляет о модернизации инфраструктуры и закупке новых вагонов",
  //     image: "https://www.railway.supply/wp-content/uploads/2023/10/img_3492-768x441.jpeg.webp",
  //     region: areas[0], // Жамбылская область
  //   },
  //   {
  //     id: 5,
  //     title: "Антикоррупционная служба выявила махинации с закупкой техники в Алматинской области",
  //     image: "https://polisia.kz/ru/wp-content/uploads/sites/2/2024/08/whatsapp-image-2024-08-14-at-095441.jpeg",
  //     region: areas[4], // Алматинская область
  //   },
  //   {
  //     id: 6,
  //     title: "В Алматы задержан стрелок с сигнальным пистолетом",
  //     image: "https://tengrinews.kz/userdata/news/2023/news_515639/thumb_b/photo_449748.jpeg.webp",
  //     region: areas[4], // Алматинская область
  //   },
  //   {
  //     id: 7,
  //     title: "В Ушарале обсуждают строительство нового терминала аэропорта",
  //     image: "https://tengritravel.kz/userdata/news/2024/news_554234/thumb_b/photo_493259.jpeg.webp",
  //     region: areas[6], // Абайская область
  //   },
  //   {
  //     id: 8,
  //     title: "Леонид Агутин почтил память Батырхана Шукенова в Алматы",
  //     image: "https://tengrinews.kz/userdata/news/2024/news_554259/thumb_b/photo_493291.jpeg.webp",
  //     region: areas[4], // Алматинская область
  //   },
  // ];


  return (
    <div className={'flex justify-center w-full flex-col items-center justify-center'}>
      <div className={'flex w-full flex-wrap gap-x-[20px] gap-y-[20px] justify-center'}>
        {
          !loading && data?.map((item, index) => (
            index < 8 && <Card id={item.id} title={item.title} image={item.image_url} key={item.id} view_count={item.view_count} date={item.createdAt} area={item.akimatName}/>
          ))
        }
        {
          loading && <div>
          loading
            </div>
        }
      </div>
      {/*<p className={'text-[16px] underline underline-offset-4 mt-10 cursor-pointer '}>Посмотреть больше</p>*/}
    </div>
  );
};

export default NewsCards;