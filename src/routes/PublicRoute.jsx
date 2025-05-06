import DefaultLayout from "@layouts/client/DefaultLayout";
import AboutPage from "@pages/client/about";
import LoginPage from "@pages/client/auth/LoginPage";
import CartPage from "@pages/client/cart";
import ContactPage from "@pages/client/contact";
import HomePage from "@pages/client/home";
import ProductsPage from "@pages/client/products";
import ProductDetail from "@pages/client/products/[id]";
import SearchPage from "@pages/client/search";

const publicRoutes = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <DefaultLayout>
        <AboutPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <DefaultLayout>
        <ProductsPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <DefaultLayout>
        <ProductDetail />
      </DefaultLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <DefaultLayout>
        <ContactPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/search",
    element: (
      <DefaultLayout>
        <SearchPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <DefaultLayout>
        <LoginPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <DefaultLayout>
        <CartPage />
      </DefaultLayout>
    ),
  },
];

export default publicRoutes;
