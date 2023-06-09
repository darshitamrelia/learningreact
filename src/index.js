import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style.css";
import { BrowserRouter } from "react-router-dom";

let htmlElement = document.getElementById("root");

let root = ReactDOM.createRoot(htmlElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
