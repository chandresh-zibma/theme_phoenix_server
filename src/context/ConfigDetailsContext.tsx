"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface SiteConfig {
  logo: string;
  favicon: string;
  title: string;
  subTitle: string;
  copyrightText: string;
  statusCode: number;
  responseMessage: string;
  errors: string[] | null;
}

interface SiteConfigContextType {
  siteConfig: SiteConfig | null;
  setSiteConfig: React.Dispatch<React.SetStateAction<SiteConfig | null>>;
  isConfigLoads: boolean;
  setIsConfigLoads: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfigDetailsContext = createContext<SiteConfigContextType | undefined>(undefined);

export const useConfigDetails = (): SiteConfigContextType => {
  const context = useContext(ConfigDetailsContext);
  if (!context) {
    throw new Error("useConfigDetails must be used within a ConfigDetailsProvider.");
  }
  return context;
};

export const ConfigDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [isConfigLoads, setIsConfigLoads] = useState<boolean>(false);

  return (
    <ConfigDetailsContext.Provider value={{ siteConfig, setSiteConfig, isConfigLoads, setIsConfigLoads }}>{children}</ConfigDetailsContext.Provider>
  );
};
