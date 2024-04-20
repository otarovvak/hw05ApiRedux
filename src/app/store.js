import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../feature/apiSlicer";
export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
