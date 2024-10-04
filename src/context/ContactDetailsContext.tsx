"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactInfo {
  displayEmail: string;
  contactNo: string;
  helplineNo: string;
  address: string;
  latitude: string;
  longitude: string;
  faceBook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  androidApp: string;
  iosApp: string;
  statusCode: number;
  responseMessage: string | null;
  errors: string[] | null;
}

interface ContactDetailsContextType {
  contactDetails: ContactInfo | null;
  setContactDetails: React.Dispatch<React.SetStateAction<ContactInfo | null>>;
  isContactDetailsLoads: boolean;
  setIsContactDetailsLoads: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactDetailsContext = createContext<ContactDetailsContextType | undefined>(undefined);

export const useContactDetails = () => {
  const context = useContext(ContactDetailsContext);
  if (!context) {
    throw new Error("useContactDetails must be used within a ContactDetailsProvider.");
  }
  return context;
};

export const ContactDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [contactDetails, setContactDetails] = useState<ContactInfo | null>(null);
  const [isContactDetailsLoads, setIsContactDetailsLoads] = useState<boolean>(true);

  return (
    <ContactDetailsContext.Provider
      value={{ contactDetails, setContactDetails, isContactDetailsLoads, setIsContactDetailsLoads }}
    >
      {children}
    </ContactDetailsContext.Provider>
  );
};
