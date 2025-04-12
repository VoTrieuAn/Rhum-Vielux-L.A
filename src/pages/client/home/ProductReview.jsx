import Title from "@components/Title";
import { REVIEW_ITEMS } from "@libs/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "@components/Card/ReviewCard";
const ProductReview = () => {
  return (
    <>
      <section className="bg-background relative px-4.5 py-10 sm:px-6 xl:py-15">
        <div className="relative z-10 container mx-auto">
          <Title
            name="Cảm nhận của khách hàng về Rượu Rhum L.A"
            button={false}
          />
          {/* PC */}
          <div className="mt-10 mb-5 hidden grid-cols-1 gap-3 md:grid md:grid-cols-3 lg:gap-5">
            {REVIEW_ITEMS.map((item) => (
              <ReviewCard key={item.id} data={item} />
            ))}
          </div>
          {/* Mobile */}
          <div className="mt-10 block md:hidden">
            <Swiper
              pagination={{
                dynamicBullets: false,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {REVIEW_ITEMS.map((item) => (
                <SwiperSlide key={item.id}>
                  <ReviewCard data={item} mobile />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <img
          src="/banner/village-banner.png"
          alt=""
          className="absolute bottom-0 left-0 z-0 object-cover"
        />
      </section>
    </>
  );
};
export default ProductReview;
