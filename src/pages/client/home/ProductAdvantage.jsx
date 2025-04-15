import Title from "@components/Title";
import { ADVANTAGE_ITEMS } from "@libs/constant";

import "swiper/css";
import "swiper/css/pagination";

const ProductAdvantage = () => {
  return (
    <>
      <section className="bg-background p-normal">
        <div className="container">
          <Title name="Ưu Điểm Sản Phẩm" button={false} />
          <div className="mt-10 mb-5 grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-5">
            {ADVANTAGE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-surface flex flex-col items-center gap-10 py-10 sm:gap-15 lg:py-15"
              >
                <div className="h-auto w-15 overflow-hidden lg:w-20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-2xl font-normal lg:text-[28px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductAdvantage;
