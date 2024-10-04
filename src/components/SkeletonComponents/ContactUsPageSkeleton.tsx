import React from "react";
import BreadcrumbSkeleton from "./BreadcrumbSkeleton";
import ContactMapSkeleton from "./ContactMapSkeleton";
import ContactDetailSkeleton from "./ContactDetailSkeleton";

const ContactUsPageSkeleton = () => {
  return (
    <>
      <BreadcrumbSkeleton />
      <ContactMapSkeleton />
      <ContactDetailSkeleton />
    </>
  );
};

export default ContactUsPageSkeleton;
