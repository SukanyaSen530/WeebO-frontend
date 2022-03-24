import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Provdiers
import { ProductProvider } from "./context";
import { AuthProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
