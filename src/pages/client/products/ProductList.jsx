import ProductCard from "@components/Card/ProductCard";
import SideBarFilter from "./SideBarFilter";
import { BiFilterAlt } from "react-icons/bi";
import Pagination from "@components/Pagination";
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
        .sort((a, b) => b.position - a.position),
    );
  }, [products]);
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
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </section>
    </>
  );
};
export default ProductList;
