import type { LeagauesData } from "../../types/League";

export function transformLeagueData(response: LeagauesData) {
  const allSports = [
    response.leagues.map((league) => ({
      value: league.strSport.toLowerCase().replace(/\s+/g, "-"),
      label: league.strSport,
    })),
  ];

  return {
    leagues: response.leagues.map((league) => ({
      ...league,
      strSportVal: league.strSport.toLowerCase().replace(/\s+/g, "-"),
    })),
    sports: [
      ...new Map(allSports[0].map((sport) => [sport.value, sport])).values(),
    ],
  };
}
