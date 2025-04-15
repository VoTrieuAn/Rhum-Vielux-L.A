import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Title from "@components/Title";

const ProductList = () => {
  return (
    <>
      <section className="bg-background p-normal">
        <div className="container">
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
