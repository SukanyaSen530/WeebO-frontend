import React, { useEffect } from "react";
import axios from "axios";

import { useProductContext } from "../../context/providers/ProductProvider";
import { productActions } from "../../context/constants/productConstant";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";
import { FilterSection, SearchSort } from "../../components/FilterSection";
import { ProductCard } from "../../components/ProductCard";

import "./product-list.scss";

function ProductList() {
  const { state, dispatch } = useProductContext();

  const { products, productLoading, productFetchError } = state;

  useEffect(
    () =>
      (async function () {
        try {
          dispatch({ type: productActions.LOADING, payload: true });
          const response = await axios.get("api/products");
          dispatch({
            type: productActions.LOAD_PRODUCTS,
            payload: response?.data?.products || [],
          });
        } catch (e) {
          dispatch({
            type: productActions.ERROR,
            payload: "Oops! Something went wrong :(",
          });
        }
      })(),
    [dispatch]
  );

  if (productLoading) {
    return <Loader />;
  }

  if (productFetchError) {
    return <ErrorPage msg={productFetchError} />;
  }

  return (
    <section className="productlist-section">
      <div className="productlist-search">
        <SearchSort />
        <p className="t-margin-sm b-margin-sm">
          Showing All Figures (showing {products?.length} products){" "}
        </p>
      </div>
      <div className="productlist-filter">
        <FilterSection />
      </div>
      <div className="productlist-items">
        {products?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
