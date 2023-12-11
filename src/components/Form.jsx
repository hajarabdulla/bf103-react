import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../redux/features/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const [value, setValue] = useState("");

  const addTask = () => {
    dispatch(
      addTodo({
        title: value,
        id: Date.now(),
        isComplete: false,
      })
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {todo.map((item) => (
          <div>
            <h1>{item?.title}</h1>
            <p>{item?.isComplete ? "completed" : "not Complete"}</p>
            <button onClick={() => dispatch(completeTodo(item?.id))}>
              Complete task
            </button>
            <button onClick={() => dispatch(deleteTodo(item?.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
