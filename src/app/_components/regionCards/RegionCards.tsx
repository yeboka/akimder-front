'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axiosInstance from "@/service";
import { Skeleton } from 'antd';

interface CardsData {
  onClick?: () => void;
}

interface AkimatOption {
  id: number,
  title: string,
  description: string,
  email: string,
  contacts: string
}


const RegionCards: React.FC<CardsData> = ({ }) => {

  const [regions, setRegions] = useState<AkimatOption[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const regionsOptions = [
    { id: 1, title: "Акимат области Абая" },
    { id: 2, title: "Акимат Акмолинской области" },
    { id: 3, title: "Акимат Актюбинской области" },
    { id: 4, title: "Акимат Алматинской области" },
    { id: 5, title: "Акимат Атырауской области" },
    { id: 7, title: "Акимат города Алматы" },
    { id: 8, title: "Акимат города Астаны" },
    { id: 9, title: "Акимат города Шымкент" },
    { id: 10, title: "Акимат Жамбылской области" },
    { id: 11, title: "Акимат области Жетісу" },
    { id: 13, title: "Акимат Карагандинской области" },
    { id: 14, title: "Акимат Костанайской области" },
    { id: 15, title: "Акимат Кызылординской области" },
  ];

  useEffect(() => {
    setLoading(true)
    axiosInstance.get("/akimat")
      .then((res) => {
        setRegions(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className={'flex justify-center w-full flex-col items-center'}>
      <div className={'grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:grid-cols-2 xl:grid-cols-2'}>
        {
          !loading && regions.map((item) => (
            <Link
              href={`/area/${item.id}`}
              key={item.id}
              className={'font-medium cursor-pointer flex items-center justify-start hover:underline gap-2'}
            >
              <span className={'w-[5px] h-[5px] rounded-full bg-black'} />
              <span>{item.title}</span>
            </Link>
          ))
        }
        {
          loading && regionsOptions.map((_, index) => {
            return <Skeleton.Input active={true} size={'small'} block={true} key={index}/>
          })
        }
      </div>
    </div>
  );
};

export default RegionCards;