import { Search } from "lucide-react";

const SearchFilter = () => {
  return (
    <div className="mb-4 flex gap-3">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Nhập từ khóa"
          className="w-full rounded border px-3 py-2 pr-10"
        />
        <button className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-500">
          <Search size={18} />
        </button>
      </div>
      <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white">
        Tìm
      </button>
    </div>
  );
};
export default SearchFilter;
