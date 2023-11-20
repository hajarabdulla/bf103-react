import React, { useState } from "react";

const App = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameValidation, setNameValidation] = useState(true);

  const checkValidation = () => {
    if (nameValue.trim()) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameValidation(true);
  };

  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" value={nameValue} onChange={handleNameChange} />
      {!nameValidation ? (
        <p style={{ color: "red" }}>This field is required</p>
      ) : (
        ""
      )}
      <br />

      <button onClick={checkValidation}>Add</button>
    </div>
  );
};

export default App;
