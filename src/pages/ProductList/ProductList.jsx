import { useEffect } from "react";
import axios from "axios";

import { useProductContext, productActions } from "../../context";

import {
  Loader,
  FilterSection,
  SearchSort,
  ProductCard,
} from "../../components";

import { ErrorPage } from "../ErrorPage";

// Styles, Images
import notFound from "../../assets/productnotfound.jpg";
import "./product-list.scss";

function ProductList() {
  const { state, dispatch, filteredProducts } = useProductContext();

  const { productLoading, productFetchError } = state;

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
          Showing All Figures (showing {filteredProducts?.length || 0} products)
        </p>
      </div>
      <div className="productlist-filter">
        <FilterSection />
      </div>
      <div className="productlist-items">
        {filteredProducts?.length !== 0 ? (
          filteredProducts?.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <img
            src={notFound}
            alt="Product Not Found!"
            className="productlist-items__image"
          />
        )}
      </div>
    </section>
  );
}

export default ProductList;
