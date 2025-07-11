import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import { useGetLeaguesQuery } from "../../services/api";
import type { RootState } from "../../store/store";
import type { League } from "../../../types/League";
import LeaguesListItem from "./LeaguesListItem";

export default function LeaguesList() {
  const { data, error, isLoading } = useGetLeaguesQuery();

  const searchTerm = useSelector(
    (state: RootState) => state.filters?.searchTerm,
  );

  const selectedSport = useSelector(
    (state: RootState) => state.filters?.selectedSport,
  );

  function filterLeagues(leagues: League[]) {
    if (!selectedSport) return leagues;
    return leagues.filter((league) => league.strSportVal === selectedSport);
  }

  function searchLeagues(leagues: League[]) {
    if (!searchTerm) return leagues;
    const fuse = new Fuse(leagues, {
      keys: ["strLeague", "strLeagueAlternate"],
      threshold: 0.3,
    });
    return fuse.search(searchTerm).map((result) => result.item);
  }

  const leagues = useSelector(() => {
    const initialData = data?.leagues || [];
    const filteredLeagues = filterLeagues(initialData);
    return searchLeagues(filteredLeagues);
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  if (!data || data.leagues.length === 0) return <div>No leagues found.</div>;

  return (
    <ul className="space-y-4">
      {leagues.map((league) => (
        <LeaguesListItem key={league.idLeague} league={league} />
      ))}
    </ul>
  );
}
