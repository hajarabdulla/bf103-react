import React from "react";
import CategoryCard from "./Card";
import { Row } from "antd";

const Cards = ({ categories }) => {
  return (
    <Row gutter={16}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Row>
  );
};

export default Cards;
