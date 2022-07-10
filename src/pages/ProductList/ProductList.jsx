import { useEffect, useState } from "react";

import { useProductContext } from "../../context";
import {
  Loader,
  FilterSection,
  SearchSort,
  ProductCard,
} from "../../components";
import { EmptyState } from "../index";
import useScrollToTop from "../../hooks/useScrollToTop";

import { loadProducts } from "../../services";

// Styles, Images
import notFound from "../../assets/productNotFound.png";
import "./product-list.scss";

function ProductList() {
  const { state, dispatch, filteredProducts } = useProductContext();
  const { productLoading, productFetchError } = state;

  useScrollToTop();

  const numOfProductsInPage = 8;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    if (filteredProducts?.length === 0) {
      loadProducts(dispatch);
    }
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setTotalPage(Math.ceil(filteredProducts?.length / numOfProductsInPage));
    }
    setPage(1);
  }, [filteredProducts]);

  const indexOfLastProduct = page * numOfProductsInPage;
  const indexOfFirstProduct = indexOfLastProduct - numOfProductsInPage;
  const paginatedProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (productLoading) {
    return <Loader />;
  }

  if (productFetchError) {
    return <EmptyState msg={productFetchError} />;
  }

  return (
    <section className="productlist-section">
      <div className="productlist-search">
        <SearchSort />

        <div className="pagination">
          <p>
            Showing All Figures (showing {filteredProducts?.length || 0}{" "}
            products)
          </p>

          {totalPages > 1 ? (
            <div className="paginate flex">
              <button
                className="paginate__buttons btn btn--dark"
                onClick={() => {
                  if (page === 1) setPage(totalPages);
                  else setPage((currentPage) => (currentPage - 1) % totalPages);
                }}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((p, index) => (
                <button
                  className={`paginate__buttons btn btn--primary ${
                    page === index + 1 ? "active-page" : ""
                  }`}
                  onClick={() => setPage(index + 1)}
                  key={`pagination-button-${index}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="paginate__buttons btn btn--dark"
                onClick={() => {
                  if (page === totalPages - 1) setPage(totalPages);
                  else setPage((currentPage) => (currentPage + 1) % totalPages);
                }}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="productlist-filter">
        <FilterSection />
      </div>
      <div
        className={`productlist-items ${
          filteredProducts?.length !== 0 ? "productlist-items__not-empty" : ""
        }`}
      >
        {filteredProducts?.length !== 0 ? (
          paginatedProducts?.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <div className="productlist-items__empty">
            <img src={notFound} alt="no_search_results" />
            <p>No product match your current filter!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;
