"use client";

import { CidStorageKey, slugs } from "@/constants/enums";
import { useMediaNews } from "@/context/MediaNewsContext";
import { frontendApi } from "@/utils/axiosInstance";
import Link from "next/link";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Cookies from "js-cookie";

const TopHeaderMovingText = () => {
  const { lstMediaNews, setIsLstMediaNewsLoads, setLstMediaNews } = useMediaNews();

  const cid = Cookies.get(CidStorageKey)

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
        setLstMediaNews(data?.lstPost ? [...data.lstPost] : []);

      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLstMediaNewsLoads(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (lstMediaNews?.length === 0 && cid) {
        await fetchMediaNews();
      }
      setIsLstMediaNewsLoads(false);
    })();
  }, [cid]);

  return (
    <>
      {lstMediaNews?.length > 0 && (
        <div className="py-1 border-b border-dashed flex gap-2 px-3">
          <div className="capitalize whitespace-nowrap">latest news</div>
          <Marquee pauseOnHover speed={60} gradient>
            {lstMediaNews?.map((item, index) => {
              return (
                <span key={item?.urlSlug + index} className="text-sm text-theme-color">
                  <Link href={`/post/${item?.urlSlug}`} target="_blank">
                    {item?.postTitle || ""}
                  </Link>
                  <span className="px-3">|</span>
                </span>
              );
            })}
          </Marquee>
        </div>
      )}
    </>
  );
};

export default TopHeaderMovingText;
