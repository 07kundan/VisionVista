import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Header/Logo";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsCollectionPlay } from "react-icons/bs";
import { LiaUserCheckSolid } from "react-icons/lia";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaRegCommentDots } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiSettings } from "react-icons/ci";
// ----------------------------------

function Sidebar() {
  const fullSize = useSelector((state) => state.ui.sidebarFullSize);
  const username = useSelector((state) => state.auth.user?.username);
  const sidebarItems = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
      onMobile: true,
    },
    {
      name: "Liked Videos",
      path: "/liked-videos",
      icon: <BiLike />,
      onMobile: false,
    },
    {
      name: "History",
      path: "/history",
      icon: <LuHistory />,
      onMobile: true,
    },
    {
      name: "My Channel",
      path: `/channel/${username}/videos`,
      icon: <GoDeviceCameraVideo />,
      onMobile: false,
    },
    {
      name: "My Studio",
      path: "/my-studio",
      icon: <BsCollectionPlay />,
      onMobile: true,
    },
    {
      name: "Subscriptions",
      path: "/subscription",
      icon: <LiaUserCheckSolid />,
      onMobile: true,
    },
    {
      name: "Tweets",
      path: "/tweets",
      icon: <FaRegCommentDots />,
      onMobile: true,
    },
  ];

  return (
    <aside
      className={`z-40 bg-[#000000]  group absolute inset-x-0 bottom-0 w-full shrink-0 border-t border-[#20b2d6] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[75px] sm:border-r sm:border-t-0 sm:py-6  sm:hover:max-w-[285px] bg-transparent text-[#14d0ff] ${
        fullSize ? "lg:sticky lg:max-w-[285px]" : ""
      }`}
    >
      <IconContext.Provider value={{ className: "w-6 h-6" }}>
        <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col sm:pl-1">
          {/* selected items render for mobile screen all items rendered for bigger screen */}
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`${item.onMobile ? "" : "hidden"} sm:block`}
            >
              <Link
                to={item.path}
                className="flex flex-col items-center justify-center border-none py-2 focus:text-[#20b2d6] sm:w-full sm:flex-row sm:gap-2 sm:border sm:p-2 sm:hover:bg-[#20b2d6] sm:hover:text-black sm:focus:border-[#044e60] sm:focus:bg-[#20b2d6] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 sm:rounded-sm lg:justify-start lg:px-4"
              >
                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                  {item.icon}
                </span>
              </Link>
            </li>
          ))}

          {/* ------------------------------------------------ */}

          {/* hidde for mobile screen */}
          <>
            <li className="hidden sm:block mt-auto">
              <Link
                to="/support"
                className="flex flex-col items-center justify-center border-none py-1 focus:text-[#20b2d6] sm:w-full sm:flex-row sm:gap-2 sm:border sm:p-2 sm:hover:bg-[#20b2d6] sm:hover:text-black sm:focus:border-[#064656] sm:focus:bg-[#20b2d6] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 sm:rounded-sm  lg:justify-start lg:px-4"
              >
                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                  <RxQuestionMarkCircled />
                </span>
                <span
                  className={`block sm:hidden sm:group-hover:inline ${
                    fullSize ? "lg:inline" : ""
                  }`}
                >
                  Support
                </span>
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                to="/edit-profile"
                className="flex flex-col items-center justify-center border-none py-1 focus:text-[#20b2d6] sm:w-full sm:flex-row sm:gap-2 sm:border sm:p-2 sm:hover:bg-[#20b2d6] sm:hover:text-black sm:focus:border-[#094958] sm:focus:bg-[#20b2d6] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 sm:rounded-sm  lg:justify-start lg:px-4"
              >
                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                  <CiSettings />
                </span>
                <span
                  className={`block sm:hidden sm:group-hover:inline ${
                    fullSize ? "lg:inline" : ""
                  }`}
                >
                  Settings
                </span>
              </Link>
            </li>
          </>
        </ul>
      </IconContext.Provider>
    </aside>
  );
}

export default Sidebar;
