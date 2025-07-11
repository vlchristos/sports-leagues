import { useAppSelector } from "../store/hooks";
import Filters from "./Filters";
import LeaguesList from "./LeaguesList";
import Modal from "./Modal";

export default function Main() {
  const badgeModalOpen = useAppSelector((state) => state.badges.badgeModalOpen);

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold mb-20">Sports Leagues</h1>
        <Filters />
        <LeaguesList />
        {badgeModalOpen && <Modal />}
      </div>
    </main>
  );
}
