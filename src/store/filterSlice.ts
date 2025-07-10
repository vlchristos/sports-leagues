import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  searchTerm: string;
  selectedSport: string | null;
};

const initialState: InitialStateType = {
  searchTerm: "",
  selectedSport: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedSport(state, action) {
      state.selectedSport = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedSport } = filterSlice.actions;

export default filterSlice.reducer;
