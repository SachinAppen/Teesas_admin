import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./apis/slices/authSlice";


export default configureStore({
  reducer: {
    auth: authSlice,
  },
});