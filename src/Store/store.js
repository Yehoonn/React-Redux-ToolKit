import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slice/createSlice";
import hello from "./../Slice/hello";
import toggle from "../Slice/toggle";

const store = configureStore({
  reducer: {
    count: counterSlice,
    hello: hello,
    toggle: toggle,
  },
});

export default store;
