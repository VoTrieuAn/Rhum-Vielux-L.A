import { PREFIX_ADMIN } from "@config/system";
import DefaultLayout from "@layouts/admin/DefaultLayout";
import DashboardPage from "@pages/admin/dashboard";
import ProductsPage from "@pages/admin/product";
import ProductDetailPage from "@pages/admin/product/[id]";
import ProductCreatePage from "@pages/admin/product/create";
import ProductEditPage from "@pages/admin/product/edit";

const privateRoutes = [
  {
    path: `/${PREFIX_ADMIN}/dashboard`,
    element: (
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    ),
  },
  {
    path: `/${PREFIX_ADMIN}/products`,
    element: (
      <DefaultLayout>
        <ProductsPage />
      </DefaultLayout>
    ),
  },
  {
    path: `/${PREFIX_ADMIN}/products/create`,
    element: (
      <DefaultLayout>
        <ProductCreatePage />
      </DefaultLayout>
    ),
  },
  {
    path: `/${PREFIX_ADMIN}/products/:id/edit`,
    element: (
      <DefaultLayout>
        <ProductEditPage />
      </DefaultLayout>
    ),
  },
  {
    path: `/${PREFIX_ADMIN}/products/:id`,
    element: (
      <DefaultLayout>
        <ProductDetailPage />
      </DefaultLayout>
    ),
  },
];

export default privateRoutes;
