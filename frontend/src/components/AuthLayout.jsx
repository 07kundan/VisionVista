import React from "react";
import { useSelector } from "react-redux";
import { LoginPopUp } from "./index.js";
import {
  GuestMyChannel,
  GuestMyStudio,
  GuestSubscriptions,
  GuestLikedVideos,
  GuestHistory,
  GuestSettings,
  GuestNow,
} from "./GuestComponents/GuestComponents.jsx";
const guestComponents = {
  MyChannel: GuestMyChannel,
  MyStudio: GuestMyStudio,
  Subscriptions: GuestSubscriptions,
  LikedVideos: GuestLikedVideos,
  History: GuestHistory,
  Tweets: GuestNow,
  Settings: GuestSettings,
};

const loginTo = {
  LikedVideos: "Save your favorite moments",
  History: "Keep track of what you watch",
  MyChannel: "Create your channel",
  MyStudio: "Create and share your content",
  Subscriptions: "Never miss a video",
  Tweets: "Show tweets",
  Settings: "Customize your experience",
};

function AuthLayout({ auth, children, pageName }) {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  // if user logged in return child
  if (auth && authStatus) {
    // console.log(auth);
    // console.log(pageName);
    return children;
  }

  // if user is not loggedin
  if (auth && !authStatus) {
    // If login page active return login page
    if (showLoginPopup) {
      return (
        <LoginPopup
          onClose={handleCloseLoginPopup}
          loginTo={loginTo[pageName]}
        />
      );
    }

    // else show guestcomponent base on pagename
    const GuestComponent = guestComponents[pageName];
    return GuestComponent ? (
      <div className="relative overflow-hidden  w-full justify-center flex bg-black">
        <GuestComponent />
        <div className="absolute left-1/2 bottom-[30%] transform -translate-x-1/2 ">
          {/* Sign in button */}
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300 text-lg font-semibold"
            onClick={() => setShowLoginPopup(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    ) : (
      <div>Guest component not found</div>
    );
  }

  return children;
}

export default AuthLayout;
