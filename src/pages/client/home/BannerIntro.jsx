import { Link } from "react-router-dom";

const BannerIntro = () => {
  return (
    <>
      <section className="bg-surface relative mt-[-68px] overflow-hidden px-4.5 py-10 pt-[108px] sm:mt-[-92px] sm:px-6 sm:pt-[152px] xl:pb-15">
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <h3 className="text-secondary mb-[15px] text-[16px] font-normal tracking-[10px] uppercase sm:text-[18px] lg:mb-[30px] lg:text-[22px] xl:text-2xl">
                TRUYỀN THỐNG LÀM RƯỢU RHUM
              </h3>
              <h1 className="text-primary mb-[15px] text-5xl leading-16 font-normal sm:mb-1 sm:text-[52px] sm:leading-normal lg:text-[72px] xl:text-[92px]">
                RƯỢU RHUM LONG AN
              </h1>
              <p className="mb-10 text-justify text-[16px] leading-8 font-normal sm:mb-11.5 sm:text-[20px] sm:leading-10">
                Rượu Rhum từ Long An – tinh hoa văn hóa, kết tinh từ bàn tay
                khéo léo và bí quyết gia truyền. Mỗi giọt rượu mang trong mình
                hương vị độc đáo, đánh thức mọi giác quan và lưu giữ trọn vẹn
                tinh thần Việt.
              </p>
              <Link
                to={"/about"}
                className="hover:bg-primary inline-block w-full border-y px-[92px] py-3 text-center text-[20px] font-normal text-nowrap transition-colors duration-300 hover:text-white lg:py-4.5 lg:text-2xl"
              >
                XEM CÁCH LÀM
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 h-auto w-full overflow-hidden">
                <img
                  src="/banner/banner-main.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/banner/village-banner.png"
          alt=""
          className="absolute bottom-0 left-0 z-[0] object-cover"
        />
      </section>
    </>
  );
};
export default BannerIntro;
