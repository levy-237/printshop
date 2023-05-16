import React from "react";

function About() {
  return (
    <div id="about">
      <h1 className="about-h1">How our company operates</h1>
      <div className="about-page">
        <div>
          <span className="about-icon">
            <i class="ri-money-euro-circle-fill ri-4x"></i>
          </span>
          <h2 className="about-h2">All products for reasonable price: 5.99$</h2>
          <p className="about-p">
            we understand that photos are more than just images on paper -
            they're memories. So why wait? Head to our store and start printing
            your favorite photos today for just $5.99 each. We can't wait to
            help you bring your memories to life.
          </p>
        </div>
        <div>
          <span className="about-icon">
            <i class="ri-globe-fill ri-4x"></i>
          </span>
          <h2 className="about-h2">Produce locally, Sell globally</h2>

          <p className="about-p">
            By producing locally, we can take advantage of lower costs and
            greater control over the production process.However By selling
            globally, we can expand our reach and tap into a much larger
            customer base.
          </p>
        </div>
        <div>
          <span className="about-icon">
            <i class="ri-customer-service-2-fill ri-4x"></i>
          </span>
          <h2 className="about-h2">24/ Customer service</h2>
          <p className="about-p">
            in our company, we are committed to providing you with the best
            possible experience. Our team of experts is dedicated to answering
            your questions, addressing your concerns, and helping you with any
            issues that may arise.
          </p>
        </div>
        <div>
          <span className="about-icon">
            <i class="ri-star-smile-line ri-4x"></i>
          </span>
          <h2 className="about-h2">Best quality</h2>
          <p className="about-p">
            We are also committed to providing you with the best quality
            products and services. We take pride in our work, paying close
            attention to detail to ensure that every product meets our rigorous
            quality standards.
          </p>
        </div>
        <div>
          <span className="about-icon">
            <i class="ri-secure-payment-fill ri-4x"></i>
          </span>
          <h2 className="about-h2">Risk free</h2>
          <p className="about-p">
            We understand that making a purchase can be a risk, but with us, you
            can shop with confidence. If you are not satisfied with your
            purchase, we offer a hassle-free return and refund policy.
          </p>
        </div>
        <div>
          <span className="about-icon">
            <i class="ri-user-star-line ri-4x"></i>
          </span>
          <h2 className="about-h2">Safe for environment</h2>
          <p className="about-p">
            we also care about the environment. We believe that it's our
            responsibility to do our part to protect the planet for future
            generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
