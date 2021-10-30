import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    popupText: "",
  },

  reducers: {
    setPopupText: (state, { payload }) => {
      if (payload !== "") {
        state.popupText = payload;
      }
    },

    removePopupText: (state, { payload }) => {
      state.popupText = "";
    },
  },
});

export const { setPopupText, removePopupText } = popupSlice.actions;

export default popupSlice.reducer;
