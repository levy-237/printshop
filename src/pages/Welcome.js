import React from "react";
import About from "./About";
import Price from "./Price";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Welcome() {
  return (
    <div>
      <div className="welcome-page">
        <h1 className="slogan">Bringing your ideas to life</h1>
        <h2 className="slogantwo">one print at a time . . .</h2>
        <Link to="/printshop">
          <button className="button1">Visit the shop</button>
        </Link>
      </div>
      <Price />
      <About />
      <Footer />
    </div>
  );
}

export default Welcome;
