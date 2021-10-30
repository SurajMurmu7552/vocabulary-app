import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    viewText: "",
  },

  reducers: {
    setView: (state, { payload }) => {
      if (payload !== "") {
        state.viewText = payload;
      }
    },

    removeView: (state) => {
      state.viewText = "";
    },
  },
});

export const { setView, removeView } = viewSlice.actions;

export default viewSlice.reducer;
