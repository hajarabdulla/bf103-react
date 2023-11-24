import React, { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import Todos from "./Todos";

const App = () => {
  console.log("APP rendered");

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const filteredData = useMemo(() => {
    return todos.filter((t) => t.title.toLowerCase().includes(searchValue));
  }, [todos, searchValue]);

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

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Todos todos={filteredData} />
    </div>
  );
};

export default App;
