"use client";

import { PostData } from "@/interfaces";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GalleryDataType {
  galleryPhoto: PostData[];
  galleryVideo: PostData[];
  galleryReels: PostData[];
  galleryMediaNews: PostData[];
}

interface HomeGalleryContextType {
  galleryData: GalleryDataType;
  setGalleryData: React.Dispatch<React.SetStateAction<GalleryDataType>>;
}

const HomeGalleryContext = createContext<HomeGalleryContextType | undefined>(undefined);

export const useHomeGallery = () => {
  const context = useContext(HomeGalleryContext);
  if (!context) {
    throw new Error("useHomeGallery must be used within a HomeGalleryProvider");
  }
  return context;
};

export const HomeGalleryProvider = ({ children }: { children: ReactNode }) => {
  const [galleryData, setGalleryData] = useState<GalleryDataType>({
    galleryPhoto: [],
    galleryVideo: [],
    galleryReels: [],
    galleryMediaNews: [],
  });

  return <HomeGalleryContext.Provider value={{ galleryData, setGalleryData }}>{children}</HomeGalleryContext.Provider>;
};
