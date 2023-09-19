import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default Navigation;
