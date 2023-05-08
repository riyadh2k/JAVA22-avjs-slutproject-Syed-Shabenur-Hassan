import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = (props) => {
  const cartItemCount = props.cartItems
    ? props.cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const buttonCount = props.buttonCount;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/product" className="navbar-logo">
          Web Shop
        </Link>
        <ul className="navbar-links">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart {cartItemCount}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
