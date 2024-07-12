import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton_, LoginPopup, LoginPopUp } from "./index.js";
import {
  GuestMyChannel,
  GuestMyStudio,
  GuestSubscriptions,
  GuestLikedVideos,
  GuestHistory,
  GuestSettings,
  GuestNow,
} from "./GuestComponents/GuestComponents.jsx";
import { setGuest } from "@/features/auth.slice.js";
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
  const dispatch = useDispatch();
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleGuestView = () => {
    console.log("called");
    dispatch(setGuest(true));
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
        <div className="absolute left-1/2 bottom-[30%] transform -translate-x-1/2 space-x-4">
          {/* Sign in button */}
          <CustomButton_
            className="text-black px-5 py-5 rounded-3xl font-bold text-lg"
            onClick={() => setShowLoginPopup(true)}
          >
            Sign In
          </CustomButton_>
          <CustomButton_
            className="text-black px-5 py-5 rounded-3xl font-bold text-lg"
            onClick={() => handleGuestView()}
          >
            Explore as Guest
          </CustomButton_>
        </div>
      </div>
    ) : (
      <div>Guest component not found</div>
    );
  }

  return children;
}

export default AuthLayout;
