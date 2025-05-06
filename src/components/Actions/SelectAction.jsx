import { ChevronDown } from "lucide-react";

const SelectAction = () => {
  return (
    <div className="relative w-40">
      <select className="w-full appearance-none rounded border bg-white px-3 py-1 pr-10 text-sm">
        <option value="active">Hoạt động</option>
        <option value="inactive">Dừng hoạt động</option>
        <option value="position">Thay đổi vị trí</option>
        <option value="delete-all">Xóa tất cả</option>
      </select>
      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
        <ChevronDown size={14} />
      </div>
    </div>
  );
};
export default SelectAction;
