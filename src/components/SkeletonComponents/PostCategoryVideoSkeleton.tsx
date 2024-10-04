import React from "react";

const PostCategoryVideoSkeleton = () => {
  return (
    <>
      {Array(6)
        .fill("")
        .map((index: number) => (
          <div className="border animate-pulse" key={"pc_skeleton" + index}>
            <div className="flex items-center justify-center h-[300px] bg-gray-300">
              <svg
                className="w-10 h-10 text-gray-200 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-5 w-full p-5">
              <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div className="h-6 bg-gray-200 rounded-full w-[160px]" />
                <div className="flex flex-col w-full gap-1 items-center">
                  <div className="h-2 bg-gray-200 rounded-full w-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-3/5" />
                </div>
              </div>
              <div className="h-2 w-20 bg-gray-200 rounded-full max-w-[200px]" />
            </div> */}
          </div>
        ))}
    </>
  );
};

export default PostCategoryVideoSkeleton;
