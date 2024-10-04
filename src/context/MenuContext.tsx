"use client";


import { MenuItem } from "@/constants/interfaces";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  menu: MenuItem[] | null;
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[] | null>>;
  menuLoads: boolean;
  setMenuLoads: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[] | null>(null);
  const [menuLoads, setMenuLoads] = useState(true);

  return <MenuContext.Provider value={{ menu, setMenu, menuLoads, setMenuLoads }}>{children}</MenuContext.Provider>;
};
