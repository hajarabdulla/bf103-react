import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} />
      App
      <Footer setTheme={setTheme} theme={theme} />
    </div>
  );
};

export default App;
