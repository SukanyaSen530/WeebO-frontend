import React from "react";
import { Routes, Route } from "react-router-dom";

import notFound from "../assets/pageNotFound.jpg";

import {
  Cart,
  Home,
  Product,
  ProductList,
  EmptyState,
  WishList,
} from "../pages";

import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Public Routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<Product />} />

      {/* Protected Routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoutes>
            <WishList />
          </ProtectedRoutes>
        }
      />
      <Route
        path="*"
        element={
          <EmptyState
            imgSrc={notFound}
            msg="The page you are looking for does not exist!"
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
