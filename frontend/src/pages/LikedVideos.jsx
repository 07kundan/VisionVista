import React from "react";
import { useLikedVideos } from "../hooks/like.hook.js";
import { VideolistCard, VideolistCardSkeleton } from "../components/index.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LikedVideos() {
  const isGuest = useSelector((state) => state.auth.guest);
  const { data: likedVideos, isLoading, isFetched } = useLikedVideos(isGuest);

  // skeleton body while loading
  if (isLoading || isGuest)
    return (
      <section className="w-[100vw] pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 block">
        <h1 className="text-center pt-4 text-2xl font-bold">
          Your Liked video will appear here
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

  // if there is no liked video
  if (likedVideos.length === 0 && isFetched) {
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 text-center mt-6">
        <h1 className="text-3xl font-bold my-2 ml-4 ">Liked Videos</h1>
        <div className=" ml-4 text-2xl">Your Liked Videos will appear here</div>
      </section>
    );
  }

  // mapping liked videos
  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <h1 className="text-3xl font-bold my-2 ml-4">Liked Videos</h1>

      <div className="flex flex-col gap-4 p-4">
        {likedVideos &&
          likedVideos.map((video) => (
            <Link
              to={`/video/${video?.likedVideo?._id}`}
              key={video?.likedVideo?._id}
            >
              <VideolistCard
                video={video?.likedVideo}
                key={video?.likedVideo?._id}
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default LikedVideos;
