import BannerButton from "@components/Banner/BannerButton";
import BannerContent from "@components/Banner/BannerContent";
import BannerSubTitle from "@components/Banner/BannerSubTitle";
import BannerTitle from "@components/Banner/BannerTitle";

const BannerIntro = () => {
  return (
    <>
      <section className="bg-surface relative mt-[-68px] overflow-hidden px-4.5 py-10 pt-[108px] sm:mt-[-92px] sm:px-6 sm:pt-[152px] xl:pb-15">
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <BannerSubTitle subTitle="TRUYỀN THỐNG LÀM RƯỢU RHUM" />
              <BannerTitle
                title="RƯỢU RHUM LONG AN"
                className="mb-[15px] text-5xl sm:text-[52px] lg:text-[72px] xl:text-[92px]"
              />
              <BannerContent
                content="Rượu Rhum từ Long An – tinh hoa văn hóa, kết tinh từ bàn tay
                khéo léo và bí quyết gia truyền. Mỗi giọt rượu mang trong mình
                hương vị độc đáo, đánh thức mọi giác quan và lưu giữ trọn vẹn
                tinh thần Việt."
              />
              <BannerButton className="w-full px-[92px] md:w-fit" />
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
