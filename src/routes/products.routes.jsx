import ProductsPage from "@pages/client/products";
import ProductDetail from "@pages/client/products/[id]";

const productsRoutes = [
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
];
export default productsRoutes;
