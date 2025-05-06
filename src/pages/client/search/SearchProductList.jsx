import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Pagination from "@components/Pagination";
import { useProductContext } from "@context/ProductProvider";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const SearchProductList = () => {
  const { products } = useProductContext();
  const location = useLocation();
  const searchValue = location.state?.search || "";
  const [productFilter, setProductFilter] = useState([]);

  useEffect(() => {
    setProductFilter(products);
  }, [products]);

  return (
    <>
      <section className="p-normal">
        <div className="container mx-auto">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {productFilter
              .filter((item) => item.slug.includes(searchValue))
              .map((item) => (
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
          <Pagination />
        </div>
      </section>
    </>
  );
};
export default SearchProductList;
