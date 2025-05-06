import { ChevronDown } from "lucide-react";

const SortFilter = () => {
  return (
    <div className="mb-4">
      <div className="mb-2 text-sm text-gray-600">Sắp xếp</div>
      <div className="flex gap-2">
        <div className="relative w-64">
          <select className="w-full appearance-none rounded border bg-white px-3 py-2 pr-10">
            <option>Vị trí giảm dần</option>
            <option>Vị trí tăng dần</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
            <ChevronDown size={16} />
          </div>
        </div>
        <button className="rounded bg-red-500 px-3 py-1 text-white">
          Clear
        </button>
      </div>
    </div>
  );
};
export default SortFilter;
