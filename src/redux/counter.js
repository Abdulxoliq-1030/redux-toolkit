import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increment: (state) => {
      state.data += 1;
    },
    decrement: (state, { payload }) => {
      state.data -= payload.a;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
