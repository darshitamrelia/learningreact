import React, { useContext } from "react";
import { userDetails } from "./App";

function Profile() {
  const DarshitContext = useContext(userDetails);
  return (
    <div>
      Profile
      <h1>{DarshitContext.userName}</h1>
    </div>
  );
}

export default Profile;
