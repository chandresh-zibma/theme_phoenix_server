import React from "react";

const HomeAboutSkeleton = () => {
  return (
    <div className="container mx-auto py-[70px]">
      <div role="status" className="flex gap-4 md:flex-nowrap flex-wrap px-3 animate-pulse">
        <div className="flex flex-col gap-7 lg:w-2/3 w-full">
          <div className="h-6 bg-gray-200 rounded-full w-64 mb-4" />
          <div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[200px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full max-w-[250px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full max-w-[200px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full max-w-[200px] mb-2.5" />
          </div>
        </div>
        <div className="bg-gray-300 lg:w-1/3 w-full border p-1 flex justify-center items-center">
          <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSkeleton;
