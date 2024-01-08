import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  name: "dollar",
  symbol: "$",
  currencyValue: 1,
};

export const currencyReducer = createReducer(initialState, {
  currencyChange: (state, action) => {
    state.currency = action.payload.currency;
    state.name = action.payload.name;
    state.symbol = action.payload.symbol;
    state.currencyValue = action.payload.value;
  },
});
