import React, { useState } from "react";

const App = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameValidation, setNameValidation] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [emailRegexVal, setEmailRegexVal] = useState(false);

  const checkValidation = () => {
    if (!nameValue.trim()) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }

    if (!emailValue.trim()) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }

    if (emailValue.trim()) {
      checkEmailRegEx();
    }
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameValidation(false);
  };

  const checkEmailRegEx = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailValue.match(mailformat)) {
      setEmailRegexVal(false);
    } else {
      setEmailRegexVal(true);
    }
  };

  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" onChange={handleNameChange} value={nameValue} />
      {nameValidation ? (
        <p style={{ color: "red" }}>This field is required</p>
      ) : (
        ""
      )}
      <br />

      <label htmlFor="">Email</label>
      <br />
      <input
        type="text"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      {emailValidation ? (
        <p style={{ color: "red" }}>This field is required</p>
      ) : (
        ""
      )}
      {emailRegexVal ? <p style={{ color: "red" }}>Invalid Email</p> : ""}
      <br />
      <button onClick={checkValidation}>Add</button>
    </div>
  );
};

export default App;
