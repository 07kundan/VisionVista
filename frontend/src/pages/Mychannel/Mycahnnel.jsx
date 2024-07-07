import { MdModeEditOutline } from "react-icons/md";
import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MyChannelSkeleton } from "../../components/index.js";
import { setChannel } from "../../features/channel.slice.js";
// import SubscribeButton from "../components/SubscribeButton";
// import { useUserChannelInfo } from "../hooks/user.hook";
// import defaultCover from "../assets/default-cover-photo.jpg";

function MyChannel() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const UserUsername = useSelector((state) => state.auth.user?.username);
  // const { data: channelInfo, isFetching } = useUserChannelInfo(username);
  const isOwner = UserUsername === username ? true : false;

  const isFetching = true;

  // useEffect(() => {
  //   if (channelInfo) {
  //     dispatch(setChannel(channelInfo));
  //   }
  // }, [channelInfo, dispatch]);

  const channelItems = [
    {
      name: "Videos",
      path: "videos",
    },
    {
      name: "Playlist",
      path: "playlist",
    },
    {
      name: "Tweets",
      path: "tweets",
    },
    {
      name: "Subscribers",
      path: "subscribers",
    },
    {
      name: "About",
      path: "about",
    },
  ];

  if (isFetching) return <MyChannelSkeleton />;

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="w-[73%] m-auto">
        <div className="relative min-h-[250px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                channelInfo?.coverImage?.url || defaultCover
              })`,
            }}
          >
            {/* <img */}
            {/* // src={channelInfo?.coverImage?.url || defaultCover} */}
            {/* alt="cover-photo object-contain" */}
            {/* /> */}
          </div>
        </div>
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-12 pt-4 pb-7">
            <span className="relative -translate-y-1/2 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
              <img
                src={channelInfo?.avatar?.url}
                alt="channelAvatar"
                className="h-full w-full object-cover"
              />
            </span>
            <div className="mr-auto inline-block ">
              <h1 className="font-bold text-2xl">{channelInfo?.fullName}</h1>
              <p className="text-sm text-gray-400">@{channelInfo?.username}</p>
              <p className="text-sm text-gray-400">
                {channelInfo?.subscribersCount} Subscribers ·  {" "}
                {channelInfo?.subscribedToCount} Subscribed
              </p>
              <p>
                {channelInfo?.description ||
                  `This channel doesn't have a description yet.`}
              </p>
            </div>
            <div className="inline-block">
              <div className="inline-flex min-w-[145px] justify-end">
                {/* subscribe button visible for viewers */}
                {!isOwner && (
                  <SubscribeButton
                    isOwner={isOwner}
                    isSubscribed={channelInfo?.isSubscribed}
                    channelId={channelInfo?._id}
                  />
                )}
                {/* ------------------------------------- */}

                {/* edit button visible for owner*/}
                {isOwner && (
                  <Link to="/edit-profile/personal-info">
                    <SpButton className="flex items-center  gap-3">
                      {" "}
                      <MdModeEditOutline /> Edit
                    </SpButton>
                  </Link>
                )}
                {/* ----------- */}
              </div>
            </div>
          </div>

          <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row justify-between text-wrap overflow-auto border-b-2 border-gray-400 py-2 sm:top-[82px]">
            {channelItems.map((item, index) => (
              <li key={index} className="w-full">
                <NavLink
                  to={`/channel/${username}/${item.path}`}
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-lg w-full flex justify-center items-center border-b-2 border-[#ae7aff] bg-zinc-600/70 px-3 py-1.5 text-[#ae7aff] rounded-md" // Active link color
                        : "text-lg w-full flex justify-center items-center border-b-2  border-transparent px-3 py-1.5 text-gray-400" // Inactive link color
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default MyChannel;
