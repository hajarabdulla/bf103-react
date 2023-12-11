import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  descreaseCounter,
  increaseCounter,
} from "./redux/features/counterSlice";
import Form from "./components/Form";
import { deleteCategory, getCategory } from "./redux/features/categorySlice";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}

      <h1>counter: {counter} </h1>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(descreaseCounter())}>Descrease</button>

      <Form />

      {category?.loading ? (
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
      )}
    </div>
  );
};

export default App;
