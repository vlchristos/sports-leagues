import { createSelector } from "@reduxjs/toolkit";
import { leaguesApi } from "../services/api";

const selectLeaguesResults = leaguesApi.endpoints.getLeagues.select();

export const selectSports = createSelector(
  selectLeaguesResults,
  (sportsResults) => {
    return sportsResults?.data?.sports || [];
  },
);
