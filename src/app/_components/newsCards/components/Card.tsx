import React from "react";
import Image from "next/image";
import Eye from "./assets/lyra-icon-eye-open.svg"
// import Comment from "./assets/lyra-icon-comments.svg"
import { ru, kk } from 'date-fns/locale';
import Link from "next/link";
import { format } from "date-fns";
interface CardData {
  id?: number;
  title?: string;
  image?: string;
  date?: string;
  view_count?: string;
  area?: string;
  width?: number;
}

const Card: React.FC<CardData> = ({id, image, title, view_count, date, area, width}) => {
  console.log(date)
  const locale = window.localStorage.getItem("locale")
  return (
    <div className={'flex flex-col cursor-pointer'} style={{width: width ? `${width}px` : '350px'}}>
      <div
        className={'w-full bg-cover bg-center h-[197px] mb-[11px] relative'}
        style={{
          backgroundImage: `url("${image}")`
        }}
      >
        {
          typeof area == "string"  && <div className={'absolute w-2/3 px-2 py-3 leading-[21px] text-[18px] font-medium text-white text-wrap bg-[#0A478C] bottom-[15px]'}>
            {area}
          </div>
        }
      </div>
      <Link href={`/news/${id}`} style={{fontSize: `${width ? '16' : '21'}px`}} className={'text-[21px] font-medium hover:text-primary hover:underline hover:underline-offset-4'}>
        {title}
      </Link>
      <div className={'w-full flex justify-between text-[#7F7C7C] '}>
        <p>
          {date ? format(new Date(date), 'd MMMM', { locale: locale === "ru" ? ru : kk }) : ''}
        </p>
        <div className={'flex  gap-x-[21px]'}>
          <p className={'flex gap-x-1'}>
            <Image src={Eye} alt={""} />
            {view_count}
          </p>
          {/*<p className={'flex gap-x-1'}>*/}
          {/*  <Image src={Comment} alt={""} />*/}
          {/*  23*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  );
};

export default Card;