import React from "react";

import { brandData, categoryData } from "../../data/imageData";

import "./filter-section.scss";

const FilterSection = () => {
  return (
    <section className="filter-container">
      <div className="filter-primary-heading">
        <p>Filters</p>
        <button className="link">Clear</button>
      </div>

      <div className="filters">
        <h3 className="filter-heading">Price</h3>
        <div className="slider-text">
          <span>0</span>
          <span className="slider-text__display">10000</span>
          <span>20000</span>
        </div>
        <input className="slider" type="range" />
      </div>

      <div className="filters">
        <h3 className="filter-heading">Filter By Categories</h3>
        {categoryData?.map((category) => (
          <div key={category.id} className="input-group-checkbox">
            <input
              type="checkbox"
              name={category.categoryName}
              id={category.id}
            />
            <label>{category.categoryName}</label>
          </div>
        ))}
      </div>

      <div className="filters">
        <h3 className="filter-heading">Filter By Brands</h3>
        {brandData?.map((brand) => (
          <div key={brand.id} className="input-group-checkbox">
            <input type="checkbox" name={brand.brandName} id={brand.id} />
            <label>{brand.brandName}</label>
          </div>
        ))}
      </div>

      <div className="filters">
        <h3 className="filter-heading">Others</h3>
        <div className="input-group-checkbox">
          <input
            type="checkbox"
            name="includeoutofstock"
            id="includeoutofstock"
          />
          <label>Include Out Of Stock</label>
        </div>
        <div className="input-group-checkbox">
          <input type="checkbox" name="On sale" id="On Sale" />
          <label>On Sale</label>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
