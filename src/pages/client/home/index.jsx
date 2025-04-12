import BannerAbout from "./BannerAbout";
import BannerIntro from "./BannerIntro";
import ProductAdvantage from "./ProductAdvantage";
import ProductList from "./ProductList";
import ProductReview from "./ProductReview";
import Seo from "@components/Seo";

const HomePage = () => {
  return (
    <>
      <Seo title="RƯỢU RHUM LONG AN" />
      <BannerIntro />
      <BannerAbout />
      <ProductList />
      <ProductAdvantage />
      <ProductReview />
    </>
  );
};
export default HomePage;
