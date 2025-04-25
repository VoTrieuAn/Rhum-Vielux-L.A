import Button from "@components/Button";
import ProductCard from "@components/Card/ProductCard";
import Pagination from "@components/Pagination";
import { useLocation } from "react-router-dom";
const SearchProductList = () => {
  const location = useLocation();
  const searchValue = location?.state.search || "";

  console.log(searchValue);

  return (
    <>
      <section className="p-normal">
        <div className="container mx-auto">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};
export default SearchProductList;
