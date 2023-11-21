import React, { useState } from "react";
import { Card, Col, Button } from "antd";
import axios from "axios";
import { BASE_URL } from "../constanst";

const CategoryCard = ({ category, getData, setCategoryId }) => {
  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getData();
  };

  const editCategory = (id) => {
    setCategoryId(id);
  };

  return (
    <>
      <Col span={8}>
        <Card title={category.name} bordered={false}>
          {category.description}
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(category.id)}
          >
            Delete
          </Button>
          <Button
            style={{ background: "#18864b", marginLeft: 10 }}
            type="primary"
            onClick={() => editCategory(category.id)}
          >
            Edit
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default CategoryCard;
