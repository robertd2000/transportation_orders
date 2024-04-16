import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { Filter } from "./types";

export const transportationSlice = createSlice({
  name: "transportation",
  initialState,
  reducers: {
    setFilters(state, { payload }: { payload: Filter }) {
      state.filters = payload;
    },

    setGrid(state, { payload }) {
      state.grid = payload;
    },
  },
});

export const { setFilters, setGrid } = transportationSlice.actions;

export default transportationSlice.reducer;
