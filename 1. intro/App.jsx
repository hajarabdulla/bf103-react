import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import "./App.css";
import User from "./components/User";

const App = () => {
  // const myDesign = {
  //   color: "aqua",
  //   backgroundColor: "green",
  // };

  const userData = [
    {
      name: "Hajar",
      surname: "Abdullayeva",
    },
    {
      name: "Nigar",
      surname: "Abdullayeva",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Cards />
        <User userData={userData} />
      </main>
      <Footer />
      {/* <h1 style={{ color: "red", backgroundColor: "yellow" }}>Salam</h1>
      <div style={myDesign}>HEllo world</div> */}
    </>
  );
};

export default App;
