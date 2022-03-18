import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// Provdiers
import { ProductProvider } from "./context/providers/ProductProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
