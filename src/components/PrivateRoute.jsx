import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import { AppDetails } from "../App";
import Container from "./Container";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { login, setLogin } = useContext(AppDetails);

  if (login) {
    return children;
  }
  return <Navigate to="/Login" />;
}

export default PrivateRoute;
