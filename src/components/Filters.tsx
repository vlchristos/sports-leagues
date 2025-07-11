import type { Sport } from "../../types/League";
import { setSearchTerm, setSelectedSport } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSports } from "../store/selectors";

export default function Filters() {
  const dispatch = useAppDispatch();
  const selectedSport = useAppSelector((state) => state.filters.selectedSport);
  const sports: Sport[] = useAppSelector(selectSports);
  const searchTerm = useAppSelector((state) => state.filters.searchTerm);

  function handleSportChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const sportValue = event.target.value || null;
    dispatch(setSelectedSport(sportValue));
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchTerm(event.target.value));
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4 p-4 bg-gray-100 rounded-lg">
      <div className="flex-1">
        <input
          type="text"
          id="search"
          placeholder="Search leagues..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="sport" className="text-sm mr-2">
          Filter by sport:
        </label>
        <select
          id="sport"
          value={selectedSport || ""}
          onChange={handleSportChange}
          className="p-2 border-1 border-gray-300 rounded-lg"
        >
          <option value="">All</option>
          {sports.map((sport) => (
            <option key={sport.value} value={sport.value}>
              {sport.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
