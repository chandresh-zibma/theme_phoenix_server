import { PostData } from "@/interfaces";
import { getColor, getIcon, getImageUrl, getOdoCounter } from "@/utils/getInfo";
import React from "react";
import CountUp from "react-countup";

import "font-awesome/css/font-awesome.min.css";

interface OdometerItem {
  imageUrl: string;
  count: string;
  description: string;
  color: string;
  icon: string;
}

const OdometerCard: React.FC<OdometerItem> = ({ imageUrl, count, description, icon, color }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {icon ? (
        <i
          className={`fa ${icon} !text-5xl`}
          style={{
            color: color || "",
          }}
        />
      ) : (
        <img src={imageUrl} alt="" width={66} className="w-[66px] aspect-square object-cover" />
      )}
      <span className="text-theme-color font-bold text-2xl">
        <CountUp duration={2} className="counter" end={Number(count)} enableScrollSpy />
      </span>
      <span className="w-[50px] h-[1px] bg-white"></span>
      <span className="text-xl">{description}</span>
    </div>
  );
};

interface OdometerListProps {
  details: PostData[];
}

const OdometerList: React.FC<OdometerListProps> = ({ details }) => {
  return (
    <div className="border p-1 border-theme-color/10">
      <div className="gap-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-white/20 py-5 backdrop-blur-sm">
        {details.map((item, index) => (
          <OdometerCard
            key={index}
            imageUrl={getImageUrl(item)}
            count={getOdoCounter(item)}
            description={item.postTitle}
            color={getColor(item)}
            icon={getIcon(item)}
          //
          />
        ))}
      </div>
    </div>
  );
};

export default OdometerList;
