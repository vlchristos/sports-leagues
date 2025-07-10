import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformLeagueData } from "../store/transformers.ts";
import type { LeagauesData } from "../../types/League";

export const leaguesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
  }),
  reducerPath: "leaguesApi",
  tagTypes: ["Leagues", "Badge"],
  endpoints: (build) => ({
    getLeagues: build.query<LeagauesData, void>({
      query: () => "/all_leagues.php",
      transformResponse: (response: LeagauesData) => {
        return transformLeagueData(response);
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
