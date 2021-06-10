import React from "react";
import spinner from "../img/spinner1.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
};

export default Loader;
