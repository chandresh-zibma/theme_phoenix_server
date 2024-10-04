import { PostData } from "@/interfaces";
import dateFormatter from "@/utils/dateFormatter";
import { getDate, getDescription, getVideoUrl } from "@/utils/getInfo";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import ReactPlayer from "react-player";

interface ReelViewPopupProps {
  selectedReel: PostData | null;
  handleClose: () => void;
}

const ReelViewPopup: React.FC<ReelViewPopupProps> = ({ selectedReel, handleClose }) => {


  return (
    <>
      {
        selectedReel &&
        <div className="h-screen w-screen fixed bg-[rgba(0,0,0,0.7)] inset-0 z-[999999] flex justify-center items-center">
          <div className="min-[1500px]:max-w-[70vw] min-[1300px]:max-w-[80vw] sm:max-w-[calc(100%-64px-64px)] max-h-[calc(100vh-40px)] w-full h-full flex justify-center items-center">
            <div className="sm:grid sm:grid-cols-2 flex flex-col sm:h-fit sm:w-full w-[270px] max-h-[calc(100vh-40px)] sm:justify-start justify-center sm:items-start items-center sm:bg-transparent bg-black">
              <div className="aspect-[0.56/1] sm:h-full max-h-[calc(100vh-40px)] sm:ml-auto bg-black">
                <ReactPlayer url={getVideoUrl(selectedReel) || ""} playing height={"100%"} width={"100%"} controls />
              </div>
              <div className="sm:aspect-[0.56/1] flex flex-col gap-3 bg-white sm:h-full max-h-[calc(100vh-40px)] sm:w-[unset] w-full overflow-auto">
                <div className="sm:px-7 sm:py-12 py-2 px-3 flex flex-col gap-3">
                  <div className="text-base font-semibold">{dateFormatter(getDate(selectedReel)) || ""}</div>
                  <div className="text-lg font-semibold sm:line-clamp-none line-clamp-4">{/* {title} */}</div>
                  <div className="sm:block hidden">{getDescription(selectedReel) || ""}</div>
                </div>
              </div>
            </div>
          </div>
          <IoCloseSharp
            className="text-white hover:scale-110 cursor-pointer duration-200 absolute top-8 right-8 text-[26px]"
            onClick={handleClose}
          />
        </div>
      }
    </>
  );
};

export default ReelViewPopup;
