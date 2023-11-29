import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <label htmlFor="">Email</label>
      <input type="text" />
      <br />
      <label htmlFor="">Password</label>
      <input type="text" />
      <br />
      <button onClick={() => navigate("/")}>Sign in</button>
    </div>
  );
};

export default Login;
