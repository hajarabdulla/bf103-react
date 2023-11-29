import React from "react";
import { products } from "../../data";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} onClick={() => navigate(`/products/${p.id}`)}>
          {p.productName}
        </div>
      ))}
    </div>
  );
};

export default Products;
