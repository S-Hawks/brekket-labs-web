import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Root from "../pages/Root/Root";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: MainLayout,
      },
      // {
      //   path: "/services",
      //   Component: Services,
      // },
      {
        path: "/contact",
        Component: Contact,
      }
    ],
  },
]);
