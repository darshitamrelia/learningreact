import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

let htmlElement = document.getElementById("root");

// let root = ReactDOM.createRoot(htmlElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
