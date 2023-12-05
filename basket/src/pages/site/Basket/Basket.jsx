import React, { useContext } from "react";
import MainContext from "../../../context/context";

const Basket = () => {
  const { basketItems, removeItemFromBasket } = useContext(MainContext);
  let basketTotalPrice = 0;
  return (
    <div>
      <ul>
        {basketItems.map((basketItem, index) => {
          basketTotalPrice += basketItem.totalPrice;
          return (
            <li key={index}>
              {basketItem.product.name} {basketItem.count} eded{" "}
              {basketItem.totalPrice} AZN
              <button
                onClick={() => {
                  removeItemFromBasket(basketItem.id);
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <h1>Total Price: {basketTotalPrice} AZN</h1>
    </div>
  );
};

export default Basket;
