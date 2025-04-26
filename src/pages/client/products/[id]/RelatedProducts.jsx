import ProductCard from "@components/Card/ProductCard";
import { useProductContext } from "@context/ProductProvider";

const RelatedProducts = () => {
  const { products } = useProductContext();
  const productsLimit = products.slice(0, 4);
  return (
    <>
      <section className="p-normal">
        <div className="container">
          <div className="text-primary mb-5 text-2xl font-bold">
            Xem thêm các loại rượu
          </div>
          <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {productsLimit.map((item) => (
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
        </div>
      </section>
    </>
  );
};
export default RelatedProducts;
