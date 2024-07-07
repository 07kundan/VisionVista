import authSlice from "@/features/auth.slice";
import uiSlice from "@/features/ui.slice";
import videoSlice from "@/features/video.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    video: videoSlice,
  },
});

export default store;
