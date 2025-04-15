import Seo from "@components/Seo";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailInfo from "./ProductDetailInfo";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = () => {
  return (
    <>
      <Seo title="Tên của sản phẩm" />
      <ProductDetailMain />
      <ProductDetailInfo />
      <RelatedProducts />
    </>
  );
};
export default ProductDetail;
