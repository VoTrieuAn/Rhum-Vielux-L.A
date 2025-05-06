import { cartInitial } from "@libs/initial-reducer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "@reducer/cartReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // ✅ Lấy giỏ hàng từ localStorage khi load trang
  const savedCart = JSON.parse(localStorage.getItem("cart")) || cartInitial;
  const [cartState, cartDispatch] = useReducer(cartReducer, savedCart);

  // ✅ Lưu giỏ hàng vào localStorage khi `cartState` thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

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
        value={{
          products,
          setProducts,
          loading,
          setLoading,
          cartState,
          cartDispatch,
        }}
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
