import BannerAbout from "./BannerAbout";
import BannerIntro from "./BannerIntro";
import ProductAdvantage from "./ProductAdvantage";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <>
      <BannerIntro />
      <BannerAbout />
      <ProductList />
      <ProductAdvantage />
    </>
  );
};
export default HomePage;
