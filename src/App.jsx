import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./constanst";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
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

  const handleEdit = (name, desc, id) => {
    setNameValue(name);
    setDescValue(desc);
    setCategoryId(id);
  };

  const updateCategory = async () => {
    await axios.put(`${BASE_URL}/${categoryId}`, {
      name: nameValue,
      description: descValue,
    });
    getData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {error && <h1>Error</h1>}
      {loading && <h1>Loading...</h1>}

      <div action="">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
        />
        <input
          type="text"
          placeholder="desc"
          onChange={(e) => setDescValue(e.target.value)}
          value={descValue}
        />
        <button>Add</button>
        <button onClick={updateCategory}>Update</button>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}
      >
        {categories.map((item) => (
          <div style={{ width: "18rem", border: "1px solid red" }}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button
              onClick={() => handleEdit(item.name, item.description, item.id)}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
