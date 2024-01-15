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
      {/* <img src=<%=require('./images/girl1.svg')%> alt="Девушка в розовом свитере"> */}
    </div>
  );
};

export default App;
