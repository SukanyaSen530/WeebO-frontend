import { Link } from "react-router-dom";

// CUSTOM
import { Caraousel } from "../../components";
import { bannerData, categoryData, brandData } from "../../utils/imageData";
import { useProductContext, filterActions } from "../../context";

// STYLES
import "./home.scss";

const Home = () => {
  const { dispatch } = useProductContext();

  return (
    <section className="home-section">
      <Caraousel data={bannerData} />

      <div className="home-categories t-margin-lg">
        <h1 className="primary-heading b-margin-md designed-heading">
          Shop By Categories
        </h1>

        <div className="categories-section">
          {categoryData?.map(({ id, categoryName, imgSrc, altText }) => (
            <Link
              to={`/products`}
              key={id}
              onClick={() =>
                dispatch({
                  type: filterActions.FILTER_BY_CATEGORIES,
                  payload: categoryName.toLowerCase(),
                })
              }
            >
              <article className="category-card">
                <div className="category-card__image">
                  <img src={imgSrc} alt={altText} className="resp-img" />
                </div>
                <span className="category-card__text">{categoryName}</span>
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
          {brandData?.map(({ id, brandName, imgSrc, altText }) => (
            <Link
              to={`/products`}
              key={id}
              onClick={(e) =>
                dispatch({
                  type: filterActions.FILTER_BY_BRANDS,
                  payload: brandName.toLowerCase(),
                })
              }
            >
              <article className="brand-card">
                <div className="brand-card__image">
                  <img src={imgSrc} alt={altText} className="resp-img" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;