import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

export const transportationSlice = createSlice({
  name: "transportation",
  initialState,
  reducers: {
    setGrid(state, { payload }) {
      state.grid = payload;
    },
  },
});

export const { setGrid } = transportationSlice.actions;

export default transportationSlice.reducer;
