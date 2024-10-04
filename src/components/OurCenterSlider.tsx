import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCenterCard from "./OurCenterCard";
import { PostData } from "@/interfaces";
import { getAddress, getEmail, getMapLink, getMobileNo, getTitle } from "@/utils/getInfo";
import { frontendApi } from "@/utils/axiosInstance";
import secrets from "@/utils/getSecrets";

interface OurCenterSliderProps {
  details?: PostData[];
}
const settings = {
  dots: false,
  loop: true,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 3,
  arrows: false,
  // autoplay: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
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
const OurCenterSlider: React.FC<OurCenterSliderProps> = ({ details }) => {
  const [centers, setCenters] = useState<PostData[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    setCenters(details || []);
  }, [details]);

  const fetchCenters = async () => {
    setShowSkeleton(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: secrets.COMPANY_ID,
          maxItem: 0,
          pageNo: 1,
          urlSlug: "our-center",
          eSortDirection: 1,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        setCenters(data?.lstPost || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    if (centers?.length === 0)
      fetchCenters();
  }, []);

  return (
    <>
      {" "}
      {showSkeleton ? (
        <>loading...</>
      ) : (
        <Slider {...settings} className="ourCenterSlider">
          {centers?.map((center, index) => {
            return (
              <div className="px-1 h-full" key={"center" + index}>
                <OurCenterCard
                  key={index}
                  centerName={getTitle(center)}
                  centerAddress={getAddress(center)}
                  number={getMobileNo(center)}
                  email={getEmail(center)}
                  mapLink={getMapLink(center)}
                />
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default OurCenterSlider;
