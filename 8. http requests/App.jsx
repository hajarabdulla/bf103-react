import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Loading from "./Loading";
import CategoryTable from "./components/CategoryTable";
import CategoryForm from "./components/CategoryForm";
import { BASE_URL } from "./constanst";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setCategories(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CategoryForm getData={getData} categoryId={categoryId} />
      {error && <h1>Error</h1>}
      {loading && <Loading />}
      <Cards
        categories={categories}
        getData={getData}
        setCategoryId={setCategoryId}
      />
      {/* {loading ? <Loading /> : <CategoryTable categories={categories} />} */}
    </>
  );
};

export default App;
