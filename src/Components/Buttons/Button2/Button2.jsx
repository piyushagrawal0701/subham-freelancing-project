import React from "react";

const Button2 = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={`bg-gray-50 border-2 border-gray-200 hover:bg-gray-200 text-gray-800 px-4 py-1 rounded-md flex items-center justify-center gap-2 font-medium ${props.className} `}>
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default Button2;
