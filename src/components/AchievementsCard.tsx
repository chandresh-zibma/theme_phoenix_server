import React from "react";
import { PostData } from "@/interfaces";
import { getCoverImage, getDescription } from "@/utils/getInfo";
import { LuMoveRight } from "react-icons/lu";

interface AchievementsCardProps {
  details: PostData;
}

const AchievementsCard: React.FC<AchievementsCardProps> = ({ details }) => {
  return (
    <>
      <div className="group bg-gray-50">
        <div className="flex flex-col gap-2">
          <div className="h-[250px] overflow-hidden relative rounded-[4px]">
            <img
              src={getCoverImage(details)}
              alt=""
              className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col gap-3 px-3 py-2">
            <p className="group-hover:text-theme-color transition-all duration-300 text-lg font-semibold text-heading-text-color">
              {details?.postTitle}
            </p>
            <p className="text-paragraph-text-color text-sm leading-6 line-clamp-3">{getDescription(details)}</p>
          </div>
          <div
            // href="/"
            className="flex items-center gap-2 w-full justify-center p-3 pt-0 text-paragraph-text-color text-sm font-semibold border-b border-transparent hover:border-theme-color group-hover:text-theme-color transition-all duration-300"
          >
            <a href={`/post/${details?.urlSlug}`} className='capitalize hover:underline'>read more</a>
            <LuMoveRight className='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsCard;
