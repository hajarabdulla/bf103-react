import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Login from "../pages/client/Login";
import Contact from "../pages/client/Contact";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";

export const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "/admin/products",
        element: <Products />,
      },
    ],
  },
];
