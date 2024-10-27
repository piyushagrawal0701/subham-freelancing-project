import React from "react";

const Button4 = (props) => {
  return (
    <>
      <button
      onClick={props.onClick}
        className={`border-[#2E2455]  text-[#2E2455] px-4  rounded-md flex items-center justify-center gap-2 transition-all ease-in ${props.className}`}
      >
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default Button4;
