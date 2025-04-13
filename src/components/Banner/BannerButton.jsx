import { Link } from "react-router-dom";

const BannerButton = ({ withFull = true, className = "" }) => {
  const buttonClass = withFull ? "w-full" : "w-fit";
  return (
    <>
      <Link
        to={"/about"}
        className={`hover:bg-primary inline-block ${buttonClass} border-y px-[92px] py-3 text-center text-[20px] font-normal text-nowrap transition-colors duration-300 hover:text-white lg:py-4.5 lg:text-2xl`}
      >
        XEM CÁCH LÀM
      </Link>
    </>
  );
};
export default BannerButton;
