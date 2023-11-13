import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const myDesign = {
    color: "aqua",
    backgroundColor: "green",
  };
  return (
    <>
      <Header />
      <main>
        <Cards />
      </main>
      <Footer />
      {/* <h1 style={{ color: "red", backgroundColor: "yellow" }}>Salam</h1>
      <div style={myDesign}>HEllo world</div> */}
    </>
  );
};

export default App;
