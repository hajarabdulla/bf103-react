import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constats";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [basket, setBasket] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    setProducts(res?.data);
  };

  const getCategories = async () => {
    const res = await axios.get(`${BASE_URL}/categories`);
    setCategories(res?.data);
  };

  const getSuppliers = async () => {
    const res = await axios.get(`${BASE_URL}/suppliers`);
    setSuppliers(res?.data);
  };

  const getBasket = async () => {
    const res = await axios.get(`http://localhost:8080/basket`);
    setBasket(res?.data);
  };

  useEffect(() => {
    getProducts();
    getCategories();
    getSuppliers();
    getBasket();
  }, []);

  const values = {
    products,
    setProducts,
    categories,
    setCategories,
    suppliers,
    setSuppliers,
    basket,
    setBasket,
  };

  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  );
};

export default ContextProvider;
