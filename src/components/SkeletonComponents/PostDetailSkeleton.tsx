import React from "react";

const PostDetailSkeleton = () => {
  return (
    <>
      <div className="container mx-auto py-[70px] animate-pulse">
        <div role="status" className="flex flex-col gap-7 px-3">
          <div className="h-10 bg-gray-200 rounded-full w-[270px]" />
          <div className="gap-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {Array(5)
              .fill("")
              .map((index: number) => (
                <div className="flex items-center justify-center h-[300px] bg-gray-300" key={"pd_skeleton" + index}>
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
              ))}
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col w-full gap-2">
              <div className="h-2 bg-gray-200 rounded-full w-[97%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[98%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[96%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[97%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[30%]" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="h-2 bg-gray-200 rounded-full w-[98%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[97%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[30%]" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="h-2 bg-gray-200 rounded-full w-[98%]" />
              <div className="h-2 bg-gray-200 rounded-full w-[97%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailSkeleton;
