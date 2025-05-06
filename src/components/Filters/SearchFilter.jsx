import { normalized } from "@libs/slug";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef("");

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (searchValue) {
      newParams.set("keyword", normalized(searchValue));
    } else {
      newParams.delete("keyword");
    }
    setSearchParams(newParams);
  }, [searchValue]);

  const handleSearch = () => {
    setSearchValue(ref.current.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-4 flex gap-3">
      <div className="relative w-full max-w-md">
        <input
          ref={ref}
          type="text"
          placeholder="Nhập từ khóa"
          className="w-full rounded border px-3 py-2 pr-10"
          onKeyDown={handleKeyPress}
        />
        <button className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-500">
          <Search size={18} />
        </button>
      </div>
      <button
        className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
        onClick={handleSearch}
      >
        Tìm
      </button>
    </div>
  );
};
export default SearchFilter;
