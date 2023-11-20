import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import CategoryTable from "./CategoryTable";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://northwind.vercel.app/api/categories"
      );
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
      {error && <h1>Error</h1>}
      {loading ? <Loading /> : <CategoryTable categories={categories} />}
      {/* <Cards categories={categories} /> */}
    </>
  );
};

export default App;
