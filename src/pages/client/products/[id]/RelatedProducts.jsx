import ProductCard from "@components/Card/ProductCard";

const RelatedProducts = () => {
  return (
    <>
      <section className="p-normal">
        <div className="container">
          <div className="text-primary mb-5 text-2xl font-bold">
            Xem thêm các loại rượu
          </div>
          <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default RelatedProducts;
