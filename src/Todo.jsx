import React from "react";

const Todo = ({ item }) => {
  console.log("TODO ITEM rendered");

  return <div>{item.title}</div>;
};

export default Todo;
