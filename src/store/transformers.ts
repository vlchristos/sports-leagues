import type { BadgeData, BadgeResponseData } from "../../types/Badge";
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

export function transformBadgeData(response: BadgeResponseData | null) {
  let badge: BadgeData = {
    strBadge: null,
    strSeason: null,
  };

  if (
    response?.seasons === null ||
    !response?.seasons ||
    response.seasons.length === 0
  ) {
    return badge;
  }

  const lastSeason = response.seasons.reduce(
    (prev, current) => {
      if (current.strBadge) {
        return current;
      }
      return prev;
    },
    { strBadge: null, strSeason: null },
  );

  badge = {
    strBadge: lastSeason.strBadge || null,
    strSeason: lastSeason.strSeason || null,
  };

  return badge;
}
