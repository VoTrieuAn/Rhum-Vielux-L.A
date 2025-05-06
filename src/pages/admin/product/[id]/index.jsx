import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailInfo from "./ProductDetailInfo";

const ProductDetailPage = () => {
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
      <ProductDetailMain product={product} />
      <ProductDetailInfo description={product.description} />
    </>
  );
};
export default ProductDetailPage;
