import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/index.routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStoage";
import axios from "axios";
import { BASE__URL } from "./env";

const router = createBrowserRouter(ROUTES);
function App() {
  const { setItem, getItem, removeItem } = useLocalStorage("basketItems");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [basketItems, setBasketItems] = useState(getItem() ? getItem() : []);
  const addToBasket = (product) => {
    const target = basketItems.find((item) => item.product.id == product.id);
    if (!target) {
      const basketItem = {
        id: Date.now(),
        product: product,
        count: 1,
        totalPrice: product.unitPrice,
      };
      setBasketItems([...basketItems, basketItem]);
      setItem([...basketItems, basketItem]);
    } else {
      target.count = target.count + 1;
      target.totalPrice = target.product.unitPrice * target.count;
      setBasketItems([...basketItems]);
      setItem([...basketItems]);
    }
  };
  const removeItemFromBasket = (id) => {
    const target = basketItems.find((item) => item.id == id);
    const indexOfTarget = basketItems.indexOf(target);
    basketItems.splice(indexOfTarget, 1);
    setBasketItems([...basketItems]);
    setItem([...basketItems]);
  };
  const getData = async () => {
    const response = await axios.get(BASE__URL);
    setData(response.data);
    setLoading(false);
    setError("");
    return response.data;
  };
  useEffect(() => {
    getData();
  }, []);
  const ContextData = {
    setItem,
    getItem,
    removeItem,
    data,
    setData,
    removeItemFromBasket,
    addToBasket,
    loading,
    setLoading,
    error,
    setError,
    basketItems,
    setBasketItems,
  };
  return (
    <MainContext.Provider value={ContextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
