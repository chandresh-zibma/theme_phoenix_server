import React from "react";

const BreadcrumbSkeleton = () => {
  return (
    <>
      <div className="container mx-auto">
        <div role="status" className="animate-pulse">
          <div className="flex flex-col items-center py-12 px-3 rounded-md bg-gray-300">
            <div className="container mx-auto flex items-center justify-center flex-col h-full">
              <div className="h-16 bg-gray-200 rounded-full w-full max-w-[500px] mb-6" />
              <div className="flex items-center gap-3">
                <div className="h-3 bg-gray-200 rounded-full w-20" />
                <div className="h-3 bg-gray-200 rounded-full w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbSkeleton;
