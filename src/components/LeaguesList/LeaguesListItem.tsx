import type { League } from "../../../types/League";
import { setBadgeModalOpen, setSelectedLeagueId } from "../../store/badgeSlice";
import { useAppDispatch } from "../../store/hooks";

type LeagueProps = {
  league: League;
};

export default function LeaguesListItem({ league }: LeagueProps) {
  const dispatch = useAppDispatch();
  function handleOnViewDetails() {
    dispatch(setSelectedLeagueId(league.idLeague));
    dispatch(setBadgeModalOpen(true));
  }

  return (
    <li key={league.idLeague} className="p-4 border rounded-lg">
      <div className="flex gap-2 items-center justify-between">
        <div>
          <h4 className="text-gray-400">
            {league.strLeague ? league.strLeague : league.strLeagueAlternate}
          </h4>
          <h3 className="text-2xl font-semibold">
            {league.strLeagueAlternate
              ? league.strLeagueAlternate
              : league.strLeague}
          </h3>
          <p className="text-gray-600">{league.strSport}</p>
        </div>
        <button
          onClick={handleOnViewDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded text-xs"
        >
          <span className="hidden md:inline">View Details</span>
          <span className="md:hidden">Details</span>
        </button>
      </div>
    </li>
  );
}
