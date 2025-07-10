import { useSelector } from "react-redux";
import { useGetLeaguesQuery } from "../services/api";
import type { RootState } from "../store/store";
import { selectLeaguesBySport } from "../store/selectors";

export default function LeaguesList() {
  const { data, error, isLoading } = useGetLeaguesQuery();
  const selectedSport = useSelector(
    (state: RootState) => state.filters?.selectedSport,
  );
  const leagues = useSelector((state) =>
    selectLeaguesBySport(state, selectedSport),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  if (!data || data.leagues.length === 0) return <div>No leagues found.</div>;

  return (
    <ul className="space-y-4">
      {leagues.map((league) => (
        <li key={league.idLeague} className="p-4 border rounded-lg">
          <h4 className="text-gray-400">
            {league.strLeague ? league.strLeague : league.strLeagueAlternate}
          </h4>
          <h3 className="text-2xl font-semibold">
            {league.strLeagueAlternate
              ? league.strLeagueAlternate
              : league.strLeague}
          </h3>
          <p className="text-gray-600">{league.strSport}</p>
        </li>
      ))}
    </ul>
  );
}
