import BannerButton from "@components/Banner/BannerButton";
import BannerContent from "@components/Banner/BannerContent";
import BannerSubTitle from "@components/Banner/BannerSubTitle";
import BannerTitle from "@components/Banner/BannerTitle";

const BannerIntro = () => {
  return (
    <>
      <section className="relative px-4.5 py-10 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-surface flex items-center justify-between rounded-[20px]">
            <div className="ml-30">
              <BannerTitle
                title="RƯỢU RHUM LONG AN"
                className="text-5xl font-normal"
              />
              <BannerContent content="Rượu Rhum Long An – Giọt ngọc quê hương, đậm đà hồn Việt." />
              <BannerButton withFull={false} />
            </div>
            <div>
              <div className="relative z-10 h-auto w-full overflow-hidden">
                <img
                  src="/banner/banner-main.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <img
              src="/banner/village-banner.png"
              alt=""
              className="absolute bottom-0 left-0 z-[0] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerIntro;
