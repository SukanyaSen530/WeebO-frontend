import "./success.scss";

import orderBox from "../../assets/box.gif";

export default function Success() {
  return (
    <section className="success-section">
      <div className="success-section__content">
        <h3 className="success-section__content__heading b-margin-sm">
          Payment Successful!
        </h3>
        <h5 className="success-section__content__details">
          Order placed successfully! For more details check order section.
        </h5>
        <div className="success-section__content__image">
          <img src={orderBox} alt="order box" />
        </div>
      </div>
    </section>
  );
}
