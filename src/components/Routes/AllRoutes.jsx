import React from "react";
import { Routes, Route } from "react-router-dom";

import notFound from "../../assets/pagenotFound.jpg";

import { Home } from "../../pages/Home";
import { Cart } from "../../pages/Cart";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { WishList } from "../../pages/WishList";
import { Product } from "../../pages/Product";
import { ProductList } from "../../pages/ProductList";
import { ErrorPage } from "../../pages/ErrorPage";
import Mockman from "mockman-js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Public Routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/mockapi" element={<Mockman />} />
      <Route
        path="*"
        element={
          <ErrorPage
            imgSrc={notFound}
            msg="The Page you are looking for does not exists!"
          />
        }
      />

      {/* Protected Routes */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />

      {/* Prevented Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
