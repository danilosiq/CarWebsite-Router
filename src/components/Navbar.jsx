import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import dan from "../../public/dan.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <img src={dan} alt="" />
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
