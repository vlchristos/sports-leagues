import { createSelector } from "@reduxjs/toolkit";
import { leaguesApi } from "../services/api";

const selectLeaguesResults = leaguesApi.endpoints.getLeagues.select();

export const selectSport = createSelector(
  selectLeaguesResults,
  (res) => res?.data?.leagues || [],
);
