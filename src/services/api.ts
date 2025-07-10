import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LeaguesApiResponse } from "../../types/League.d.ts";

export const leaguesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
  }),
  reducerPath: "leaguesApi",
  tagTypes: ["Leagues", "Badge"],
  endpoints: (build) => ({
    getLeagues: build.query<LeaguesApiResponse, void>({
      query: () => "/all_leagues.php",
      transformResponse: (response: LeaguesApiResponse) => {
        const sports = [
          ...new Set(response.leagues.map((league) => league.strSport)),
        ];
        return {
          leagues: response.leagues,
          sports,
        };
      },
    }),
    getBadgeById: build.query<string, string>({
      query: (id) => `/search_all_seasons.php?badge=1&id=${id}`,
      // transformResponse: (response: { teams: { strTeamBadge: string }[] }) =>
      //   response.teams[0]?.strTeamBadge || "",
    }),
  }),
});

export const { useGetLeaguesQuery, useGetBadgeByIdQuery } = leaguesApi;
