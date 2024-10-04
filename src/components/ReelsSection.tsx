"use client";
import React, { useEffect, useState } from "react";
import ReelsCard from "./ReelsCard";
import { frontendApi } from "@/utils/axiosInstance";
import { getCoverImage, getDate, getDescription } from "@/utils/getInfo";
import dateFormatter from "@/utils/dateFormatter";
import ReelCategorySkeleton from "./SkeletonComponents/ReelCategorySkeleton";
import { useHomeGallery } from "@/context/HomeGalleryContext";
import { PostData } from "@/interfaces";
import DataNotFound from "./SkeletonComponents/DataNotFound";
import { CidStorageKey } from "@/constants/enums";
import Cookies from "js-cookie";

const Reels: React.FC = () => {
  const cid = Cookies.get(CidStorageKey)
  const { galleryData, setGalleryData } = useHomeGallery();
  const [reels, setReels] = useState<PostData[]>(galleryData?.galleryReels || []);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (galleryData?.galleryReels?.length > 0) setReels(galleryData?.galleryReels || []);
  }, [galleryData]);

  const fetchReels = async () => {
    setShowSkeleton(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: cid,
          maxItem: 4,
          pageNo: 1,
          urlSlug: "gallery-reels",
          eSortDirection: 2,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        // setReels(data?.lstPost || []);
        setGalleryData({
          ...galleryData,
          galleryReels: data?.lstPost || [],
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    if (galleryData?.galleryReels?.length === 0 && cid) fetchReels();
  }, [cid]);

  if (!showSkeleton && reels?.length === 0) {
    return <DataNotFound />;
  }

  return (
    <>
      <div className="gap-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        {showSkeleton ? (
          <>
            <ReelCategorySkeleton />
          </>
        ) : (
          <>
            {reels.map((item, index) => (
              <ReelsCard
                key={index}
                description={getDescription(item)}
                date={dateFormatter(getDate(item)) || ""}
                imageUrl={getCoverImage(item)}
                // videoUrl={getVideoUrl(item)}
                item={item}
              />
            ))}

          </>
        )}
      </div>
    </>
  );
};

export default Reels;
