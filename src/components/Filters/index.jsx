import State from "./State";
import SearchFilter from "./SearchFilter";
import SortFilter from "./SortFilter";

const Filters = ({ product, setProduct }) => {
  return (
    <div className="mb-6">
      <div className="mb-2 text-sm text-gray-600">Bộ lọc và tìm kiếm</div>
      <div className="flex items-center justify-between">
        <State />
        {/* Search */}
        <SearchFilter />
      </div>
      {/* Sort */}
      <SortFilter product={product} setProduct={setProduct} />
    </div>
  );
};
export default Filters;
