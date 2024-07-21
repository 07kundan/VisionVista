import React from "react";
import { timeAgo, formatDuration } from "@/Js/cal";

// video card

function Videocard({ video }) {
  return (
    // body
    <div className="w-full">
      {/* upper part */}
      {/* <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0">
          <img
            src={video?.thumbnail?.url}
            alt={video?.title}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
          {video && formatDuration(video?.duration)}
        </span>
      </div> */}
      {/* lower part */}
      {/* <div className="flex gap-x-2 ">
        {/* user avatar */}
      <div className="h-10 w-10 shrink-0">
        <img
          src={video?.ownerDetails?.avatar?.url}
          alt={video?.ownerDetails?.username}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      {/* user descrioption */}
      <div className="w-full">
        <h6 className="mb-1 font-semibold">{video?.title}</h6>
        <span className="flex text-sm text-gray-200">
          {video?.views} Views · {timeAgo(video?.createdAt)}
        </span>
        <p className="text-sm text-gray-200">{video?.ownerDetails?.username}</p>
      </div>
      {/* -------------- */}
      {/* </div> */}
    </div>
  );
}

export default Videocard;
