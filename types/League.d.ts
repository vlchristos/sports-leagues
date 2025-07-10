export type Sport = {
  value: string;
  label: string;
};

export type League = {
  idLeague: string;
  strLeague: string;
  strSportVal: string;
  strSport: string;
  strLeagueAlternate: string;
};

export type LeagauesData = {
  leagues: League[];
  sports: Sport[];
};
