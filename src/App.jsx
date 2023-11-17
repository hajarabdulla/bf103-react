import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const userData = [
  {
    id: uuidv4(),
    name: "Hajar",
    university: "asoiu",
  },
  {
    id: uuidv4(),
    name: "Vafa",
    university: "bsu",
  },
];

const App = () => {
  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    console.log(id);
    const newData = data.filter((item) => id != item.id);
    setData(newData);
  };

  return (
    <ul>
      {data.map((user, index) => (
        <li key={user.id}>
          <h3>{user.id}</h3>
          <p>{user.name}</p>
          <p>{user.university}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default App;
