import React from "react";

const User = ({ userData }) => {
  return (
    <>
      {userData.map((item, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.surname}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
