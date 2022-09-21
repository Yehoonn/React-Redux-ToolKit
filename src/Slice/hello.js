import { createSlice } from "@reduxjs/toolkit";

const hello = createSlice({
  name: "hello",
  initialState: { text: "hello" },
  reducers: {
    hi: (state, action) => {
      state.text = action.payload;
    },
    hell: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { hi, hell } = hello.actions;

export default hello.reducer;
