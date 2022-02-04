import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
