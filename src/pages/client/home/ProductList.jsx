import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Title from "@components/Title";
import { useProductContext } from "@context/ProductProvider";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { products } = useProductContext();
  const [productFilter, setProductFilter] = useState(products);
  useEffect(() => {
    setProductFilter(
      products
        .filter(
          (product) => product.status === "active" && product.deleted === false,
        )
        .sort((a, b) => b.position - a.position)
        .slice(0, 4),
    );
  }, [products]);
  return (
    <>
      <section className="bg-background p-normal">
        <div className="container">
          <Title name="Sản phẩm rhum long an" />
          <div className="mt-10 mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {productFilter.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                origin={item.origin}
                volume={item.volume}
                alcohol={item.alcohol}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <Button className="flex md:hidden" />
        </div>
      </section>
    </>
  );
};
export default ProductList;
