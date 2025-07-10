import { createSelector } from "@reduxjs/toolkit";
import { leaguesApi } from "../services/api";

const selectLeaguesResults = leaguesApi.endpoints.getLeagues.select();

export const selectSports = createSelector(
  selectLeaguesResults,
  (sportsResults) => {
    return sportsResults?.data?.sports || [];
  },
);

// selector to filter leagues by sport
export const selectLeaguesBySport = createSelector(
  [selectLeaguesResults, (_state, sport) => sport],
  (sportsResults, selectedSport) => {
    if (!sportsResults?.data?.leagues) return [];
    if (!selectedSport) return sportsResults.data.leagues;

    return sportsResults.data.leagues.filter(
      (league) => league.strSportVal === selectedSport,
    );
  },
);
