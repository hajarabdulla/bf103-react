import React, { memo } from "react";

const AddForm = ({ handleChange, handleSubmit, inputValue }) => {
  console.log("ADD FORM rendered");
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button>Add</button>
    </form>
  );
};

export default memo(AddForm);
