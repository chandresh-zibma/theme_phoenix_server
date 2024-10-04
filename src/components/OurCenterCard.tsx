import React from "react";
import ThemeButton from "./ThemeButton";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";

// Define an interface for the props
interface OurCenterCardProps {
  centerName: string;
  centerAddress: string;
  number: string;
  email: string;
  mapLink: string;
}

const OurCenterCard: React.FC<OurCenterCardProps> = ({ centerName, centerAddress, number, email, mapLink }) => {
  return (
    <div className="group h-full">
      <div className="flex flex-col gap-2 h-full">
        <div className="h-[250px] overflow-hidden relative rounded-[4px]">
          <div className="bg-gradient-to-r to-theme-color/20 via-[#e7ffb4]/20 from-yellow-500/20 h-full flex justify-center items-center text-4xl text-heading-text-color font-semibold">
            {centerName}
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3 py-2">
          <p className="group-hover:text-theme-color transition-all duration-300 text-lg font-semibold text-heading-text-color">
            {centerName} Center
          </p>
          <span className="text-paragraph-text-color text-sm leading-6 flex items-start gap-2">
            <span className="pt-1.5">
              <MdLocationPin className="" />
            </span>{" "}
            <span>{centerAddress}</span>
          </span>
          <span className="text-paragraph-text-color text-sm leading-6 flex items-start gap-2">
            <span className="pt-1.5">
              <MdLocalPhone />
            </span>{" "}
            <span>{number}</span>
          </span>
          <span className="text-paragraph-text-color text-sm leading-6 flex items-start gap-2">
            <span className="pt-1.5">
              <MdEmail />
            </span>{" "}
            <span>{email}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 w-full justify-end p-3 pt-0 text-paragraph-text-color text-sm group-hover:text-theme-color transition-all duration-300 mt-auto">
          <ThemeButton text="view in map" link={mapLink} target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default OurCenterCard;
