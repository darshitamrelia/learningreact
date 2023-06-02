import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginButton from "./LoginButton";

import { Link } from "react-router-dom";
import { AppDetails } from "../App";

function Nav() {
  const { login, setlogin, cart } = useContext(AppDetails);
  const { pathname } = useLocation();

  function logOut() {
    setlogin(false);
    localStorage.removeItem("login");
  }

  if (pathname === "/login") {
    return null;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Support" className="nav-link">
                  Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Courses" className="nav-link">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Coctail" className="nav-link">
                  Coctails
                </NavLink>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="btn btn-dark btn-sm me-3 position-relative"
              >
                <AiOutlineShoppingCart />
                <span
                  className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "26px", height: "26px" }}
                >
                  {cart.length}
                </span>
              </button>
              {login ? (
                <button className="btn btn-sm btn-warning" onClick={logOut}>
                  LogOut
                </button>
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
