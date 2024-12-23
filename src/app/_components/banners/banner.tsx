import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems: {
    img: string,
    link: string,
  }[] = [
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/open_gov_-_kaz_0.jpg?itok=x5I8c_UR",
      link: "https://open.egov.kz/application/lang?lang=kk",
    },
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/banner_egov_-_kopiya.jpg?itok=QczP5ypG",
      link: "https://egov.kz/cms/kk/articles/esalyk"
    },
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/banner-kaz_0.png?itok=GqONhJnX",
      link: "https://www.gov.kz/memleket/entities/anticorruption?lang=kk"
    },
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/group_1228_3.png?itok=Fb-2kjJq",
      link: "https://goszakup.gov.kz/"
    },
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/frame_1egov_mobail_page-0001_0.jpg?itok=JpjIlOiG",
      link: "https://egov.kz/cms/kk/information/about/mobile_application"
    },
    {
      img: "https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/01.png?itok=luO3gmPM",
      link: "https://www.enbek.kz/kk"
    },
  ];

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", paddingBottom: "20px" }}>
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index}>
            <div
              style={{
                textAlign: "center",
                overflow: "hidden",
              }}
              onClick={() => {
                if (typeof window === "undefined") return;
                window.location.href = item.link as string;
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;