import { createReducer } from "@reduxjs/toolkit";

var initialState = { compareProducts: [] };

export const addToCompareReducer = createReducer(initialState, {
  defineCompareProducts: (state, action) => {
    state.compareProducts = action.payload;
  },
  addCompareProducts: (state, action) => {
    state.compareProducts?.includes(action.payload) || state.compareProducts?.push(action.payload);
  },
  removeCompareProducts: (state, action) => {
    const index = state.compareProducts?.indexOf(action.payload);
    if (index > -1) {
      state.compareProducts?.splice(index, 1);
    }
  },
});
