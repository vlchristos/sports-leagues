import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  badges: [],
  badgeModalOpen: false,
  selectedLeagueId: null,
};

export const badgesSlice = createSlice({
  name: "badges",
  initialState,
  reducers: {
    setBadgeModalOpen: (state, action) => {
      state.badgeModalOpen = action.payload;
    },
    setSelectedLeagueId: (state, action) => {
      state.selectedLeagueId = action.payload;
    },
  },
});
export const { setSelectedLeagueId, setBadgeModalOpen } = badgesSlice.actions;

export default badgesSlice.reducer;
