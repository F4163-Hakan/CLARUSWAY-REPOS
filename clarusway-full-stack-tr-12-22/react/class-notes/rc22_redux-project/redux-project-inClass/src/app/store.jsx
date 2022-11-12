import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feautres/authSlice";
import newsReducer from "../feautres/newsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});
