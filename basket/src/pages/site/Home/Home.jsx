import React, { useContext } from "react";
import MainContext from "../../../context/context";

const Home = () => {
  const { data, addToBasket } = useContext(MainContext);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {item.name} <span>{item.unitPrice} AZN</span>{" "}
              <button onClick={() => addToBasket(item)}>add to basket</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
