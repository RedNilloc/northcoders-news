import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
        <Link to="/articles">
          <button className="articles-button">Articles</button>
        </Link>
        <Link to="/account">
          <button className="account-button">Account</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
