import React from "react";
import CategoryCard from "./Card";
import { Row } from "antd";

const Cards = ({ categories, getData, setCategoryId }) => {
  return (
    <Row gutter={16}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          getData={getData}
          setCategoryId={setCategoryId}
        />
      ))}
    </Row>
  );
};

export default Cards;
