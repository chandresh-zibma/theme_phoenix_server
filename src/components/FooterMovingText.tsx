"use client";

import { CidStorageKey, slugs } from "@/constants/enums";
import { useMediaNews } from "@/context/MediaNewsContext";
import { frontendApi } from "@/utils/axiosInstance";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import LinkSkeleton from "./SkeletonComponents/LinkSkeleton";
import Cookies from 'js-cookie'

const FooterMovingText = () => {
  const cid = Cookies.get(CidStorageKey)
  const { lstMediaNews, isLstMediaNewsLoads, setIsLstMediaNewsLoads, setLstMediaNews } = useMediaNews();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchMediaNews = async () => {
    setIsLstMediaNewsLoads(true);
    try {
      const { data } = await frontendApi().get("frontend_post_get", {
        params: {
          companyId: cid,
          maxItem: 10,
          pageNo: 1,
          urlSlug: slugs.MediaNews,
          eSortDirection: 2,
          eSortBy: 1,
        },
      });
      if (data && data?.statusCode === 200) {
        setLstMediaNews(data?.lstPost ? [...data?.lstPost] : []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLstMediaNewsLoads(false);
    }
  };

  useEffect(() => {
    (async () => {
      if ((lstMediaNews?.length === 0 || !lstMediaNews) && cid) {
        await fetchMediaNews();
      }
      setIsLstMediaNewsLoads(false);
    })();
  }, [cid]);
  return (
    <div className="h-full w-full overflow-hidden">
      {isLstMediaNewsLoads ? (
        <div className="flex items-center justify-center flex-col">
          <LinkSkeleton />
          <LinkSkeleton />
          <LinkSkeleton />
          <LinkSkeleton />
          <LinkSkeleton />
        </div>
      ) : (
        <Marquee
          pauseOnHover
          speed={60}
          direction={isMobile ? "left" : "up"}
          style={{ width: "100%", height: "100%", justifyContent: "flex-start" }}
          className="w-full h-full justify-start"
        >
          {lstMediaNews?.map((item, index) => {
            return (
              <p key={item?.urlSlug + index}>
                <Link href={`/post/${item?.urlSlug}`} target="_blank" className="mb-3 w-fit sm:w-[180px] line-clamp-4">
                  {item?.postTitle || ""}
                  {isMobile && <span className="px-4 text-white">|</span>}
                </Link>
              </p>
            );
          })}
        </Marquee>
      )}
    </div>
  );
};

export default FooterMovingText;
