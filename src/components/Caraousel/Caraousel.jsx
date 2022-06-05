import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./caraousel.scss";

const Caraousel = ({ data = [] }) => {
  const [numOfSlides, setNumOfSlides] = useState(0);

  const movePrev = () => {
    if (numOfSlides === 0) setNumOfSlides(data?.length - 1);
    else setNumOfSlides((slideNum) => (slideNum - 1) % data?.length);
  };

  const moveNext = () => {
    setNumOfSlides((slideNum) => (slideNum + 1) % data?.length);
  };

  const moveDot = (index) => {
    setNumOfSlides(index);
  };

  useEffect(() => {
    let intervalID = setInterval(() => moveNext(), 6000);
    return () => {
      clearImmediate(intervalID);
    };
  }, []);

  return (
    <section className="carousel">
      {data?.map((item, index) => (
        <article
          className={`carousel__image-container ${
            numOfSlides === index && "animate"
          }`}
          key={item.id}
        >
          <img
            src={item.imgSrc}
            alt={item.altText}
            className="carousel__image-container__image"
          />
          {item.imageDescription && (
            <h2 className="carousel__description">{item.imageDescription}</h2>
          )}
        </article>
      ))}

      <div className="carousel__button-container">
        <button
          className="carousel__button-container-btn"
          onClick={() => movePrev()}
        >
          <i className="fa-solid fa-circle-arrow-left" />
        </button>
        <button
          className="carousel__button-container-btn"
          onClick={() => moveNext()}
        >
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </div>

      <div className="carousel__dots-container">
        {Array(data ? data.length : 0)
          .fill(1)
          .map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index)}
              className={numOfSlides === index ? "dot active" : "dot"}
            ></div>
          ))}
      </div>
    </section>
  );
};

Caraousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      imageDescription: PropTypes.string,
      altText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Caraousel;
