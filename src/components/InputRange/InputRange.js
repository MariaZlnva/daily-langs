import React from "react";
import "./InputRange.scss";
const InputRange = () => {
  return (
    <div className="inputRange">
      <div className="inputRange__slider-track"></div>
      <input
        className="inputRange__input"
        type="range"
        min="0"
        max="6"
        value="0"
        id="slider-1"
      />
      <input
        className="inputRange__input"
        type="range"
        min="0"
        max="6"
        value="6"
        id="slider-2"
      />
    </div>
  );
};
export default InputRange;
