import { PRODUCT_DETAILS } from "@libs/constant";

const ProductDetailMain = ({ product }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Chi tiết sản phẩm</h1>

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
                <div className="text-[14px]">
                  <h1 className="mb-1.5 text-[20px] font-bold lg:text-2xl">
                    {product.name}
                  </h1>
                  <p className="text-error-500 mb-3 text-[18px] font-bold lg:text-[20px]">
                    {product.price === 0
                      ? "Liên hệ"
                      : `${product.price?.toLocaleString("vi-VN")}đ`}
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
                <div className="mt-4 grid grid-cols-3 items-center gap-2 px-0 text-[14px] lg:px-3">
                  <div className="text-error-300 font font-medium">
                    Số lượng:
                  </div>
                  <div className="text-dark col-span-2 grid grid-cols-1 items-center gap-2 lg:flex lg:grid-cols-2 lg:gap-3">
                    <div className="lg:flex-1">
                      {product.stock} sản phẩm có sẵn
                    </div>
                  </div>
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
