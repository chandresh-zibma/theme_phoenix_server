import React, { useRef, useState } from "react";

interface FacilityCardProps {
  imageUrl: string;
  title: string;
  description: string;
  redirectUrl: string;
  bgColor: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ imageUrl, title, description, redirectUrl, bgColor }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(false);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current !== null && Math.abs(dragStartX.current - e.clientX) < 5) {
      handleSlideClick(redirectUrl);
    }
    dragStartX.current = null;
  };

  const handleMouseMove = () => {
    if (dragStartX.current !== null) {
      setIsDragging(true);
    }
  };

  const handleSlideClick = (url: string) => {
    if (!isDragging && url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div
        className={`bg-theme-color text-white group ${redirectUrl ? "cursor-pointer" : ""}`}
        style={{
          background: bgColor || "",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-5 p-1 transition-all duration-300">
          <div className="bg-dummy-use-color min-w-1/2 w-1/2 h-48">
            {/* <MdEmojiEvents className='text-5xl text-white' /> */}
            <img src={imageUrl || ""} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <div className="transition-all duration-300 text-lg font-semibold">{title || ""}</div>
            <p className="text-sm leading-6 line-clamp-3">{description || ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
