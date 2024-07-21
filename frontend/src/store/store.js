import authSlice from "@/features/auth.slice";
import channelSlice from "@/features/channel.slice";
import uiSlice from "@/features/ui.slice";
import videoSlice from "@/features/video.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    video: videoSlice,
    channel: channelSlice,
  },
});

export default store;
