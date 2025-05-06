import { BiFilterAlt } from "react-icons/bi";
import FilterList from "./FilterList";

const SideBarFilter = ({ setProductFilter }) => {
  return (
    <>
      <div className="sticky top-[112px] mb-5 w-full flex-wrap items-start justify-between">
        <div className="mb-3 flex items-center gap-2 text-[20px] lg:text-2xl">
          <BiFilterAlt />
          <span className="text-primary font-bold">Bộ lọc</span>
        </div>
        <FilterList setProductFilter={setProductFilter} />
      </div>
    </>
  );
};
export default SideBarFilter;
