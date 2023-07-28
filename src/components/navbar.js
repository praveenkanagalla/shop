import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo"> Shop </Link>
      <div className="nav-links">
        <Link to="/cart">
          <ShoppingCart color="#fff" size={32} />
        </Link>
      </div>
    </div>
  );
};