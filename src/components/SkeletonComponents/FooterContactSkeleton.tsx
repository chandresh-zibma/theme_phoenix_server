import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const FooterContactSkeleton = () => {
  return (
    <div>
      <div className="mb-3 flex flex-col">
        <div className="text-white transition-all duration-500 flex gap-2 items-center w-full mb-5">
          <FaPhone className="min-w-5" size={20} />
          <div className="w-full">
            <div className="h-2 w-full max-w-[80%] bg-gray-100 rounded-full" />
          </div>
        </div>
        <div className="text-white transition-all duration-500 flex gap-2 items-center w-full mb-5">
          <IoMdMail className="min-w-5" size={20} />
          <div className="w-full">
            <div className="h-2 w-full max-w-[80%] bg-gray-100 rounded-full" />
          </div>
        </div>
        <div className="text-white transition-all duration-500 flex gap-2 items-center w-full mb-5">
          <MdLocationPin className="min-w-5" size={20} />
          <div className="w-full">
            <div className="h-2 w-full bg-gray-100 rounded-full mb-1" />
            <div className="h-2 w-full max-w-[80%] bg-gray-100 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactSkeleton;
