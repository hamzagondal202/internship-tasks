import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";

// store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
