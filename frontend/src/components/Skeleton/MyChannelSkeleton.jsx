import React from "react";

const MyChannelSkeleton = () => {
  return (
    <div className="w-full bg-gray-900 text-white animate-pulse">
      {/* Banner */}
      <div className="w-full h-48 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>

      {/* Profile section */}
      <div className="flex items-center p-4">
        <div className="w-20 h-20 rounded-full mr-4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        <div className="flex-1">
          <div className="h-6  w-1/4 mb-2 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
          <div className="h-4 w-1/3 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        </div>
        <div className="w-20 h-8 rounded bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
      </div>

      {/* Navigation */}
      <div className="flex border-b border-gray-700 mb-4">
        {["Videos", "Playlist", "Tweets", "Subscribers"].map((item, index) => (
          <div key={index} className="px-4 py-2">
            <div className="h-4 w-16 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 "></div>
          </div>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="aspect-video rounded-lg bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700 "
          >
            <div className="w-full h-full flex items-end p-2">
              <div className="h-4 w-1/4 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700  "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyChannelSkeleton;
