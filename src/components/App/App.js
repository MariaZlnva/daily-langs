import React from "react";
import "./App.scss";
import Header from "../Header/Header.js";

const App = () => {
  return (
    <div className="app__content">
      <Header />  
      {/* <img src=<%=require('./images/girl1.svg')%> alt="Девушка в розовом свитере"> */}
    </div>
  );
};

export default App;
