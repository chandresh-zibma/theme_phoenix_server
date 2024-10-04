import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import ReelViewPopup from "./ReelViewPopup";
import { PostData } from "@/interfaces";

interface ReelsItem {
  description: string;
  date: string;
  imageUrl: string;
  item: PostData
}

const ReelsCard: React.FC<ReelsItem> = ({ description, date, imageUrl, item }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedReel, setSelectedReel] = useState<PostData | null>(null)

  const handleOpen = (item: PostData) => {
    setOpen(true);
    setSelectedReel(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReel(null);
  };
  return (
    <>
      <div className="group overflow-hidden border flex flex-col">
        <div className="overflow-hidden relative">
          <div className="absolute h-full w-full flex items-center justify-center z-10">
            <button className="p-3 pr-2.5 bg-white/70" onClick={() => handleOpen(item)}>
              <FaPlay size={15} className="text-theme-color" />
            </button>
          </div>
          <img
            src={imageUrl}
            alt=""
            className="w-full aspect-[9/12] object-cover object-center group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full p-5 bg-white transition-all duration-300 overflow-hidden mt-auto">
          <span className="text-sm text-heading-text-color text-center line-clamp-2">{description}</span>
          <span className="text-xs text-paragraph-text-color/50">{date}</span>
        </div>
      </div>
      {open && <ReelViewPopup handleClose={handleClose} selectedReel={selectedReel} />}
      {/* {openReelPopup && (
        <div className="h-screen w-screen fixed bg-[rgba(0,0,0,0.7)] inset-0 z-[999999] flex justify-center items-center">
          <div className="min-[1500px]:max-w-[70vw] min-[1300px]:max-w-[80vw] sm:max-w-[calc(100%-64px-64px)] max-h-[calc(100vh-40px)] w-full h-full flex justify-center items-center">
            <div className="sm:grid sm:grid-cols-2 flex flex-col sm:h-fit sm:w-full w-[270px] max-h-[calc(100vh-40px)] sm:justify-start justify-center sm:items-start items-center sm:bg-transparent bg-black">
              <div className="aspect-[0.56/1] sm:h-full max-h-[calc(100vh-40px)] sm:ml-auto bg-black">
                <ReactPlayer url={videoUrl} playing height={"100%"} width={"100%"} controls />
              </div>
              <div className="sm:aspect-[0.56/1] flex flex-col gap-3 bg-white sm:h-full max-h-[calc(100vh-40px)] sm:w-[unset] w-full overflow-auto">
                <div className="sm:px-7 sm:py-12 py-2 px-3 flex flex-col gap-3">
                  <div className="text-base font-semibold">{date || "July 27, 2024"}</div>
                  <div className="text-lg font-semibold sm:line-clamp-none line-clamp-4">
                    {title}
                  </div>
                  <div className="sm:block hidden">{description}</div>
                </div>
              </div>
            </div>
          </div>
          <IoCloseSharp
            className="text-white hover:scale-110 cursor-pointer duration-200 absolute top-8 right-8 text-[26px]"
            onClick={() => setOpenReelPopup(false)}
          />
        </div>
      )} */}
    </>
  );
};

export default ReelsCard;
