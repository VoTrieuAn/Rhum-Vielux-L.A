import { Link } from "react-router-dom";

const ProductCard = ({ id, name, origin, volume, alcohol, price, image }) => {
  return (
    <>
      <Link
        to={`/products/${id}`}
        className="rounded-[12px] p-2 shadow-lg transition duration-300 hover:scale-105"
      >
        <div className="h-auto w-full overflow-hidden rounded-[10px]">
          <img src={image} alt={name} className="image-cover" />
        </div>
        <div className="p-2 text-[12px] sm:text-[16px]">
          {/* Rượu Cam Giá - Long An */}
          <h3 className="text-primary line-clamp-1 font-bold uppercase">
            {name}
          </h3>
          {/* Việt Nam */}
          <p className="font-medium text-[#C0392B]">
            Xuất xứ: <span className="text-[#667479]">{origin}</span>
          </p>
          {/* 300ml */}
          <p className="font-medium text-[#C0392B]">
            Dung dịch: <span className="text-[#667479]">{volume}</span>
          </p>
          <p className="font-medium text-[#C0392B]">
            Nồng độ: <span className="text-[#667479]">≥ {alcohol}%...</span>
          </p>
          <p className="font-normal text-[#E50000]">
            {price === 0 ? "Liên hệ" : `${price}đ`}
          </p>
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
