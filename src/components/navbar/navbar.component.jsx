import React from "react";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <a className="navbar-link" href="/">
          Character
        </a>
        <a className="navbar-link" href="/">
          Episode
        </a>
        <a className="navbar-link" href="/">
          Season
        </a>
      </div>
      <div className="navbar-section">
        <a className="navbar-link github" href="/">
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
