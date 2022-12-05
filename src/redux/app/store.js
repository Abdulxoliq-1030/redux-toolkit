import { configureStore } from "@reduxjs/toolkit";
import counter from "../counter";
import student from "../student";

export const store = configureStore({
  reducer: {
    counter,
    student,
  },
});
