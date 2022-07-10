import React from "react";
import { Routes, Route } from "react-router-dom";

import notFound from "../assets/pageNotFound.jpg";

import useScrollToTop from "../hooks/useScrollToTop";

import {
  Cart,
  Checkout,
  Home,
  Product,
  ProductList,
  EmptyState,
  WishList,
  UserDetails,
  Profile,
  Address,
  Orders,
  Success,
} from "../pages";

import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  useScrollToTop();

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
        path="/checkout"
        element={
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/checkout/success"
        element={
          <ProtectedRoutes>
            <Success />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoutes>
            <UserDetails />
          </ProtectedRoutes>
        }
      >
        <Route index path="/user" element={<Profile />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/user/orders" element={<Orders />} />
      </Route>
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
