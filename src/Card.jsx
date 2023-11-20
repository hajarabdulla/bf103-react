import React from "react";
import { Card, Col } from "antd";

const CategoryCard = ({ category }) => {
  return (
    <>
      <Col span={8}>
        <Card title={category.name} bordered={false}>
          {category.description}
        </Card>
      </Col>
    </>
  );
};

export default CategoryCard;
