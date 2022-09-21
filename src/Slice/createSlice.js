import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, inputData: "" },
  reducers: {
    plus: (state, action) => {
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= action.payload;
    },
    change: (state, action) => {
      state.inputData = parseInt(action.payload);
    },
  },
});

export const { plus, minus, change } = counterSlice.actions;
export default counterSlice.reducer;
