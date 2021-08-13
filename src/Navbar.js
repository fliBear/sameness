import React from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <a href="/">
          <h1>Sameness</h1>
        </a>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Games</button>
          </li>
          <li>
            <button className="link-btn">stats</button>
          </li>
        </ul>
        <button className="btn menu-btn">
          <FaBars></FaBars>
        </button>
        <button className="btn sign-in">Sign In</button>
      </div>
    </nav>
  );
}
