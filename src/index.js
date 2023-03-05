import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//strict mode helps you find common bugs early in development
//react verifies that navigating away and back won't break your code using the cleanup function
//mount -> unmount -> remount
