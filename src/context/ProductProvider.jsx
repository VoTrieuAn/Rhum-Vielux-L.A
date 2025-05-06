import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products",
        );
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [loading]);
  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts, loading, setLoading }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
export default ProductProvider;

export const useProductContext = () => {
  return useContext(ProductContext);
};
