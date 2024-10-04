"use client";

import { PostData } from "@/interfaces";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface LstMediaNewsContextType {
  lstMediaNews: PostData[];
  setLstMediaNews: React.Dispatch<React.SetStateAction<PostData[]>>;
  isLstMediaNewsLoads: boolean;
  setIsLstMediaNewsLoads: React.Dispatch<React.SetStateAction<boolean>>;
}

const MediaNewsContext = createContext<LstMediaNewsContextType | undefined>(undefined);

export const useMediaNews = () => {
  const context = useContext(MediaNewsContext);
  if (!context) {
    throw new Error("useContactDetails must be used within a MediaNewsProvider.");
  }
  return context;
};

export const MediaNewsProvider = ({ children }: { children: ReactNode }) => {
  const [lstMediaNews, setLstMediaNews] = useState<PostData[]>([]);
  const [isLstMediaNewsLoads, setIsLstMediaNewsLoads] = useState(true);

  return (
    <MediaNewsContext.Provider value={{ lstMediaNews, setLstMediaNews, isLstMediaNewsLoads, setIsLstMediaNewsLoads }}>
      {children}
    </MediaNewsContext.Provider>
  );
};
