import React from "react";

import { useState } from "react";

function Usestate() {
  const [username, setusername] = useState("Nikhil");
  const [number, setnumber] = useState(0);
  const [image, showimage] = useState(true);

  const [ProfileDetails, setProfiledetails] = useState({
    FirstName: "darshit",
    LastName: "amrelia",
    Age: "27",
  });

  const handleimage = () => {
    showimage(!image);
  };
  return (
    <div className="container">
      <h1>My name is {username}</h1>
      <button onClick={() => setusername("Darshit")}>Change</button>
      <hr></hr>
      <h2>Working with number</h2>
      <h1>{number}</h1>
      <button
        class="btn btn-success"
        style={{ "margin-right": "45px" }}
        onClick={() => setnumber(number + 1)}
      >
        +
      </button>
      <button class="btn btn-danger" onClick={() => setnumber(number - 1)}>
        -
      </button>
      <hr></hr>
      <h2>Image</h2>
      <div className="main-b">
        <div
          className="buttons"
          style={{
            padding: "4px",
            margin: "0px 364px",
            display: "flex",
            gap: "192px",
          }}
        >
          <button class="btn btn-primary" onClick={() => showimage(false)}>
            Hide
          </button>
          <button class="btn btn-success" onClick={() => showimage(true)}>
            Show
          </button>
          <button class="btn btn-warning" onClick={handleimage}>
            Hide/Show
          </button>
        </div>
      </div>

      <br></br>
      {image ? (
        <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"></img>
      ) : null}
    </div>
  );
}

// ---------------------------CARD NAMES PROFILE CHANGE--------------


export default Usestate;
