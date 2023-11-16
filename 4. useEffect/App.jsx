import React, { useEffect, useState } from "react";
import Home from "./Home";

const App = () => {
  //   const [counter, setCounter] = useState(0);
  //   const [number, setNumber] = useState(0);

  //   const increaseCount = () => {
  //     setCounter(counter + 1);
  //   };
  //   const decreaseCount = () => {
  //     setCounter(counter - 1);
  //   };

  //   const increaseNumber = () => {
  //     setNumber(number + 1);
  //   };

  //   useEffect(() => {
  //     console.log("I always render");
  //   });

  //   useEffect(() => {
  //     console.log("I render only once");
  //   }, []);

  //   useEffect(() => {
  //     console.log("I render when the number change");
  //   }, [number]);

  //   console.log("The page is rendered");

  const [showHome, setShowHome] = useState(true);

  const hideHome = () => {
    setShowHome(!showHome);
  };
  return (
    <div>
      {showHome ? <Home /> : ""}
      <button onClick={hideHome}>Show Home page</button>

      {/* <h1>{counter}</h1>
      <button onClick={increaseCount}>Increase Counter</button>
      <button onClick={decreaseCount}>Decrease Counter</button>

      <div>
        <h2>{number}</h2>
        <button onClick={increaseNumber}>Increase Number</button>
      </div> */}
    </div>
  );
};

export default App;
