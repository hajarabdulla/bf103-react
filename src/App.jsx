import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  descreaseCounter,
  increaseCounter,
} from "./redux/features/counterSlice";
import Form from "./components/Form";
import { deleteCategory, getCategory } from "./redux/features/categorySlice";
import axios from "axios";
import { Helmet } from "react-helmet";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const category = useSelector((state) => state.category);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getCategory());

    const getUsers = async () => {
      const res = await axios.get("http://localhost:8080/users");
      setData(res.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>

      <h1>counter: {counter} </h1>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(descreaseCounter())}>Descrease</button>

      <Form />

      {/* {category?.loading ? (
        <h1>Loading...</h1>
      ) : (
        category?.data?.map((item) => {
          return (
            <div key={item?.id}>
              <span>
                {item?.id} - {item?.name}
              </span>
              <button onClick={() => dispatch(deleteCategory(item?.id))}>
                Delete
              </button>
            </div>
          );
        })
      )} */}
    </div>
  );
};

export default App;
