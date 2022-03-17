import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Cart } from "../../pages/Cart";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { WishList } from "../../pages/WishList";
import { Product } from "../../pages/Product";
import { ProductList } from "../../pages/ProductList";
import Mockman from "mockman-js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Public Routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/mockapi" element={<Mockman />} />

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
