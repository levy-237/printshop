import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { HashLink } from "react-router-hash-link";
function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header className="header">
      <Link to="/printshop">
        <h2 className="header-text">
          <span className="header-icon">
            {" "}
            <i class="ri-printer-line ri-1x"></i>
          </span>
          Print shop
        </h2>
      </Link>
      <h1 className="header-about">
        <HashLink smooth to="/#about">
          About us
        </HashLink>
      </h1>
      <Link to="/cart">
        <span className="header-cart">
          {" "}
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </span>
      </Link>
    </header>
  );
}

export default Header;
