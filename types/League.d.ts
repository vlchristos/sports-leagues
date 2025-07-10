export type League = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
};

export type LeaguesApiResponse = {
  leagues: League[];
};
