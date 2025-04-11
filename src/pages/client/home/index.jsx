import BannerAbout from "./BannerAbout";
import BannerIntro from "./BannerIntro";
import ProductAdvantage from "./ProductAdvantage";
import ProductList from "./ProductList";
import ProductReview from "./ProductReview";

const HomePage = () => {
  return (
    <>
      <BannerIntro />
      <BannerAbout />
      <ProductList />
      <ProductAdvantage />
      <ProductReview />
    </>
  );
};
export default HomePage;
