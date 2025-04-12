import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@components/Button";

const Title = ({ name, button = true }) => {
  return (
    <>
      <div
        className={`flex items-center justify-center border-b-[1px] border-[#F2B545] pb-4 md:justify-between`}
      >
        <h2 className="text-primary text-4xl font-bold capitalize lg:text-5xl">
          {name}
        </h2>
        {button && <Button className="hidden md:inline-flex" />}
      </div>
    </>
  );
};
export default Title;
