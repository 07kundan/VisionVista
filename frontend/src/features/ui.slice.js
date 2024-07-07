import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarFullSize: true,
  showUploadVideo: false,
  showEditVideo: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarFullSize: (state, action) => {
      state.sidebarFullSize = action.payload;
    },
    setShowUploadVideo: (state, action) => {
      state.showUploadVideo = action.payload;
    },
    setShowEditVideo: (state, action) => {
      state.showEditVideo = action.payload;
    },
  },
});

export const { setSidebarFullSize, setShowEditVideo, setShowUploadVideo } =
  uiSlice.actions;

export default uiSlice.reducer;
