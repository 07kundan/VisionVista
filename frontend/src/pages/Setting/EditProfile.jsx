import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, Outlet } from "react-router-dom";
// import defaultCoverImg from "../assets/default-cover-photo.jpg";
import { AvatarInput, CoverImageInput } from "../../components/index";
import { CustomButton_ } from "@/components/Buttons/CustomButton";

function EditProfile() {
  const channelInfo = useSelector((state) => state.auth.user);
  const defaultCoverImg = "";
  const editProfileItems = [
    {
      name: "Personal Info",
      path: "personal-info",
    },
    {
      name: "Channel Info",
      path: "channel-info",
    },
    {
      name: "Change Password",
      path: "change-password",
    },
  ];

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <CoverImageInput
            coverImage={channelInfo?.coverImage?.url || defaultCoverImg}
            setCoverImage={null}
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 rounded-full border-2 border-[#20b2d6]">
            <AvatarInput avatar={channelInfo?.avatar} setAvatar={null} />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">{channelInfo?.fullName}</h1>
            <p className="text-sm text-cyan-400">@{channelInfo?.username}</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
              <Link
                to={`/channel/${channelInfo?.username}`}
                className="mr-4 text-sm text-black rounded-md"
              >
                <CustomButton_>View Channel</CustomButton_>
              </Link>
            </div>
          </div>
        </div>
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-cyan-400 bg-[#121212] py-2 sm:top-[82px]">
          {editProfileItems.map((item, index) => (
            <li key={index} className="w-full">
              <NavLink
                to={`/edit-profile/${item.path}`}
                className={
                  ({ isActive }) =>
                    isActive
                      ? "w-full rounded-md border-[#20b2d6] bg-[#083f4d] px-3 py-1.5 text-cyan-400" // Active link color
                      : "w-full rounded-md border-transparent px-3 py-1.5 text-cyan-400" // Inactive link color
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </section>
  );
}

export default EditProfile;
