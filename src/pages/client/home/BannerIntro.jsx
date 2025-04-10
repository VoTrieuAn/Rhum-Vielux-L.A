import { Link } from "react-router-dom";

const BannerIntro = () => {
  return (
    <>
      <section className="bg-surface relative mt-[-92px] pt-[152px] pb-15">
        <div className="relative z-1 container mx-auto xl:px-6">
          <div className="flex items-center gap-10">
            <div className="w-[50%]">
              <h3 className="text-secondary mb-[30px] text-2xl font-normal tracking-[10px] uppercase">
                TRUYỀN THỐNG LÀM RƯỢU RHUM
              </h3>
              <h2 className="text-primary text-[92px] leading-[120px] font-normal">
                RƯỢU RHUM LONG AN
              </h2>
              <p className="mb-11.5 text-justify text-[20px] leading-10 font-normal">
                Rượu Rhum từ Long An – tinh hoa văn hóa, kết tinh từ bàn tay
                khéo léo và bí quyết gia truyền. Mỗi giọt rượu mang trong mình
                hương vị độc đáo, đánh thức mọi giác quan và lưu giữ trọn vẹn
                tinh thần Việt.
              </p>
              <Link
                to={"/about"}
                className="hover:bg-primary border-y px-[92px] py-4.5 text-2xl font-normal transition-colors duration-300 hover:text-white"
              >
                XEM CÁCH LÀM
              </Link>
            </div>
            <div className="w-[50%]">
              <div className="relative">
                <div className="relative z-10 h-[695px] overflow-hidden">
                  <img
                    src="/banner/rhum-item-banner.png"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <img
                  src="/banner/bird-banner.png"
                  alt=""
                  className="absolute top-[-50px] left-[10%] z-1 h-[318px]"
                />
                <img
                  src="/banner/flower-banner.png"
                  alt=""
                  className="absolute top-[-22px] z-1 h-[564px]"
                />
                <img
                  src="/banner/sugarcane-bush-banner.png"
                  alt=""
                  className="absolute top-0 left-[40%] z-1 h-[592px]"
                />
                <img
                  src="/banner/sugarcane-banner.png"
                  alt=""
                  className="absolute top-[60%] left-[10%] z-1 h-[340px]"
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
