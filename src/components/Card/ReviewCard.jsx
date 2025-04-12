import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data, mobile = false }) => {
  const className = mobile
    ? "min-h-[424px] sm:min-h-[300px]"
    : "transition-transform duration-300 hover:scale-105";
  return (
    <>
      <div
        key={data.id}
        className={`bg-surface relative z-0 flex cursor-pointer flex-col gap-5.5 p-[15px] text-[14px] hover:shadow-lg lg:text-[16px] ${className}`}
      >
        <div className="border-secondary flex items-center gap-2 border-b-1 pb-7.5 lg:gap-5.5">
          <div className="h-auto w-20 overflow-hidden rounded-full lg:w-25">
            <img src={data.image} alt={data.name} className="" />
          </div>
          <div className="flex flex-col gap-2 lg:gap-3.5">
            <p className="text-primary line-clamp-1 text-[16px] font-normal lg:text-2xl lg:text-[18px]">
              {data.name}
            </p>
            <p className="text-secondary font-normal">Khách hàng</p>
            <div className="text-secondary flex gap-1.5 lg:text-[20px]">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < data.rating ? "text-[#ffc107]" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 px-5">
          <p className="text-justify leading-6.5 text-[#9E845C]">
            {data.review}
          </p>
        </div>
      </div>
    </>
  );
};
export default ReviewCard;
