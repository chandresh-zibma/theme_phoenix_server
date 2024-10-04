import React from "react";
import HeaderLogoSkeleton from "./HeaderLogoSkeleton";
import MenuSkeleton from "./MenuSkeleton";

const HeaderSkeleton = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-1 border-b border-dashed flex gap-2 px-3">
          <div className="capitalize whitespace-nowrap">latest news</div>
        </div>
      </div>
      <div className="container mx-auto py-2">
        <div className="flex justify-between px-3">
          <HeaderLogoSkeleton />
          <MenuSkeleton />
        </div>
      </div>
    </>
  );
};

export default HeaderSkeleton;
