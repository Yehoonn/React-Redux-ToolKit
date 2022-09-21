import { createSlice } from "@reduxjs/toolkit";

const toggle = createSlice({
  name: "toggleEvent",
  initialState: { isToggled: false },
  reducers: {
    active: (state, action) => {
      state.isToggled = true;
    },
    remove: (state, action) => {
      state.isToggled = false;
    },
  },
});

export const { active, remove } = toggle.actions;
export default toggle.reducer;
