import React, { useContext, useEffect } from "react";
import { MainProvider } from "../../../../context/contextProvider";

const ProductList = () => {
  const { products } = useContext(MainProvider);

  return (
    <div
      id="recipients"
      className="w-full py-8 px-20 mt-6 lg:mt-0 rounded shadow bg-white"
    >
      <table id="example" className="stripe hover w-full">
        <thead className="text-left">
          <tr>
            <th data-priority="1">Name</th>
            <th data-priority="2">Unit Price</th>
            <th data-priority="3">Quantity Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(({ id, name, unitPrice, quantityPerUnit }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{unitPrice}</td>
              <td>{quantityPerUnit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
