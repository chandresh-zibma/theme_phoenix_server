import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const ContactDetailSkeleton = () => {
  return (
    <>
      <div className="container mx-auto py-[70px]">
        <div className="flex lg:gap-14 gap-y-7 gap-x-3 xl:w-3/4 w-full mx-auto px-3 md:flex-nowrap flex-wrap">
          <div className="bg-gray-50 p-[40px] rounded-lg md:w-1/3 w-full">
            <div className="flex flex-col gap-5">
              <div className="h-2 bg-gray-200 rounded-full w-[40%]" />
              <div className="flex flex-col gap-2.5">
                <div className="h-2 bg-gray-200 rounded-full w-[30%]" />
                <div className="flex flex-col gap-2">
                  <div className="h-2 bg-gray-200 rounded-full w-[90%]" />
                  <div className="h-2 bg-gray-200 rounded-full w-[80%]" />
                  <div className="h-2 bg-gray-200 rounded-full w-[30%]" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="h-2 bg-gray-200 rounded-full w-[50%]" />
                <div className="h-2 bg-gray-200 rounded-full w-[70%]" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="h-2 bg-gray-200 rounded-full w-[30%]" />
                <div className="h-2 bg-gray-200 rounded-full w-[50%]" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="h-2 bg-gray-200 rounded-full w-[70%]" />
                <div className="text-xl flex gap-2 text-gray-200">
                  <TiSocialFacebook />
                  <RiInstagramLine />
                  <BsTwitter />
                  <BsLinkedin />
                  <AiFillYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetailSkeleton;
