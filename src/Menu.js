import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

export default function Menu() {
  const { openMenu, closeMenu, isMenuOpen } = useGlobalContext();

  return (
    <section className={isMenuOpen ? "menu show" : "menu"}>
      <button className="btn close-btn" onClick={closeMenu}>
        <FaTimes className="center"></FaTimes>
      </button>
    </section>
  );
}
