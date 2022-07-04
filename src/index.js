import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Provdiers
import { ProductProvider, AuthProvider, UserProvider } from "./context";
//Stripe
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <UserProvider>
          <Elements stripe={stripePromise}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Elements>
        </UserProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
