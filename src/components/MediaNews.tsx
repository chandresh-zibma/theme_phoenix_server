import React, { useEffect, useState } from "react";
import MediaNewsCard from "./MediaNewsCard";
import { frontendApi } from "@/utils/axiosInstance";
import { getCoverImage, getDate, getDescription } from "@/utils/getInfo";
import dateFormatter from "@/utils/dateFormatter";
import ImageCardSkeleton from "./SkeletonComponents/ImageCardSkeleton";
import { useHomeGallery } from "@/context/HomeGalleryContext";
import { PostData } from "@/interfaces";
import DataNotFound from "./SkeletonComponents/DataNotFound";
import { CidStorageKey } from "@/constants/enums";
import Cookies from "js-cookie";

const MediaNews: React.FC = () => {
  const cid = Cookies.get(CidStorageKey)

  const [showSkeleton, setShowSkeleton] = useState(false);
  const { galleryData, setGalleryData } = useHomeGallery();
  const [mediaNewsItem, setMediaNewsItem] = useState<PostData[]>(galleryData?.galleryMediaNews || []);

  useEffect(() => {
    if (galleryData?.galleryMediaNews?.length > 0) setMediaNewsItem(galleryData?.galleryMediaNews || []);
  }, [galleryData]);

  const fetchMediaNews = async () => {
    setShowSkeleton(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: cid,
          maxItem: 3,
          pageNo: 1,
          urlSlug: "gallery-media-news",
          eSortDirection: 2,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        // setMediaNewsItem(data?.lstPost || []);
        setGalleryData({
          ...galleryData,
          galleryMediaNews: data?.lstPost || [],
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    if (galleryData?.galleryMediaNews?.length === 0 && cid) fetchMediaNews();
  }, [cid]);

  if (!showSkeleton && mediaNewsItem?.length === 0) {
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
            {mediaNewsItem.map((item, index) => {
              return (
                <MediaNewsCard
                  key={index}
                  description={getDescription(item)}
                  date={dateFormatter(getDate(item))}
                  imageUrl={getCoverImage(item)}
                  url={`/post/${item?.urlSlug}`}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MediaNews;
