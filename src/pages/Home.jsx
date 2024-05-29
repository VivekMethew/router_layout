import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Number from "../components/Number";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div>
          <h1>Total Count : {count}</h1>
        </div>

        <Number setCount={setCount} count={count} />
      </div>
    </div>
  );
};

export default Home;
