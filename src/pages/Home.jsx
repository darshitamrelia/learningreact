import React from "react";
import imggame from "../bggame.jpg";

function Home() {
  return (
    <div className="Container">
      <img
        src={imggame}
        className="img-fluid"
        alt="..."
        style={{ height: "43.3rem", width: "100%" }}
      ></img>
    </div>
  );
}

export default Home;
