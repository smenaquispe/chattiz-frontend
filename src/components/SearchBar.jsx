
export function SearchBar() {
  return (
    <div
        className="p-4 border-b-2 border-gray-200 flex items-center space-x-4"
    >
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text" placeholder="Search..." />
    </div>
  );
}