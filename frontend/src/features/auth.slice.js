import { createSlice } from "@reduxjs/toolkit";

const guestUser = {
  _id: "12234",
  fullName: "Guest",
  username: "SignUpKrLeBhai",
  email: "guest@gmail.com",
  avatar: "avae",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authStatus: null,
    guest: false,
  },
  reducers: {
    setUser: (state, action) => {
      if (!action.payload) {
        state.authStatus = false;
        state.user = null;
      } else {
        state.authStatus = true;
        state.user = action.payload;
      }
    },
    setGuest: (state, action) => {
      if (!action.payload) {
        state.guest = false;
        state.authStatus = false;
        state.user = null;
      } else {
        state.user = guestUser;
        state.authStatus = true;
        state.guest = true;
      }
    },
  },
});

export const { setUser, setGuest } = authSlice.actions;
export default authSlice.reducer;
