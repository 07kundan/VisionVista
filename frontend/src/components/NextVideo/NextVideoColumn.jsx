import React, { useState } from "react";
import AllNextVideos from "./AllNextVideo";
import UserNextVideos from "./UserNextVideos";

function NextVideosColumn({ videoId, name, userId }) {
  const [nextVideosOption, setNextVideosOption] = useState("all");
  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => setNextVideosOption("all")}
          className={`
      ${
        nextVideosOption === "all"
          ? "bg-[#083540] text-cyan-400"
          : "bg-cyan-900 text-cyan-400"
      }
      hover:bg-cyan-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          All
        </button>
        <button
          onClick={() => setNextVideosOption("user")}
          className={`
      ${
        nextVideosOption === "user"
          ? "bg-[#083540] text-cyan-400"
          : "bg-cyan-900 text-cyan-400"
      }
      hover:bg-cyan-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          From {name}
        </button>
      </div>

      {nextVideosOption === "all" ? (
        <AllNextVideos currentVideoId={videoId} />
      ) : (
        <UserNextVideos userId={userId} />
      )}
    </>
  );
}

export default NextVideosColumn;
