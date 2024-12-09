import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/App.css";
const root = document.getElementById("root");
const ui = ReactDOM.createRoot(root);

ui.render(<App />);
