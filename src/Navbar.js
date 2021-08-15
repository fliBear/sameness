import React from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const submenuContent = e.target.textContent;
    const contentData = e.target.getBoundingClientRect();
    const horizontal = (contentData.right + contentData.left) / 2;
    const vertical = contentData.bottom;
    openSubmenu(submenuContent, { horizontal, vertical });
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="navbar" onMouseOver={hideSubmenu}>
      <div className="nav-header">
        <a href="/">
          <h1>Sameness</h1>
        </a>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              games
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              stats
            </button>
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
