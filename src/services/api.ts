import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  transformBadgeData,
  transformLeagueData,
} from "../store/transformers.ts";
import type { LeagauesData } from "../../types/League";
import type { BadgeData, BadgeResponseData } from "../../types/Badge";

export const leaguesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
  }),
  reducerPath: "leaguesApi",
  tagTypes: ["Leagues", "Badge"],
  endpoints: (build) => ({
    getLeagues: build.query<LeagauesData, void>({
      query: () => "/all_leagues.php",
      transformResponse: (response: LeagauesData) =>
        transformLeagueData(response),
    }),
    getBadgeById: build.query<BadgeData, string>({
      query: (id) => `/search_all_seasons.php?badge=1&id=${id}`,
      transformResponse: (response: BadgeResponseData) => {
        return transformBadgeData(response);
      },
    }),
  }),
});

export const { useGetLeaguesQuery, useGetBadgeByIdQuery } = leaguesApi;
