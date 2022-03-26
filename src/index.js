import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Provdiers
import { ProductProvider, AuthProvider, UserProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <UserProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UserProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
