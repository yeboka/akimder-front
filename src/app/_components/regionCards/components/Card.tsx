import React from 'react';

interface CardData {
  title: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardData> = ({image, title, onClick}) => {
  return (
    <div className={'flex flex-col w-[258px] cursor-pointer'} onClick={() => {
      console.log("dsfsdfsdfsdf")
      onClick()
    }}>
      <div
        className={'w-full  h-[145px] bg-cover bg-center rounded-[10px] mb-[11px]'}
        style={{
          backgroundImage: `url("${image}")`
        }}
      ></div>
      <h3 className={'text-[21px] font-medium'}>
        {title}
      </h3>
    </div>
  );
};

export default Card;