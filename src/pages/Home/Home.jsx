import React from "react";
import { Link } from "react-router-dom";

// CUSTOM
import { Caraousel } from "../../components";
import { bannerData, categoryData, brandData } from "../../data/imageData";

// STYLES
import "./home.scss";

export default function Home() {
  return (
    <section className="home-section">
      <Caraousel data={bannerData} />

      <div className="home-categories t-margin-lg">
        <h1 className="primary-heading b-margin-md designed-heading">
          Shop By Categories
        </h1>

        <div className="categories-section">
          {categoryData?.map((category) => (
            <Link to="/products" key={category.id}>
              <article className="category-card">
                <div className="category-card__image">
                  <img
                    src={category.imgSrc}
                    alt={category.altText}
                    className="resp-img"
                  />
                </div>
                <span className="category-card__text">
                  {category.categoryName}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="home-brands t-margin-lg">
        <h1 className="primary-heading b-margin-md designed-heading">
          Featured Brands
        </h1>

        <div className="brands-section">
          {brandData?.map((brand) => (
            <Link to="/products" key={brand.id}>
              <article className="brand-card">
                <div className="brand-card__image">
                  <img
                    src={brand.imgSrc}
                    alt={brand.altText}
                    className="resp-img"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
