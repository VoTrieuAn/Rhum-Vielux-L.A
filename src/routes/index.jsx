import { createBrowserRouter } from "react-router-dom";
import Layout from "@pages/client/layouts";
import homeRoutes from "./home.routes";
import aboutRoutes from "./about.routes";
import productsRoutes from "./products.routes";
import contactRoutes from "./contact.routes";
import searchRoutes from "./search.routes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...homeRoutes,
      ...aboutRoutes,
      ...productsRoutes,
      ...contactRoutes,
      ...searchRoutes,
    ],
  },
]);

export default router;
