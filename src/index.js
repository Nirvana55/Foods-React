import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

if (module && module.hot) module.hot.accept();
