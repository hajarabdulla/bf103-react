import React, { useRef } from "react";

const App = () => {
  //   let counter = useRef(0);

  //   const increaseCount = () => {
  //     counter.current += 1;

  //     console.log(counter.current);
  //   };

  const divRef = useRef(null);

  const changeStyle = () => {
    divRef.current.style.background = "red";
    divRef.current.innerText = "Hello";
  };

  return (
    <div>
      <div ref={divRef}>Box</div>
      <button onClick={changeStyle}>Change Div</button>
      {/* <h1>{counter.current}</h1>
      <button onClick={increaseCount}>Increase Count</button> */}
    </div>
  );
};

export default App;
