import Seo from "@components/Seo";
import BannerIntro from "./BannerIntro";
import ProductList from "./ProductList";

const ProductsPage = () => {
  return (
    <>
      <Seo title="Sản phẩm" />
      <BannerIntro />
      <ProductList />
    </>
  );
};
export default ProductsPage;
