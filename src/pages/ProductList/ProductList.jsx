import { useEffect } from "react";

import { useProductContext } from "../../context";
import {
  Loader,
  FilterSection,
  SearchSort,
  ProductCard,
} from "../../components";
import { ErrorPage } from "../ErrorPage";
import { loadProducts } from "../../utils/apiCalls";

// Styles, Images
import notFound from "../../assets/productNotFound.jpg";
import "./product-list.scss";

function ProductList() {
  const { state, dispatch, filteredProducts } = useProductContext();
  const { productLoading, productFetchError } = state;

  useEffect(() => {
    if (filteredProducts?.length === 0) {
      loadProducts(dispatch);
    }
  }, []);

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
