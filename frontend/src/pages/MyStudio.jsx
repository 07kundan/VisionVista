import React, { useEffect } from "react";

// ######### Icons ###########
import { FaRegEye } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { IconContext } from "react-icons";

import { setSidebarFullSize } from "../features/ui.slice";
import { setShowUploadVideo } from "../features/ui.slice";
import { useDispatch, useSelector } from "react-redux";
// import { useChannelStats } from "../hooks/studio.hook";
import { VideoStats, UploadVideo, EditVideo } from "../components/index.js";
import { CustomButton_ } from "@/components/Buttons/CustomButton";

function MyStudio() {
  const dispatch = useDispatch();
  const channelInfo = useSelector((state) => state.auth.user);
  const showEdit = useSelector((state) => state.ui.showEditVideo);
  const showUpload = useSelector((state) => state.ui.showUploadVideo);
  const videoForEdit = useSelector((state) => state.video.videoForEdit);

  //   useEffect(() => {
  //     dispatch(setSidebarFullSize(false));

  //     return () => {
  //       dispatch(setSidebarFullSize(true));
  //     };
  //   }, [dispatch]);

  //   const { data: channelStats, isLoading: statsLoading } = useChannelStats();

  const channelStatsItems = [
    {
      icon: <FaRegEye />,
      title: "Total views",
      //   value: channelStats?.totalViews,
    },
    {
      icon: <FaUserFriends />,
      title: "Total subscribers",
      //   value: channelStats?.totalSubscribers,
    },
    {
      icon: <FaHeart />,
      title: "Total likes",
      //   value: channelStats?.totalLikes,
    },
    {
      icon: <BiSolidVideos />,
      title: "Total videos",
      //   value: channelStats?.totalVideos,
    },
  ];

  const handleUploadVideoClick = () => {
    dispatch(setShowUploadVideo(true));
  };

  return (
    <>
      <div className="mx-auto  flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
        {/* header */}
        <div className="flex flex-wrap justify-between gap-4">
          <div className="block">
            <h1 className="text-2xl font-bold">
              Welcome Back, {channelInfo?.fullName}
            </h1>
            <p className="text-sm text-gray-300">
              Seamless Video Management, Elevated Results.
            </p>
          </div>

          <div className="block">
            <CustomButton_
              onClick={handleUploadVideoClick}
              className="inline-flex items-center gap-x-2 px-3 py-2 font-semibold text-black rounded-md"
            >
              <CiSquarePlus className="text-black font-bold text-2xl" />
              Upload video
            </CustomButton_>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
          <IconContext.Provider value={{ className: "text-2xl font-bold" }}>
            {channelStatsItems.map((item, index) => (
              <div key={index} className="border border-[#20b2d6] p-4">
                <div className="mb-4 block">
                  <span className="h-9 w-9 flex justify-center items-center rounded-full bg-[#77d9f1] p-1 text-[#0e657b]">
                    {item.icon}
                  </span>
                </div>
                <h6 className="text-gray-300">{item.title}</h6>
                <p className="text-3xl font-semibold">{item.value}</p>
              </div>
            ))}
          </IconContext.Provider>
        </div>

        {/* {These are the modals only showned when their respective state in store changes} */}
        {showUpload && <UploadVideo />}
        {showEdit && videoForEdit && <EditVideo />}

        <VideoStats />
      </div>
    </>
  );
}

export default MyStudio;
