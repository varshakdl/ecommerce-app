import React from "react";
import { Link } from "react-router-dom";
import brand from '../assets/brand.jpg'

const Header = () => {
  return (
    <header className="header container">
      <div className="brand">
        <div className="brand__logo"><img src={brand} /></div>
        <div className="brand__title">E-Commerce</div>
      </div>
      <div className="header-actions">
        <Link to="/" className="btn small">Home</Link>
        <Link to="/customer" className="btn small">Customer</Link>
        <Link to="/admin" className="btn small">Admin</Link>
        <Link to="/orders" className="btn small">My Orders</Link>
      </div>
    </header>
  );
};

export default Header;
