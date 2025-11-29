import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Root from "../pages/Root/Root";
import Contact from "../components/Contact/Contact";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import AboutUs from "../components/AboutUs/AboutUs";
import Login from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardRoot from "../pages/Root/DashboardRoot";
import Users from "../components/Dashboard/Users/Users";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import PrivateRoute from "../provider/PrivateRoute";
import AddReviews from "../components/Dashboard/Reviews/AddReviews";
import AllReviews from "../components/Dashboard/Reviews/AllReviews";
import AddProducts from "../components/Dashboard/Products/AddProducts";
import AllProducts from "../components/Dashboard/Products/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: MainLayout,
      },
      {
        path: "/services",
        loader: () => fetch("/Services.json"),
        Component: ServicesPage,
      },
      {
        path: "/service-details/:serviceId",
        loader: () => fetch("/Services.json"),
        Component: ServiceDetails,
      },
      {
        path: "/products",
        loader: () => fetch("http://localhost:3000/products"),
        Component: Products,
      },
      {
        path: "/products-details/:productId",
        loader: () => fetch("http://localhost:3000/products"),
        Component: ProductDetails,
      },
      {
        path: "/blog",
        loader: () => fetch("/Blogs.json"),
        Component: Blogs,
      },
      {
        path: "/about",
        loader: () => fetch("/AboutUs.json"),
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardRoot></DashboardRoot>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardLayout,
      },
      {
        path: "users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
      {
        path: "products/add",
        Component: AddProducts,
      },
      {
        path: "products/all",
        loader: () => fetch("http://localhost:3000/products"),
        Component: AllProducts,
      },
      {
        path: "reviews/add",
        Component: AddReviews,
      },
      {
        path: "reviews/all",
        loader: () => fetch("http://localhost:3000/reviews"),
        Component: AllReviews,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
