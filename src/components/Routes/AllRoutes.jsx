import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Cart } from "../../pages/Cart";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { WishList } from "../../pages/WishList";
import { Product } from "../../pages/Product";
import { ProductList } from "../../pages/ProductList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Public Routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<Product />} />

      {/* Protected Routes */}
      <Route path="/:userId/cart" element={<Cart />} />
      <Route path="/:userId/wishlist" element={<WishList />} />

      {/* Prevented Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
