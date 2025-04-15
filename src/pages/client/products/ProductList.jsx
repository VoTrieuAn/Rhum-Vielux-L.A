import ProductCard from "@components/Card/ProductCard";
import SideBarFilter from "./SideBarFilter";
import { BiFilterAlt } from "react-icons/bi";
import Pagination from "@components/Pagination";

const ProductList = () => {
  return (
    <>
      <section className="p-normal">
        <div className="container">
          <div className="flex gap-5">
            {/* Sidebar PC */}
            <div className="hidden md:block md:flex-1">
              <SideBarFilter />
            </div>
            <div className="flex-4">
              <div className="text-primary flex items-center justify-between text-2xl">
                <h2 className="font-bold">Rượu Rhum</h2>
                {/* Sidebar Mobile */}
                <BiFilterAlt className="block md:hidden" />
              </div>
              <div className="mt-10 mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
};
export default ProductList;
