import React from "react";

const VideoDetailSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="w-full lg:w-[72%] p-4">
        {/* Video player skeleton */}
        <div className="aspect-video  rounded-lg animate-pulse mb-4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>

        {/* Video controls skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-24 h-3 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-full animate-pulse"></div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Title skeleton */}
        <div className="h-6 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse mb-4"></div>

        {/* Meta info and buttons skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-full animate-pulse mr-3"></div>
            <div>
              <div className="h-4 w-32 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse mb-2"></div>
              <div className="h-3 w-24 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse"></div>
            </div>
          </div>
          <div className="flex space-x-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-20 h-8 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse w-3/4"></div>
        </div>
      </div>

      {/* Recommended videos skeleton */}
      <div className="w-full lg:w-[27%] p-4 space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex space-x-2">
            <div className="w-40 h-24 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-lg animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse mb-2"></div>
              <div className="h-3 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse w-3/4 mb-1"></div>
              <div className="h-3 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 rounded-md animate-pulse w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetailSkeleton;
