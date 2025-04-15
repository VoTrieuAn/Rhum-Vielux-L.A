import BannerButton from "@components/Banner/BannerButton";
import BannerContent from "@components/Banner/BannerContent";
import BannerSubTitle from "@components/Banner/BannerSubTitle";
import BannerTitle from "@components/Banner/BannerTitle";

const BannerIntro = () => {
  return (
    <>
      <section className="p-normal relative">
        <div className="container">
          <div className="bg-surface relative grid grid-cols-1 items-center rounded-[20px] px-15 py-7 md:grid-cols-2 md:px-25 md:py-0">
            <div className="relative z-10">
              <BannerTitle
                title="RƯỢU RHUM LONG AN"
                className="text-[35px] font-normal md:text-[40px] xl:text-5xl"
              />
              <BannerContent content="Rượu Rhum Long An – Giọt ngọc quê hương, đậm đà hồn Việt." />
              <BannerButton className="w-full px-0 sm:px-[92px] md:w-fit" />
            </div>
            <div className="relative z-10">
              <div className="relative z-10 h-auto w-full overflow-hidden text-left md:ml-auto md:w-[340px] lg:w-[440px]">
                <img
                  src="/banner/banner-main.png"
                  alt=""
                  className="image-contain"
                />
              </div>
            </div>
            <img
              src="/banner/village-banner.png"
              alt=""
              className="absolute bottom-0 left-0 z-0 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerIntro;
