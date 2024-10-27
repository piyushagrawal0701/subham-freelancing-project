import React from "react";

const Button3 = (props) => {
  return (
    <>
      <button
      onClick={props.onClick}
        className={`bg-[#2E2455] hover:bg-[#19103e] text-white px-4  rounded-md flex items-center justify-center gap-2 transition-all ease-in ${props.className}`}
      >
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default Button3;
