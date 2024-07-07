import React from "react";

function SubscriberTweetSkeleton() {
  return (
    <div className="flex w-full justify-between animate-pulse">
      <div className="flex items-center gap-x-2">
        <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        <div className="block">
          <div className="h-4 w-32 rounded bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
          <div className="mt-2 h-3 w-24rounded bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
        </div>
      </div>
      <div className="block">
        <div className="h-10 w-24 rounded bg-gradient-to-br from-cyan-500 to-cyan-700 dark:bg-gradient-to-br dark:from-cyan-400 dark:to-cyan-700"></div>
      </div>
    </div>
  );
}

export default SubscriberTweetSkeleton;
