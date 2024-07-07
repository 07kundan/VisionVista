import React from "react";

// video skeleton

function VideoCardSkeleton() {
  return (
    // body
    <div className="w-full animate-pulse">
      {/* upper part */}
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 to-cyan-950 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        <span className="absolute bottom-1 right-1 inline-block rounded bg-cyan-600 dark:bg-cyan-800 w-12 h-5"></span>
      </div>

      {/* bottom part */}
      <div className="flex gap-x-2">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-800 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        <div className="w-full">
          <div className="mb-1 h-4 w-3/4 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
          <div className="mb-1 h-3 w-1/2 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
          <div className="h-3 w-1/4 bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        </div>
      </div>
    </div>
  );
}

export default VideoCardSkeleton;
