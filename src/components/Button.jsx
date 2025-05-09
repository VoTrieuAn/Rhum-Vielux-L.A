import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Button = ({ className = "" }) => {
  return (
    <>
      <Link
        to={"/products"}
        className={`border-primary hover:bg-primary transition-colors-300 items-center justify-center gap-2 rounded-3xl border px-7 py-3 text-[14px] font-medium hover:text-white ${className}`}
      >
        Xem thêm <IoIosArrowForward />
      </Link>
    </>
  );
};
export default Button;
