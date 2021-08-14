import React from "react";
import "./App.css";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <section className={isSubmenuOpen ? "submenu show" : "submenu"}>
      <h4>Page</h4>
      <div>
        <a href="/">Link</a>
        <a href="/">Link</a>
      </div>
    </section>
  );
}
