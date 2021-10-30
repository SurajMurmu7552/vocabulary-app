import { configureStore } from "@reduxjs/toolkit";

//reducers
import searchReducer from "./searchSlice";
import viewReducer from "./viewSlice";
import popupReducer from "./popupSlice";

export default configureStore({
  reducer: {
    searchText: searchReducer,
    viewText: viewReducer,
    popupText: popupReducer,
  },
});
