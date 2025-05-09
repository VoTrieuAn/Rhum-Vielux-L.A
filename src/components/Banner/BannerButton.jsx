import { Link } from "react-router-dom";

const BannerButton = ({ className = "" }) => {
  return (
    <>
      <Link
        to={"/about"}
        className={`hover:bg-primary transition-colors-300 inline-block border-y py-3 text-center text-[20px] font-normal text-nowrap hover:text-white lg:py-4.5 lg:text-2xl ${className}`}
      >
        XEM CÁCH LÀM
      </Link>
    </>
  );
};
export default BannerButton;
