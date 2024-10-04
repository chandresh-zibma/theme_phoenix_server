import { frontendApi } from "@/utils/axiosInstance";
import dateFormatter from "@/utils/dateFormatter";
import { getCoverImage, getDate, getDescription, getVideoUrl } from "@/utils/getInfo";
import React, { useEffect, useState } from "react";
import GalleryVideoCard from "./GalleryVideoCard";
import VideoCardSkeleton from "./SkeletonComponents/VideoCardSkeleton";
import { useHomeGallery } from "@/context/HomeGalleryContext";
import { PostData } from "@/interfaces";
import DataNotFound from "./SkeletonComponents/DataNotFound";
import { CidStorageKey } from "@/constants/enums";
import Cookies from "js-cookie";

const Video: React.FC = () => {
  const cid = Cookies.get(CidStorageKey)

  const { galleryData, setGalleryData } = useHomeGallery();
  const [videos, setVideos] = useState<PostData[]>(galleryData?.galleryVideo || []);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (galleryData?.galleryVideo?.length > 0) setVideos(galleryData?.galleryVideo || []);
  }, [galleryData]);

  const fetchVideos = async () => {
    setShowSkeleton(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: cid,
          maxItem: 3,
          pageNo: 1,
          urlSlug: "gallery-video",
          eSortDirection: 2,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        // setVideos(data?.lstPost || []);
        setGalleryData({
          ...galleryData,
          galleryVideo: data?.lstPost || [],
        });
        // if (data?.lstPost?.length === 0) {
        //   setShowSkeleton(false);
        // } else {
        //   setShowSkeleton(false);
        // }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    if (galleryData?.galleryVideo?.length === 0 && cid) fetchVideos();
  }, [cid]);

  if (!showSkeleton && videos?.length === 0) {
    return <DataNotFound />;
  }

  return (
    <>
      <div className="gap-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {showSkeleton ? (
          <>
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
          </>
        ) : (
          <>
            {videos.map((item, index) => (
              <GalleryVideoCard
                key={index}
                description={getDescription(item)}
                date={dateFormatter(getDate(item)) || ""}
                imageUrl={getCoverImage(item)}
                // item={item}
                // title={getTitle(item)}
                videoLink={getVideoUrl(item)}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Video;
