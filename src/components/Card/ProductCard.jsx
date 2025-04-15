import { Link } from "react-router-dom";

const ProductCard = ({ name, origin, volume, alcohol, price }) => {
  return (
    <>
      <Link
        to={"/"}
        className="rounded-[12px] p-2 shadow-lg transition duration-300 hover:scale-105"
      >
        <div className="h-auto w-full overflow-hidden rounded-[10px]">
          <img src="/rhum-item.jpg" alt="" className="image-cover" />
        </div>
        <div className="p-2 text-[12px] sm:text-[16px]">
          <h3 className="text-primary line-clamp-1 font-bold uppercase">
            Rượu Cam Giá - Long An
          </h3>
          <p className="font-medium text-[#C0392B]">
            Xuất xứ: <span className="text-[#667479]">Việt Nam</span>
          </p>
          <p className="font-medium text-[#C0392B]">
            Dung dịch: <span className="text-[#667479]">300ml</span>
          </p>
          <p className="font-medium text-[#C0392B]">
            Nồng độ: <span className="text-[#667479]">≥ 26%...</span>
          </p>
          <p className="font-normal text-[#E50000]">600.000đ</p>
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
