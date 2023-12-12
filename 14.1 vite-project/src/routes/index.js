import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Contact from "../pages/client/Contact";
import Basket from "../pages/client/Basket";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import Order from "../pages/admin/Order";
import AddProduct from "../pages/admin/Product/AddProduct";

export const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
];
