import React from "react";
import { Link } from "react-router-dom";
import "../stysles/navbar.css";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={logo} alt="" />
        <div className="mainLink">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
        </div>
      </div>
    </div>
  );
};
