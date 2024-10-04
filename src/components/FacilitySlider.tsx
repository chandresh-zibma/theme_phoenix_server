import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacilityCard from "./FacilityCard";
import { PostData } from "@/interfaces";
import { getColor, getDescription, getImageUrl, getRedirectUrl } from "@/utils/getInfo";

interface FacilitySliderProps {
  details: PostData[];
}

const FacilitySlider: React.FC<FacilitySliderProps> = ({ details }) => {
  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="facilitySlider sliderCustomArrow">
      {details?.map((item, index) => {
        return (
          <div className="px-1 h-full" key={"home_facility_" + index}>
            <FacilityCard
              imageUrl={getImageUrl(item)}
              description={getDescription(item)}
              redirectUrl={getRedirectUrl(item)}
              bgColor={getColor(item)}
              title={item?.postTitle}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default FacilitySlider;
