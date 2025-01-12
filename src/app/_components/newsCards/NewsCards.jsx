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

  return (
    <section className={'flex justify-center w-full flex-col items-center justify-start'}>
      <div className={'flex w-full flex-wrap gap-x-[20px] gap-y-[20px] justify-start'}>
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
    </section>
  );
};

export default NewsCards;