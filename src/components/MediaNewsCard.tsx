import Link from "next/link";

interface MediaNewsItem {
  description: string;
  date: string;
  imageUrl: string;
  url?: string;
}

const MediaNewsCard: React.FC<MediaNewsItem> = ({ description, date, imageUrl, url }) => {
  return (
    <div className="group h-72 overflow-hidden relative">
      <Link href={url || "#"}>
        <div className="top-full group-hover:top-0 flex flex-col justify-center items-center gap-5 z-10 absolute bottom-0 left-0 w-full p-5 bg-black/40 backdrop-grayscale transition-all duration-300 overflow-hidden">
          <span className="text-sm text-white text-center overflow-auto">{description}</span>
          <span className="text-xs text-white">{date}</span>
        </div>
      </Link>
      <img
        src={imageUrl}
        alt=""
        className="h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-300"
      />
    </div>
  );
};

export default MediaNewsCard;
