import React from "react";
import { useState } from "react";

function Profile() {
  const [ProfileDetails, setProfiledetails] = useState({
    FirstName: "darshit",
    LastName: "amrelia",
    Age: "27",
  });

  function changedata() {
    setProfiledetails({
      ...ProfileDetails,
      FirstName: "Prem",
      LastName: "Jani",
      Age: "25",
    });
  }

  const [formvalue, setformvalue] = useState("");

  const [friendslist, setfriendslist] = useState([
    "tahid",
    "Darshit",
    "prem",
    "Nikhil",
    "Manan",
    "Anirudh",
  ]);

  function addfriend() {
    setfriendslist([...friendslist, formvalue]);
    setformvalue("");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 my-5 shadow">
            <div className="card">
              <div className="card-header">
                <h3>
                  friend's list{""}
                  <span className="badge bg-danger"></span>
                  {""}
                </h3>
              </div>
              <div className="card-body">
                <input
                  value={formvalue}
                  onChange={(e) => setformvalue(e.target.value)}
                  className="form-control"
                  placeholder="Enter yoyr friends.."
                />
                <button onClick={addfriend}>Add</button>
              </div>
              <div className="card-body">
                {friendslist.map((item, index) => {
                  return <h3 key={index}>{item}</h3>;
                })}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => setfriendslist([])}
                >
                  {" "}
                  clear{" "}
                </button>
                <button
                  className="btn btn-primary ms-5"
                  onClick={() =>
                    setfriendslist([
                      "tahid",
                      "Darshit",
                      "prem",
                      "Nikhil",
                      "Manan",
                      "Anirudh",
                    ])
                  }
                >
                  showall
                </button>
              </div>
            </div>
          </div>

          {/* ---------------------------profile------------------------- */}

          <div className="col-md-4 offset-md-4 my-5 shadow">
            <div className="card">
              <div className="card-header">
                <h1>Profile</h1>
              </div>
              <div className="card-body">
                <h4>FirstName:{ProfileDetails.FirstName}</h4>
                <h5>LastName:{ProfileDetails.LastName}</h5>
                <h5>Age:{ProfileDetails.Age}</h5>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={changedata}>
                  Change Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Profile;
