import React, { useEffect } from "react";
import { useVideos } from "../hooks/video.hook";
import { useInView } from "react-intersection-observer"; //todos: installatiion react-intersection-observer
import { Link } from "react-router-dom";

import { Videocard, VideoCardSkeleton } from "../components/index.js";

function Home() {
  const { data, fetchNextPage, isFetched, isFetching } = useVideos();
  const { ref, inView } = useInView();

  console.log("data", data);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    // console.log(data);
  }, [inView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // video skeleton while fetching videos
  if (isFetching) {
    return (
      <>
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 p-4">
            {Array(16)
              .fill()
              .map((_, index) => (
                <VideoCardSkeleton key={index} />
              ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 ">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4 ">
          {isFetched &&
            data?.pages.map((page, index) => {
              return data?.pages.length >= 1 ? (
                <React.Fragment key={index}>
                  {isFetched &&
                    page.docs.map((video) => {
                      return (
                        <Link to={`/video/${video._id}`} key={video._id}>
                          <Videocard video={video} />
                        </Link>
                      );
                    })}
                </React.Fragment>
              ) : (
                <center className="w-[70vw] font-bold text-xl mt-6" key={index}>
                  {" "}
                  No videos uploaded yet{" "}
                </center>
              );
            })}

          {/* this is next div after last div  */}
          <div className="" ref={ref}></div>
        </div>
      </section>
    </>
  );
}

export default Home;
