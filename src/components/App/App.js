import React from "react";
import "./App.scss";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";

const App = () => {
  return (
    <div className="app__content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
