import { createSlice } from "@reduxjs/toolkit";

const init = {
  mode: "light",
  data: null,
};

const Myslice = createSlice({
  name: "MySlice",
  initialState: init,

  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },

    setData: (state, action) => {
      state.data = action.payload;
    },

    setLogout: (state) => {
      state.data = null;
    },
  },
});
export default Myslice.reducer;
export const { setMode, setData, setLogout } = Myslice.actions;
