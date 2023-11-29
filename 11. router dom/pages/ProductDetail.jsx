import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

const ProductDetail = () => {
  const params = useParams();
  const product = products.find((elem) => params.productId == elem.id);

  return (
    <div>
      <h1>{product.id}</h1>
      <h3>Name: {product.productName}</h3>
      <p>Price: {product.productPrice}</p>
      <p>Desc: {product.productDesc}</p>
    </div>
  );
};

export default ProductDetail;
