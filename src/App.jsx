import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  descreaseCounter,
  increaseCounter,
} from "./redux/features/counterSlice";
import Form from "./components/Form";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>counter: {counter} </h1>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(descreaseCounter())}>Descrease</button>

      <Form />
    </div>
  );
};

export default App;
