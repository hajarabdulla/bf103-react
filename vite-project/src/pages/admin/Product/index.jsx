import React from "react";
import ProductList from "./List";
import Button from "../../../components/admin/Button";

const Products = () => {
  return (
    <div>
      <Button content={"Add Product"} href={"add-product"} />
      <ProductList />
    </div>
  );
};

export default Products;
