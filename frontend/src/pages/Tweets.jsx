import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Like,
  TweetInput,
  Tweet,
  SubscriberTweetSkeleton,
} from "../components/index";
import { useAllTweets } from "../hooks/tweet.hook";
import { useInView } from "react-intersection-observer";

function TweetPage() {
  const isGuest = useSelector((state) => state.auth.guest);

  if (isGuest) {
    return (
      <div className="w-[50%] m-auto ">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-col justify-center gap-3">
            {Array(8)
              .fill()
              .map((_, index) => (
                <SubscriberTweetSkeleton key={index} />
              ))}
          </div>
        </div>
      </div>
    );
  }

  const currentUserId = useSelector((state) => state.auth.user?._id);
  const authStatus = useSelector((state) => state.auth.authStatus);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isFetched,
    isRefetching,
  } = useAllTweets(authStatus);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const allTweets = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <h1 className="text-3xl font-bold mt-4 mb-8 underline text-center">
        Tweets{" "}
      </h1>
      <div className="px-4">
        <TweetInput />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {isFetching && !isFetchingNextPage && !isRefetching ? (
          <div className="flex flex-col justify-center gap-3">
            {Array(8)
              .fill()
              .map((_, index) => (
                <SubscriberTweetSkeleton key={index} />
              ))}
          </div>
        ) : (
          allTweets.map((tweet) => (
            <React.Fragment key={tweet?._id}>
              {" "}
              <Tweet
                tweet={tweet}
                isOwner={tweet?.ownerDetails?._id === currentUserId}
              />
            </React.Fragment>
          ))
        )}

        {isFetchingNextPage && (
          <div className="flex flex-col justify-center gap-3">
            {Array(3)
              .fill()
              .map((_, index) => (
                <SubscriberTweetSkeleton key={index} />
              ))}
          </div>
        )}
        <div ref={ref}></div>
      </div>
    </section>
  );
}

export default TweetPage;
