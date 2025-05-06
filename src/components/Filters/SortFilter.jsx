import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SortFilter = ({ product, setProduct }) => {
  const [sortValue, setSortValue] = useState("position_desc");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortValue(value);
    let sortedProducts;
    switch (value) {
      case "position_desc":
        sortedProducts = [...product].sort((a, b) => b.position - a.position);
        console.log(sortedProducts);
        break;
      case "position_asc":
        sortedProducts = [...product].sort((a, b) => a.position - b.position);
        break;
      case "price_desc":
        sortedProducts = [...product].sort((a, b) => b.price - a.price);
        break;
      case "price_asc":
        sortedProducts = [...product].sort((a, b) => a.price - b.price);
        break;
      default:
        sortedProducts = product;
    }

    setProduct(sortedProducts);
  };

  const handleClear = () => {
    setProduct(product);
    setSortValue("position_desc");
    handleSort({ target: { value: "position_desc" } });
  };
  return (
    <div className="mb-4">
      <div className="mb-2 text-sm text-gray-600">Sắp xếp</div>
      <div className="flex gap-2">
        <div className="relative w-64">
          <select
            className="w-full appearance-none rounded border bg-white px-3 py-2 pr-10"
            value={sortValue}
            onChange={handleSort}
          >
            <option value="position_desc">Vị trí giảm dần</option>
            <option value="position_asc">Vị trí tăng dần</option>
            <option value="price_desc">Giá tăng dần</option>
            <option value="price_asc">Giá giảm dần</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
            <ChevronDown size={16} />
          </div>
        </div>
        <button
          className="cursor-pointer rounded bg-red-500 px-3 py-1 text-white"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
export default SortFilter;
