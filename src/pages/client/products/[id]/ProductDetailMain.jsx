import { BsCartPlus } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { PACKAGE_PRODUCT, PRODUCT_DETAILS } from "@libs/constant";
import { draggableModal } from "@libs/sweet-alert";

const ProductDetailMain = ({ product }) => {
  const handleBuyNow = () => {
    draggableModal("Tính năng này chưa được phát triển", "info");
  };
  return (
    <>
      <section className="p-normal rounded-[20px] border border-[#EBEEEF]">
        <div className="container">
          <div className="grid grid-cols-1 justify-between gap-8 lg:grid-cols-2">
            <div className="w-full overflow-hidden rounded-[10px]">
              <img
                src={product.image}
                alt={product.name}
                className="image-cover aspect-square"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-dark mb-3 hidden items-center gap-3.5 text-[14px] lg:flex">
                  <Link to="/">Trang chủ</Link>
                  <IoIosArrowForward />
                  <Link to="/products">Sản phẩm</Link>
                  <IoIosArrowForward />
                  <div className="cursor-pointer font-bold">{product.name}</div>
                </div>
                <div className="text-[14px]">
                  <h1 className="mb-1.5 text-[20px] font-bold lg:text-2xl">
                    {product.name}
                  </h1>
                  <p className="text-error-500 mb-3 text-[18px] font-bold lg:text-[20px]">
                    {product.price === 0 ? "Liên hệ" : `${product.price}đ`}
                  </p>
                  <div className="grid grid-cols-2 items-center lg:grid-cols-3">
                    <div className="text-error-300">
                      {PRODUCT_DETAILS.map((item, index) => (
                        <div
                          key={index}
                          className="border-b-1 border-[#EBEEEF] px-0 py-1 font-medium lg:px-3"
                        >
                          {item.label}:
                        </div>
                      ))}
                    </div>
                    <div className="text-dark col-span-0 lg:col-span-2">
                      <div className="border-b-1 border-[#EBEEEF] px-3 py-1 font-medium">
                        {product.origin}
                      </div>
                      <div className="border-b-1 border-[#EBEEEF] px-3 py-1 font-medium">
                        {product.volume}ml
                      </div>
                      <div className="border-b-1 border-[#EBEEEF] px-3 py-1 font-medium">
                        ≥ {product.alcohol}%
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-4 grid grid-cols-3 items-center gap-2 px-0 text-[14px] lg:px-3">
                  <div className="text-error-300 font font-medium">
                    Chon loại hàng:
                  </div>
                  <div className="text-dark col-span-2">
                    <div className="grid grid-cols-2 gap-2 text-[14px] sm:grid-cols-3">
                      {PACKAGE_PRODUCT.map((option, index) => (
                        <button
                          key={index}
                          // active: text-error-500 border-error-500
                          className="transition-colors-300 cursor-pointer rounded-[4px] border-1 py-1"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div> */}
                <div className="mt-4 grid grid-cols-3 items-center gap-2 px-0 text-[14px] lg:px-3">
                  <div className="text-error-300 font font-medium">
                    Số lượng:
                  </div>
                  <div className="text-dark col-span-2 grid grid-cols-1 items-center gap-2 lg:flex lg:grid-cols-2 lg:gap-3">
                    <div className="flex w-fit items-center border">
                      <button className="cursor-pointer px-3 py-1 text-lg font-bold text-black">
                        −
                      </button>
                      <input
                        type="text"
                        className="text-error-500 h-full w-10 text-center outline-none"
                        defaultValue={1}
                        readOnly
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                      <button className="cursor-pointer px-3 py-1 text-lg font-bold text-black">
                        +
                      </button>
                    </div>
                    <div className="lg:flex-1">
                      {product.stock} sản phẩm có sẵn
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 items-center gap-3 text-[14px] lg:grid-cols-2 lg:gap-5">
                  <button className="transition-colors-300 border-error-500 text-error-500 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[4px] border bg-[rgba(229,0,0,.08)] py-3 hover:bg-[rgba(229,0,0,.163)]">
                    <BsCartPlus />
                    Thêm vào giỏ hàng
                  </button>
                  <button
                    className="transition-colors-300 bg-error-500 flex w-full cursor-pointer items-center justify-center rounded-[4px] py-3 text-white hover:bg-[rgba(229,0,0,0.7)]"
                    onClick={handleBuyNow}
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-5 text-[20px]">
                <div className="flex items-center gap-2 text-[14px] font-bold">
                  <LuShare2 />
                  Chia sẻ:
                </div>
                <div className="text-dark flex items-center gap-4.5">
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetailMain;
