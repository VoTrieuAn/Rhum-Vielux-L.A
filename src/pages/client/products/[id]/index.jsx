import Seo from "@components/Seo";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailInfo from "./ProductDetailInfo";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${id}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);
  return (
    <>
      <Seo title={product.name} />
      <ProductDetailMain product={product} />
      <ProductDetailInfo description={product.description} />
      <RelatedProducts />
    </>
  );
};
export default ProductDetail;
