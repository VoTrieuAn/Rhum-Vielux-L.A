import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Title from "@components/Title";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <section className="bg-background px-4.5 py-10 sm:px-6 xl:py-15">
        <div className="container mx-auto">
          <Title name="Sản phẩm rhum long an" />
          <div className="mt-10 mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Button className="flex md:hidden" />
        </div>
      </section>
    </>
  );
};
export default ProductList;
