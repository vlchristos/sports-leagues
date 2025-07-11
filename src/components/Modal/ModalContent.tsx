type ModalContentProps = {
  strBadge?: string | null;
  strSeason?: string | null;
};
export default function ModalContent({
  strBadge,
  strSeason,
}: ModalContentProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Details</h2>
      {strSeason ? (
        <p className="text-gray-600 mb-6">Season: {strSeason}</p>
      ) : (
        <p className="text-gray-500 mb-6">No season information available.</p>
      )}
      {strBadge ? (
        <div className="min-h-24 p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={strBadge || ""}
            alt="League Badge"
            className="w-full h-auto mb-4 rounded"
          />
        </div>
      ) : (
        <p className="text-gray-500">No badge available for this league.</p>
      )}
    </div>
  );
}
