import React from "react";
import "./Main.scss";
import Filter from "../Filter/Filter";
import Courses from "../Courses/Courses";

const Main = () => {
  return (
    <main className="main">
      <Filter />
      <Courses />
      <div className="main__bg-lines main_bg-invisible"></div>
      <div className="main__bg-ellipse main_bg-invisible"></div>
      <div className="main__bg-star"></div>
    </main>
  );
};

export default Main;
