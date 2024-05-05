import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/pizza-backg.avif";
import "../stysles/home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>Menü</button>
        </Link>
      </div>
    </div>
  );
};
