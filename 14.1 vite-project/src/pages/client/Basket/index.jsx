import React, { useContext, useEffect } from "react";
import { MainProvider } from "../../../context/contextProvider";

const index = () => {
  const { basket } = useContext(MainProvider);

  return (
    <div>
      {basket?.map((item) => (
        <div
          key={item?.id}
          className="border border-solid border-red-500 w-1/2 my-3"
        >
          <h4>Id: {item?.id}</h4>
          <h5>Order Id: {item?.data?.id}</h5>
          <p>Order Name: {item?.data?.name}</p>
          <button>{item?.count}</button>
        </div>
      ))}
    </div>
  );
};

export default index;
