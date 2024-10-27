import React from "react";

const Button1 = (props) => {
  return (
    <>
      <button className={`bg-red-600 hover:bg-red-700 text-white px-4  rounded-md flex items-center justify-center gap-2 transition-all ease-in ${props.className}`}>
        <p className="text-xl pt-2">
          <ion-icon name="add-circle-outline"></ion-icon>
        </p>
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default Button1;
