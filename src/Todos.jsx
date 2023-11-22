import React, { memo } from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  console.log("TODOS rendered");
  return (
    <>
      {todos.map((item, index) => (
        <Todo key={index} item={item} />
      ))}
    </>
  );
};

export default memo(Todos);
