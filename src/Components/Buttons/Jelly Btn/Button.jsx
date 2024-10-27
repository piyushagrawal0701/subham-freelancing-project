import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <>
      {/* ------------ BOOK NOW BTN -----------  */}
      <button className="Btn py-2 text-sm">{props.buttonText}</button>
    </>
  );
};

export default Button;
