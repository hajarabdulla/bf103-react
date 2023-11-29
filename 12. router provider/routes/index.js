import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

export const ROUTES = [
  {
    path: "",
    element: <App />,
    children: [
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
];
