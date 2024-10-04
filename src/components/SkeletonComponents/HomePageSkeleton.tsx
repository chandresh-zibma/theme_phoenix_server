import React from "react";
import HomeSliderSkeleton from "./HomeSliderSkeleton";
import HomeAboutSkeleton from "./HomeAboutSkeleton";
import HomeGallerySkeleton from "./HomeGallerySkeleton";

const HomePageSkeleton = () => {
  return (
    <div>
      <HomeSliderSkeleton />
      <HomeAboutSkeleton />
      <HomeGallerySkeleton />
    </div>
  );
};

export default HomePageSkeleton;
