import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  return (
    <>
      <div className="mt-3 px-4 sm:px-6">
        <div className="container">
          <div className="flex items-center gap-3.5 pl-1 text-[#667479]">
            <Link to="/">Trang chủ</Link>
            <IoIosArrowForward />
            <div className="cursor-pointer font-bold">Tìm kiếm</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchHeader;
