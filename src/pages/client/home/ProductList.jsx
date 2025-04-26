import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Title from "@components/Title";
import { useProductContext } from "@context/ProductProvider";

const ProductList = () => {
  const { products } = useProductContext();
  const productsLimit = products.slice(0, 4);
  return (
    <>
      <section className="bg-background p-normal">
        <div className="container">
          <Title name="Sản phẩm rhum long an" />
          <div className="mt-10 mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
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
          <Button className="flex md:hidden" />
        </div>
      </section>
    </>
  );
};
export default ProductList;
