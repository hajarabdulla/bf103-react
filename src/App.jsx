import React from "react";
import useFetch from "./hooks/useFetch";
import useButton from "./hooks/useButton";

const App = () => {
  const [loading, error, response] = useFetch(
    "https://northwind.vercel.app/api/categories"
  );

  //   const result = useFetch("https://northwind.vercel.app/api/categories");
  //   console.log(result);

  const [state, show, hide, toggle] = useButton();

  return (
    <div>
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <button onClick={toggle}>Toggle</button>

      {state && <h1>Hello</h1>}

      {response.map((r) => (
        <div key={r.id}>
          <h1>{r.id}</h1>
          <p>{r.name}</p>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
