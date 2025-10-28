import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Root from "../pages/Root/Root";
import Contact from "../components/Contact/Contact";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import AboutUs from "../components/AboutUs/AboutUs";

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
        Component: Products,
      },
      {
        path: "/blog",
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
]);
