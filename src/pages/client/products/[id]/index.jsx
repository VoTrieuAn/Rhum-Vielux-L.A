import Seo from "@components/Seo";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailInfo from "./ProductDetailInfo";
import RelatedProducts from "./RelatedProducts";
import { useProductContext } from "@context/ProductProvider";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products } = useProductContext();
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  return (
    <>
      <Seo title={product.name} />
      <ProductDetailMain />
      <ProductDetailInfo />
      <RelatedProducts />
    </>
  );
};
export default ProductDetail;
