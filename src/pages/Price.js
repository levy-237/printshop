import React from "react";

function Price() {
  return (
    <div className="price">
      <div className="price-image"></div>
      <h2 className="price-h2">
        LIMITED TIME OFFER:<br></br>every product for 5.99$ + FREE SHIPPING
        <br></br>{" "}
        <a href="/printshop">
          <button className="price-button">Learn more</button>
        </a>
      </h2>
    </div>
  );
}

export default Price;
