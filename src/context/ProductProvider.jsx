import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch(
          "https://680cbacf2ea307e081d4de69.mockapi.io/api/v1/products",
        );
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);
  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
export default ProductProvider;

export const useProductContext = () => {
  return useContext(ProductContext);
};
