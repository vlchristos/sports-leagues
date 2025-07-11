import { setBadgeModalOpen, setSelectedLeagueId } from "../../store/badgeSlice";
import { useAppDispatch } from "../../store/hooks";

export default function ModalFooter() {
  const dispatch = useAppDispatch();
  function handleClose() {
    dispatch(setSelectedLeagueId(null));
    dispatch(setBadgeModalOpen(false));
  }
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleClose}
        className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
}
