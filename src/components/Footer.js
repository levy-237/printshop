import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h2 className="footer-logo">
          <span className="header-icon">
            <i class="ri-printer-line ri-1x"></i>
          </span>
          Print shop
        </h2>
        <h3 className="find-us">
          <span className="footer-icon ri-2x">
            <i class="ri-instagram-line"></i>
          </span>
          <span className="footer-icon ri-2x">
            <i class="ri-youtube-line"></i>
          </span>
          <span className="footer-icon ri-2x">
            <i class="ri-twitter-line"></i>
          </span>
        </h3>
      </div>
      <p className="footer-p">
        At our printshop, we believe that every great idea deserves to be
        brought to life. That's why we've created a space where you can turn
        your thoughts and inspirations into something tangible.
      </p>
    </footer>
  );
}

export default Footer;
