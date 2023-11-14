import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: Date.now(), title: inputValue }]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" onInput={handleChange} value={inputValue} />
        <button>Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>

      <button onClick={() => setOpenModal(true)}>Show Modal</button>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default App;
