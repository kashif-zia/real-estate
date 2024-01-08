import { createReducer } from "@reduxjs/toolkit";

var initialState = { gridSize: "2", gridStyle: "" };

export const gridReducer = createReducer(initialState, {
  gridSize: (state, action) => {
    state.gridSize = action.payload;
  },
  gridStyle: (state, action) => {
    state.gridSize = action.payload;
  },
  // gridSize: (state, action) => {
  //   state.gridSize = action.payload;
  // },
  // gridSize: (state, action) => {
  //   state.gridSize = action.payload;
  // },
});
