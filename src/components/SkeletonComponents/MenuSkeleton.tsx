import React from "react";

const MenuSkeleton = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="h-5 bg-gray-300 rounded-full w-20" />
      <div className="h-5 bg-gray-300 rounded-full w-20" />
      <div className="h-5 bg-gray-300 rounded-full w-20" />
      <div className="h-5 bg-gray-300 rounded-full w-20" />
      <div className="h-5 bg-gray-300 rounded-full w-20" />
    </div>
  );
};

export default MenuSkeleton;
