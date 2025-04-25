import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactTitle = () => {
  return (
    <>
      <section className="mt-5 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-primary text-center">
            <h1 className="mb-2 text-4xl font-bold sm:text-[42px] md:text-5xl">
              LIÊN HỆ
            </h1>
            <hr className="text-secondary m-auto w-full items-center lg:w-[579px]" />
            <h1 className="mt-2 text-[16px] font-normal sm:text-[18px] lg:text-[20px]">
              Rượu Rhum Long An – Giọt ngọc quê hương, đậm đà hồn Việt.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactTitle;
