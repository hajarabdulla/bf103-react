import { useState } from "react";
import "./App.css";
import Category from "./Category";
export interface ICategory {
  id: number;
  description: string;
  name: string;
}

function App() {
  const [counter, setCounter] = useState("skalkdl");

  const [data, setData] = useState<ICategory[]>([]);

  return (
    <div className="App">
      {counter}
      <Category title={"title"} name="sjkj" />
    </div>
  );
}

export default App;
