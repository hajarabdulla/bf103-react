import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("Hello from this side");
    }, 2000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return <h1>Home</h1>;
};

export default Home;
