export default function Header() {
  return (
    <header className="border-b border-gray-200 ">
      <div className="flex justify-between items-center px-4 py-2 container mx-auto">
        <h3 className="font-bold text-[#CB0300]">Home assignment – FE</h3>
        <a
          href="https://github.com/vlchristos/sports-leagues"
          target="_blank"
          className="text-sm text-gray-400 hover:text-gray-700"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
