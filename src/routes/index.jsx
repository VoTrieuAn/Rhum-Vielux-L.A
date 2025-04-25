import { RouterProvider, createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoute";
import privateRoutes from "./PrivateRoute";
import PrivateRoute from "@components/PrivateRoute";

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes.map((route) => ({
    ...route,
    element: <PrivateRoute>{route.element}</PrivateRoute>,
  })),
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
