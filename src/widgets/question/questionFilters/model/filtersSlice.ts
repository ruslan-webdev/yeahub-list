import { createSlice } from "@reduxjs/toolkit";

import type { IFiltersState } from "./types";

const initialState: IFiltersState = {
  title: "",
  specialization: null,
  rate: [],
  skills: [],
  complexity: [],
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
    setRate: (state, action) => {
      const index = state.rate.indexOf(action.payload);
      index === -1 ? state.rate.push(action.payload) : state.rate.splice(index, 1);
    },
    setSkill: (state, action) => {
      const index = state.skills.indexOf(action.payload);
      index === -1 ? state.skills.push(action.payload) : state.skills.splice(index, 1);
    },
    setComplexity: (state, action) => {
      const index = state.complexity.indexOf(action.payload);
      index === -1 ? state.complexity.push(action.payload) : state.complexity.splice(index, 1);
    },
  },
});

export const { setTitle, setSpecialization, resetSpecialization, setRate, setSkill, setComplexity } =
  filtersSlice.actions;
export default filtersSlice.reducer;
