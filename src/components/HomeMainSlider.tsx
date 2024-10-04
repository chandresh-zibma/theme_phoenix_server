"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHorizontal, getImageUrl, getSubTitle, getTitle, getTitleColor, getVertical } from "@/utils/getInfo";

interface FrontendComponent {
  componentId: number;
  label: string;
  componentValue: string;
  originalURL: string | null;
  eFrontendComponetType: number;
}

interface PostData {
  postDataId: number;
  postCategoryId: number;
  categoryName: string;
  serialNo: number;
  postTitle: string;
  publishStatus: string;
  urlSlug: string;
  updateTime: string;
  eStatus: number;
  ePostCategoryType: number;
  lstData: FrontendComponent[];
}

interface HomeMainSliderProps {
  details: PostData[];
}

interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  subTitle: string;
  titleColor: string;
  horizontal: string;
  vertical: string;
}

const HomeMainSlider: React.FC<HomeMainSliderProps> = ({ details }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const CarouselSlide = ({ imageUrl, title, subTitle, titleColor, horizontal, vertical }: CarouselSlideProps) => {
    let horizontalClass = "justify-center";
    let verticalClass = "items-end";

    if (horizontal) {
      switch (horizontal) {
        case "Left":
          horizontalClass = "justify-start";
          break;
        case "Center":
          horizontalClass = "justify-center";
          break;
        case "Right":
          horizontalClass = "justify-end";
          break;
      }
    }

    if (vertical) {
      switch (vertical) {
        case "Top":
          verticalClass = "items-start";
          break;
        case "Bottom":
          verticalClass = "items-end";
          break;
        case "Center":
          verticalClass = "items-center";
          break;
      }
    }
    return (
      <div className={` text-yellow-500 h-[800px] relative`}>
        <div className="h-full w-full">
          <img src={imageUrl} alt={"Phoenix"} className="h-full w-full object-fill" />
        </div>
        <div className={`absolute top-0 left-0 h-full w-full p-5 flex flex-col ${horizontalClass} ${verticalClass}`}>
          <div className="">
            <h1
              className="text-4xl md:text-7xl font-extrabold animate__animated animate__fadeInDown text-slider-header-text-color font-serif mb-3 !leading-normal"
              style={{
                color: titleColor || "",
              }}
            >
              {title}
            </h1>
          </div>
          <p className="text-xl md:text-3xl animate__animated animate__fadeIn text-dark-text-color font-sans font-medium mb-3 text-white">
            {subTitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <Slider {...settings}>
      {details.map((item, index) => {
        return (
          <CarouselSlide
            key={"home_carousel" + index}
            imageUrl={getImageUrl(item)}
            title={getTitle(item)}
            subTitle={getSubTitle(item)}
            titleColor={getTitleColor(item)}
            horizontal={getHorizontal(item)}
            vertical={getVertical(item)}
          />
        );
      })}
    </Slider>
  );
};

export default HomeMainSlider;
