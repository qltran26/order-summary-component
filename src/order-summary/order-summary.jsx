import React from "react";
import "./styles/order-summary.css";

function OrderSummary() {
  return (
    <main>
      <div className="order-summary">
        <div className="order-summary__image">
          <img src="/images/illustration-hero.svg" alt="Illustration Hero" />
        </div>
        <section className="order-summary__field">
          <article>
            <h2>Order Summary</h2>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </article>
          <div className="plan">
            <div className="plan__default">
              <span>
                <img src="/images/icon-music.svg" alt="Icon Music" />
              </span>
              <span>
                <p id="plan-name">Annual Plan</p>
                <p id="plan-value">$59.99/year</p>
              </span>
            </div>
            <div className="plan__optional">
              <a href="#">Change</a>
            </div>
          </div>
          <div className="payments">
            <div className="payments__proceed">
              <button type="submit">Proceed to Payment</button>
            </div>
            <div className="payments__cancel">
              <a href="#">Cancel Order</a>
            </div>
          </div>
        </section>
      </div>
      <div className="attribution">
          <span>
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
              Frontend Mentor
            </a>
            .
          </span>
          <span>
            Coded by <a href="#">qltran</a>.
          </span>
        </div>
    </main>
  );
}

export default OrderSummary;
