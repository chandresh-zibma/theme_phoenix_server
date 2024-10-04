import { frontendApi } from "@/utils/axiosInstance";
import dateFormatter from "@/utils/dateFormatter";
import { getCoverImage, getDate, getDescription } from "@/utils/getInfo";
import React, { useEffect, useState } from "react";
import ImageCardSkeleton from "./SkeletonComponents/ImageCardSkeleton";
import Link from "next/link";
import { useHomeGallery } from "@/context/HomeGalleryContext";
import { PostData } from "@/interfaces";
import DataNotFound from "./SkeletonComponents/DataNotFound";
import { CidStorageKey } from "@/constants/enums";
import Cookies from 'js-cookie'

interface GalleryItem {
  description: string;
  date: string;
  imageUrl: string;
  link?: string;
}

const GalleryCard: React.FC<GalleryItem> = ({ description, date, imageUrl, link }) => {
  return (
    <div className="group h-72 overflow-hidden relative">
      <Link href={link || "#"}>
        <div className="top-full group-hover:top-0 flex flex-col justify-center items-center gap-5 z-10 absolute bottom-0 left-0 w-full p-5 bg-black/40 backdrop-grayscale transition-all duration-300 overflow-hidden">
          <span className="text-sm text-white text-center line-clamp-2 leading-snug">{description}</span>
          <span className="text-xs text-white">{dateFormatter(date)}</span>
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

const Gallery: React.FC = () => {
  const cid = Cookies.get(CidStorageKey)
  const { galleryData, setGalleryData } = useHomeGallery();
  const [photos, setPhotos] = useState<PostData[]>(galleryData?.galleryPhoto || []);

  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (galleryData?.galleryPhoto?.length > 0) setPhotos(galleryData?.galleryPhoto || []);
  }, [galleryData]);

  const fetchPhotos = async () => {
    setShowSkeleton(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: cid,
          maxItem: 3,
          pageNo: 1,
          urlSlug: "gallery-photo",
          eSortDirection: 2,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        // setPhotos(data?.lstPost || []);
        setGalleryData({
          ...galleryData,
          galleryPhoto: data?.lstPost || [],
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    if (galleryData?.galleryPhoto?.length === 0 && cid) fetchPhotos();
  }, [cid]);

  if (!showSkeleton && photos?.length === 0) {
    return <DataNotFound />;
  }

  return (
    <>
      <div className="gap-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {showSkeleton ? (
          <>
            <ImageCardSkeleton />
            <ImageCardSkeleton />
            <ImageCardSkeleton />
          </>
        ) : (
          <>
            {photos?.map((item, index) => (
              <GalleryCard
                key={index}
                description={getDescription(item)}
                date={getDate(item)}
                imageUrl={getCoverImage(item)}
                link={`/post/${item?.urlSlug}`}
              //
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Gallery;
