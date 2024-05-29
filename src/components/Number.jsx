import React from "react";

const Number = ({ setCount }) => {
  return (
    <div className="">
      <div>
        <button
          onClick={() => setCount((result) => result + 1)}
          className="bg-green-700 text-white px-6"
        >
          INC
        </button>
        <button
          onClick={() => setCount((result) => result - 1)}
          className="bg-orange-700 text-white px-6"
        >
          DEC
        </button>
      </div>
    </div>
  );
};

export default Number;
