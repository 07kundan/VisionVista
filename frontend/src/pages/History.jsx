import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { VideolistCard, VideolistCardSkeleton } from "../components/index";
import { useClearWatchHistory, useWatchHistory } from "../hooks/user.hook";
import { useSelector } from "react-redux";

function History() {
  const isGuest = useSelector((state) => state.auth.guest);

  const { data: watchHistory, isLoading } = useWatchHistory(isGuest);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHistory = watchHistory?.filter((video) =>
    video.video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { mutateAsync: clearUserWatchHistory } = useClearWatchHistory();
  const clearWatchHistory = async () => {
    await clearUserWatchHistory();
  };

  if (isLoading || isGuest)
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <h1 className="text-center pt-4 text-2xl font-bold">
          Your History will appear here
        </h1>
        <div className="flex flex-col gap-4 p-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <VideolistCardSkeleton key={index} />
            ))}
        </div>
      </section>
    );

  return (
    <div className="flex flex-col sm:flex-row w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <section className="w-3/4 pr-4">
        <h1 className="text-3xl font-bold my-2 ml-4 text-center ">History</h1>

        <div className="flex flex-col gap-4 p-4">
          {filteredHistory &&
            filteredHistory.map((video) => (
              <Link to={`/video/${video?.video?._id}`} key={video?.video?._id}>
                <VideolistCard video={video.video} />
              </Link>
            ))}
        </div>
      </section>

      <aside className="w-full sm:w-1/4 p-4 ">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search history"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 text-black border border-cyan-500 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <BiSearch className="absolute h-6 w-6 left-3 top-2.5 text-cyan-400" />
        </div>

        <button
          onClick={clearWatchHistory}
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition duration-300"
        >
          Clear Watch History
        </button>
      </aside>
    </div>
  );
}

export default History;
