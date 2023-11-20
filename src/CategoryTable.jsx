import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const CategoryTable = ({ categories }) => {
  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //     },
  //   ];

  const data = categories.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  });
  return <Table columns={columns} dataSource={data} />;
};

export default CategoryTable;
