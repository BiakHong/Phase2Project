import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return <div className="navbar" id="navbar">
          <ul className="navbar">
            <li  className="cart">
              <Link to="/">Home</Link>
            </li>
            <li  className="cart">
              <Link to="/movies">Movies</Link>
            </li>
            <li  className="cart">
              <Link to="/watched">Watched</Link>
            </li>
            <li  className="cart">
              <Link to="/towatch">Wish List</Link>
            </li>
            <li id="cart" className="cart">
              <Link to="/favorite">❤️</Link>
            </li>
          </ul>

  </div>;
}

export default NavBar;

