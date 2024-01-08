import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  propertyStatus: "Property Status",
  price: [2500, 8500],
  area: [2500, 8500],
};

export const inputsReducer = createReducer(initialState, {
  propertyStatus: (state, action) => {
    state.propertyStatus = action.payload;
  },
  propertyType: (state, action) => {
    state.propertyType = action.payload;
  },
  maxRooms: (state, action) => {
    state.maxRooms = action.payload;
  },
  bed: (state, action) => {
    state.bed = action.payload;
  },
  bath: (state, action) => {
    state.bath = action.payload;
  },
  agencies: (state, action) => {
    state.agencies = action.payload;
  },
  price: (state, action) => {
    action.payload ? (state.price = [...action.payload]) : state.price.splice(0, state.price.length);
  },
  area: (state, action) => {
    action.payload ? (state.area = [...action.payload]) : state.area.splice(0, state.area.length);
  },
  sortBy: (state, action) => {
    state.sortBy = action.payload;
  },
});
