import { lazy } from "react";
import RouteWrapper from "./RouteWrapper";

const Cart = lazy(() => import("../pages/cart/Cart"));
const Checkout = lazy(() => import("../pages/checkout/Checkout"));
const Catalog = lazy(() => import("../pages/catalog/Catalog"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const DeliveryPay = lazy(() => import("../pages/deliveryPay/DeliveryPay"));
const Storage = lazy(() => import("../pages/storage/Storage"));
const Terms = lazy(() => import("../pages/terms/Terms"));
const About = lazy(() => import("../pages/about/About"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const Post = lazy(() => import("../pages/blogPostsSingle/Post"));
const SingleProduct = lazy(() =>
  import("../pages/singleProduct/SingleProduct")
);
const Home = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Auth = lazy(() => import("../pages/auth/Auth"));
const Profile = lazy(() => import("../pages/profile/Profile"));

const routes = (props) => [
  { path: "/", element: <Home />, exact: true },
  { path: "/contact", element: <Contact />, exact: true },
  { path: "/terms", element: <Terms />, exact: true },
  { path: "/storage", element: <Storage />, exact: true },
  { path: "/deliverypay", element: <DeliveryPay />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "/trade-in", element: <Catalog />, exact: true },
  { path: "/bicycles", element: <Catalog />, exact: true },
  { path: "/accessories", element: <Catalog />, exact: true },
  { path: "/equipment", element: <Catalog />, exact: true },
  { path: "/catalog/:slug", element: <SingleProduct />, exact: true },
  { path: "/cart", element: <Cart />, exact: true },
  { path: "/checkout", element: <Checkout />, exact: true },
  { path: "/blog", element: <Blog />, exact: true },
  { path: "/post", element: <Post />, exact: true },
  { path: "/blog/:slug", element: <Post />, exact: true },
  {
    path: "/authentication",
    element: <RouteWrapper Component={Auth} {...props} />,
    exact: true,
  },
  {
    path: "/profile",
    element: <RouteWrapper Component={Profile} {...props} />,
    exact: true,
  },
  { path: "*", element: <NotFound />, exact: true },
];

export default routes;
