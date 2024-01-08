import { createReducer } from "@reduxjs/toolkit";

var initialState = { likedProducts: [] };

export const addToWishListReducer = createReducer(initialState, {
  defineLikedProducts: (state, action) => {
    state.likedProducts = action.payload;
  },

  like: (state, action) => {
    state.likedProducts?.includes(action.payload) || state.likedProducts?.push(action.payload);
  },

  unlike: (state, action) => {
    const index = state.likedProducts?.indexOf(action.payload);
    if (index > -1) {
      state.likedProducts?.splice(index, 1);
    }
  },
});
