import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { PostData } from "@/interfaces";
import { getCoverImage, getDescription, getName, getPersonDetails } from "@/utils/getInfo";

interface TestimonialSliderProps {
  details: PostData[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ details }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className="testimonialCard">
      <Slider {...settings} className="sliderCustomArrow testimonialSlider">
        {details.map((testimonial, index) => (
          <div key={index} className="px-1">
            <TestimonialCard
              message={getDescription(testimonial)}
              name={getName(testimonial)}
              stdClass={getPersonDetails(testimonial)}
              avatar={getCoverImage(testimonial)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
