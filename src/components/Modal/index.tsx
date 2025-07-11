import { useGetBadgeByIdQuery } from "../../services/api";
import { useAppSelector } from "../../store/hooks";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

export default function Modal() {
  const selectedLeagueId =
    useAppSelector((state) => state.badges.selectedLeagueId) || "";

  const { data, isLoading } = useGetBadgeByIdQuery(selectedLeagueId);

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-10">
        Loading...
      </div>
    );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-10">
      <div className="opacity-100 m-4 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <ModalContent strBadge={data?.strBadge} strSeason={data?.strSeason} />
        <ModalFooter />
      </div>
    </div>
  );
}
