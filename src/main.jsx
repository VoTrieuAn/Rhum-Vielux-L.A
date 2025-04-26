import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import ProductProvider from "@context/ProductProvider";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <AppRouter />
  </ProductProvider>,
);
