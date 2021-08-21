import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import "../App.css";

export default function Menu() {
    const { closeMenu, isMenuOpen } = useGlobalContext();

    return (
        <section className={isMenuOpen ? "menu show" : "menu"}>
            <button className="btn close-btn" onClick={closeMenu}>
                <FaTimes className="center"></FaTimes>
            </button>
        </section>
    );
}
