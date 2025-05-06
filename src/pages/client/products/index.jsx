import Seo from "@components/Seo";
import BannerIntro from "./BannerIntro";
import ProductList from "./ProductList";
import { useProductContext } from "@context/ProductProvider";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const { products } = useProductContext();
  const [productFilter, setProductFilter] = useState(products);
  useEffect(() => {
    setProductFilter(
      products
        .filter(
          (product) => product.status === "active" && product.deleted === false,
        )
        .sort((a, b) => b.position - a.position),
    );
  }, [products]);

  return (
    <>
      <Seo title="Sản phẩm" />
      <BannerIntro />
      <ProductList
        products={productFilter}
        setProductFilter={setProductFilter}
      />
    </>
  );
};
export default ProductsPage;
