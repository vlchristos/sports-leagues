export type BadgeData = {
  strBadge: string | null;
  strSeason: string | null;
};

export type BadgeResponseData = {
  seasons: BadgeData[] | null;
};
