import React, { useContext, useEffect } from "react";
import { MainProvider } from "../context/contextProvider";
import axios from "axios";

const Users = () => {
  const { users, setUsers } = useContext(MainProvider);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Users</div>;
};

export default Users;
