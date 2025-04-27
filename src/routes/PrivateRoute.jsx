import DefaultLayout from "@layouts/admin/DefaultLayout";
import DashboardPage from "@pages/admin/dashboard";
import ProductsPage from "@pages/admin/product";
import ProductDetailPage from "@pages/admin/product/[id]";
import ProductCreatePage from "@pages/admin/product/create";

const privateRoutes = [
  {
    path: "/admin/dashboard",
    element: (
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <DefaultLayout>
        <ProductsPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/products/create",
    element: (
      <DefaultLayout>
        <ProductCreatePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/products/:id",
    element: (
      <DefaultLayout>
        <ProductDetailPage />
      </DefaultLayout>
    ),
  },
];

export default privateRoutes;
