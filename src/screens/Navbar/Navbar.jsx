import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <h1>Logo</h1>
        </div>
        <div className="Navbar__ul">
          <ul>
            <li>
              <Link to="/kunlik">MainCategory</Link>
            </li>
            <li>
              <Link to="/erten">First</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
