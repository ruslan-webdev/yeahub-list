import { createSlice } from "@reduxjs/toolkit";
import type { IFiltersState } from "./types";

const initialState: IFiltersState = {
  title: null,
  specialization: null,
  skills: [],
  rate: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSpecialization: (state, action) => {
      state.specialization = action.payload;
    },
    resetSpecialization: state => {
      state.specialization = null;
    },
    setSkill: (state, action) => {
      const index = state.skills.indexOf(action.payload);
      index === -1 ? state.skills.push(action.payload) : state.skills.splice(index, 1);
    },
    setRating: (state, action) => {
      const index = state.rate.indexOf(action.payload);
      index === -1 ? state.rate.push(action.payload) : state.rate.splice(index, 1);
    },
  },
});

export const { setTitle, setSpecialization, resetSpecialization, setSkill, setRating } = filtersSlice.actions;
export default filtersSlice.reducer;
