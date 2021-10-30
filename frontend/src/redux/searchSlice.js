import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
  },

  reducers: {
    setSearch: (state, { payload }) => {
      if (payload !== "") {
        state.searchText = payload;
      }
    },

    removeSearch: (state, { payload }) => {
      state.searchText = "";
    },
  },
});

export const { setSearch, removeSearch } = searchSlice.actions;

export default searchSlice.reducer;
