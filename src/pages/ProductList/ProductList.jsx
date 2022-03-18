import React, { useEffect } from "react";
import axios from "axios";

import { useProductContext } from "../../context/providers/ProductProvider";
import { productActions } from "../../context/constants/productConstant";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";
import { FilterSection, SearchSort } from "../../components/FilterSection";
import { ProductCard } from "../../components/ProductCard";

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
    <section>
      <div>
        <SearchSort />
      </div>
      <div>
        <FilterSection />
      </div>
      <div>
        <p> Showing All Figures (showing {products?.length} products) </p>

        {products?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
