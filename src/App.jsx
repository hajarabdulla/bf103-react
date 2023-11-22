import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import Todos from "./Todos";

const App = () => {
  console.log("APP rendered");

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState([]);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setTodos([...todos, { title: inputValue }]);
    },
    [inputValue]
  );

  return (
    <div>
      <Header />
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>

      <AddForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      />

      <Todos todos={todos} />
    </div>
  );
};

export default App;
