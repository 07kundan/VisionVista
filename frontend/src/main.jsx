import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

// ############ Components ###################
import Home from "./pages/Home.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import History from "./pages/History.jsx";
import MyChannel from "./pages/Mychannel/Mycahnnel.jsx";
import ChannelVideos from "./pages/Mychannel/ChannelVideo.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import ChannelTweets from "./pages/Mychannel/ChannelTweets.jsx";
import ChannelPlaylist from "./pages/Mychannel/ChannelPlaylist.jsx";
import ChannelSubscribers from "./pages/Mychannel/ChannelSubscribers.jsx";
import AboutChannel from "./pages/Mychannel/AboutChannel.jsx";
import MyStudio from "./pages/MyStudio.jsx";
import Subscriptions from "./pages/Subscription.jsx";
import TweetPage from "./pages/Tweets.jsx";
import Support from "./pages/Support.jsx";
import EditProfile from "./pages/Setting/EditProfile.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout auth={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/liked-videos",
        element: (
          <AuthLayout auth pageName={"LikedVideos"}>
            <LikedVideos />,
          </AuthLayout>
        ),
      },
      {
        path: "/history",
        element: (
          <AuthLayout auth pageName={"History"}>
            <History />,
          </AuthLayout>
        ),
      },
      {
        path: "/channel/:username",
        element: (
          <AuthLayout auth pageName={"MyChannel"}>
            <MyChannel />,
          </AuthLayout>
        ),
        children: [
          {
            path: "videos",
            element: (
              <AuthLayout auth>
                <ChannelVideos />
              </AuthLayout>
            ),
          },
          {
            path: "tweets",
            element: (
              <AuthLayout auth>
                <ChannelTweets />
              </AuthLayout>
            ),
          },
          {
            path: "playlist",
            element: (
              <AuthLayout auth>
                <ChannelPlaylist />
              </AuthLayout>
            ),
          },
          {
            path: "subscribers",
            element: (
              <AuthLayout auth>
                <ChannelSubscribers />
              </AuthLayout>
            ),
          },
          {
            path: "about",
            element: (
              <AuthLayout auth>
                <AboutChannel />
              </AuthLayout>
            ),
          },
        ],
      },
      {
        path: "/my-studio",
        element: (
          <AuthLayout auth pageName={"MyStudio"}>
            <MyStudio />
          </AuthLayout>
        ),
      },
      {
        path: "/subscription",
        element: (
          <AuthLayout auth pageName={"Subscriptions"}>
            <Subscriptions />
          </AuthLayout>
        ),
      },
      {
        path: "/tweets",
        element: (
          <AuthLayout auth pageName={"Tweets"}>
            <TweetPage />
          </AuthLayout>
        ),
      },
      {
        path: "/support",
        element: (
          <AuthLayout auth={false}>
            <Support />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-profile",
        element: (
          <AuthLayout auth pageName={"Settings"}>
            <EditProfile />
          </AuthLayout>
        ),
        // children: [
        //   {
        //     path: "change-password",
        //     element: (
        //       <AuthLayout auth>
        //         <EditChangePassword />
        //       </AuthLayout>
        //     ),
        //   },
        //   {
        //     path: "channel-info",
        //     element: (
        //       <AuthLayout auth>
        //         <EditChannelInfo />
        //       </AuthLayout>
        //     ),
        //   },
        //   {
        //     path: "personal-info",
        //     element: (
        //       <AuthLayout auth>
        //         <EditPersonalInfo />
        //       </AuthLayout>
        //     ),
        //   },
        // ],
      },
      {
        path: "/login",
        element: (
          <AuthLayout auth={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout auth={false}>
            <Signup />
          </AuthLayout>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
