import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <>
      <nav className="mt-2 flex justify-center lg:mt-5">
        <ul className="inline-flex h-10 -space-x-px text-base text-[16px] lg:text-[18px]">
          <li>
            <Link
              to="#"
              className="text-primary flex h-9 items-center justify-center px-3 font-bold hover:rounded-[8px] hover:bg-gray-200 hover:text-gray-700 lg:h-10 lg:px-4"
            >
              <FaArrowLeftLong />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-primary flex h-9 items-center justify-center px-3 font-bold hover:rounded-[8px] hover:bg-gray-200 hover:text-gray-700 lg:h-10 lg:px-4"
            >
              1
            </Link>
          </li>
          {/* Active: bg-primary hover:bg-primary/10 hover:text-primary/70 flex h-10 items-center justify-center rounded-[8px] px-4 font-bold text-white*/}
          {/* No Active: text-primary flex h-10 items-center justify-center px-4 font-bold hover:rounded-[8px] hover:bg-gray-200 hover:text-gray-700*/}
          <li>
            <Link
              to="#"
              className="bg-primary hover:bg-primary/10 hover:text-primary/70 flex h-9 items-center justify-center rounded-[8px] px-3 font-bold text-white lg:h-10 lg:px-4"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-primary flex h-9 items-center justify-center px-3 font-bold hover:rounded-[8px] hover:bg-gray-200 hover:text-gray-700 lg:h-10 lg:px-4"
            >
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
