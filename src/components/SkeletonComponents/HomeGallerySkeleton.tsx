import React from "react";

const HomeGallerySkeleton = () => {
  return (
    <div className="container mx-auto">
      {/* Section title */}
      <div className="pb-7">
        <div role="status" className="animate-pulse">
          <div className="h-10 mx-auto bg-gray-300 rounded-full max-w-[200px] mb-4" />
          <div className="bg-gray-300 w-[10vw] h-1.5 min-w-[80px] mx-auto"></div>
        </div>
      </div>

      {/* Tab Skeleton */}
      <div className="pb-6">
        <div role="status" className="animate-pulse flex items-center justify-center gap-4 ">
          <div className="w-[100px] h-9 bg-gray-300 rounded-md " />
          <div className="w-[100px] h-9 bg-gray-300 rounded-md " />
          <div className="w-[100px] h-9 bg-gray-300 rounded-md " />
          <div className="w-[100px] h-9 bg-gray-300 rounded-md " />
        </div>
      </div>

      {/* Tab content skeleton */}
      <div className="pb-7">
        <div role="status" className="animate-pulse flex items-center gap-4 w-full">
          <div className="w-1/3 flex items-center justify-center h-72 bg-gray-300 rounded ">
            <svg
              className="w-10 h-10 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="w-1/3 flex items-center justify-center h-72 bg-gray-300 rounded ">
            <svg
              className="w-10 h-10 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="w-1/3 flex items-center justify-center h-72 bg-gray-300 rounded ">
            <svg
              className="w-10 h-10 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="">
        <div role="status" className="animate-pulse flex items-center justify-center gap-4 w-full">
          <div className="w-[130px] h-10 bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallerySkeleton;
