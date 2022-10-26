import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/posts-slice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
