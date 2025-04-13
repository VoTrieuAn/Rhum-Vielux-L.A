import { FILTER_ITEMS } from "@libs/constant";
import FilterItem from "./FilterItem";

const FilterList = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {FILTER_ITEMS.map((item, index) => (
          <FilterItem key={item.id} filter={item} />
        ))}
      </div>
    </>
  );
};
export default FilterList;
