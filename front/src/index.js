import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss"; // Import des styles globaux avec SASS
import "bootstrap/dist/css/bootstrap.min.css"; // Import des styles Bootstrap
import App from "./App"; // Import du composant principal
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
