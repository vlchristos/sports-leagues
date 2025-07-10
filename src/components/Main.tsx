import Filters from "./Filters";
import LeaguesList from "./LeaguesList";

export default function Main() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold mb-20">Sports Leagues</h1>
        <Filters />
        <LeaguesList />
      </div>
    </main>
  );
}
