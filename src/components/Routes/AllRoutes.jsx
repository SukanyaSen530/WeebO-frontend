import React from "react";
import { Routes, Route } from "react-router-dom";

import notFound from "../../assets/pageNotFound.jpg";

import { Home } from "../../pages/Home";
import { Cart } from "../../pages/Cart";
import { WishList } from "../../pages/WishList";
import { Product } from "../../pages/Product";
import { ProductList } from "../../pages/ProductList";
import { ErrorPage } from "../../pages/ErrorPage";

import ProtectedRoutes from "../Routes/ProtectedRoutes";

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
          <ErrorPage
            imgSrc={notFound}
            msg="The page you are looking for does not exist!"
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
