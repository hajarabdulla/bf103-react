import React, { useContext, useState } from "react";
import { MainProvider } from "../../../context/contextProvider";
import axios from "axios";

const Home = () => {
  const { products, basket } = useContext(MainProvider);

  const addToBasket = async (data) => {
    const isExist = basket?.some((item) => item?.data?.id == data?.id);

    if (isExist) {
      const existanceProduct = basket.find(
        (item) => item?.data?.id == data?.id
      );

      await axios.put(`http://localhost:8080/basket/${existanceProduct?.id}`, {
        ...existanceProduct,
        count: existanceProduct?.count + 1,
      });
    } else {
      await axios.post("http://localhost:8080/basket", {
        id: Math.random(),
        data,
        count: 1,
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-5">
      {products.map((item) => (
        <div key={item.id} className="border border-solid border-red-500 w-44">
          <h3>{item.name}</h3>
          <p>{item.unitPrice}</p>
          <button onClick={() => addToBasket(item)}>Add to basket</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
