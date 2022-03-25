import React from "react";

// Data
import { brandData, categoryData } from "../../utils/imageData";

import { useProductContext, filterActions } from "../../context";

// Styles
import "./filter-section.scss";

const FilterSection = () => {
  const { state, dispatch } = useProductContext();

  const {
    productsFilter: {
      includeOutOfStock,
      filterOnSale,
      filterByCategories,
      filterByBrands,
      maxPrice,
    },
  } = state;

  return (
    <section className="filter-container">
      <div className="filter-primary-heading">
        <p>Filters</p>
        <button
          className="link"
          onClick={() => dispatch({ type: filterActions.CLEAR_FILTERS })}
        >
          Clear All
        </button>
      </div>

      <div className="filters">
        <h3 className="filter-heading">Price</h3>
        <div className="slider-text">
          <span>1000</span>
          <span className="slider-text__display">{maxPrice}</span>
          <span>20000</span>
        </div>
        <input
          className="slider"
          type="range"
          value={maxPrice}
          min={1000}
          max={20000}
          step={1000}
          onChange={(e) =>
            dispatch({
              type: filterActions.FILTER_BY_PRICE,
              payload: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="filters">
        <h3 className="filter-heading">Filter By Categories</h3>
        {categoryData?.map(({ id, categoryName }) => (
          <div key={id} className="input-group-checkbox">
            <input
              type="checkbox"
              name={categoryName}
              id={id}
              checked={filterByCategories.includes(categoryName.toLowerCase())}
              onChange={() => {
                dispatch({
                  type: filterActions.FILTER_BY_CATEGORIES,
                  payload: categoryName.toLowerCase(),
                });
              }}
            />
            <label htmlFor={id}>{categoryName}</label>
          </div>
        ))}
      </div>

      <div className="filters">
        <h3 className="filter-heading">Filter By Brands</h3>
        {brandData?.map(({ id, brandName }) => (
          <div key={id} className="input-group-checkbox">
            <input
              type="checkbox"
              name={brandName}
              id={id}
              checked={filterByBrands.includes(brandName.toLowerCase())}
              onChange={(e) =>
                dispatch({
                  type: filterActions.FILTER_BY_BRANDS,
                  payload: brandName.toLowerCase(),
                })
              }
            />
            <label htmlFor={id}>{brandName}</label>
          </div>
        ))}
      </div>

      <div className="filters">
        <h3 className="filter-heading">Others</h3>
        <div className="input-group-checkbox">
          <input
            type="checkbox"
            name="includeoutofstock"
            id="includeOutOfStock"
            checked={includeOutOfStock}
            onChange={(e) =>
              dispatch({
                type: filterActions.FILTER_OUTOFSTOCK,
                payload: e.target.checked,
              })
            }
          />
          <label htmlFor="includeoutofstock">Include Out Of Stock</label>
        </div>
        <div className="input-group-checkbox">
          <input
            type="checkbox"
            name="On sale"
            id="onSale"
            checked={filterOnSale}
            onChange={(e) =>
              dispatch({
                type: filterActions.FILTER_ON_SALE,
                payload: e.target.checked,
              })
            }
          />
          <label htmlFor="onSale">On Sale</label>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
