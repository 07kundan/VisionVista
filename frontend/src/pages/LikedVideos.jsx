import React from "react";
// import { useLikedVideos } from "../hooks/like.hook.js";
import {
  VideolistCard,
  LikedVideolistCardSkeleton,
} from "../components/index.js";
import { Link } from "react-router-dom";

function LikedVideos() {
  //   const { data: likedVideos, isLoading, isFetched } = useLikedVideos();
  const likedVideos = [];
  const isLoading = true;
  const isFetched = true;

  // skeleton body while loading
  if (isLoading)
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex flex-col gap-4 p-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <LikedVideolistCardSkeleton key={index} />
            ))}
        </div>
      </section>
    );

  // console.log("likedVideos", likedVideos);
  // console.log(typeof likedVideos);

  // if there is no liked video
  if (likedVideos.length === 0 && isFetched) {
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <h1 className="text-3xl font-bold my-2 ml-4">Liked Videos</h1>
        <div className=" ml-4 text-2xl">Your Liked Videos will appear here</div>
      </section>
    );
  }

  // mapping liked videos
  //   return (
  //     <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
  //       <h1 className="text-3xl font-bold my-2 ml-4">Liked Videos</h1>

  //       <div className="flex flex-col gap-4 p-4">
  //         {likedVideos &&
  //           likedVideos.map((video) => (
  //             <Link
  //               to={`/video/${video?.likedVideo?._id}`}
  //               key={video?.likedVideo?._id}
  //             >
  //               <VideolistCard
  //                 video={video?.likedVideo}
  //                 key={video?.likedVideo?._id}
  //               />
  //             </Link>
  //           ))}
  //       </div>
  //     </section>
  //   );
}

export default LikedVideos;
