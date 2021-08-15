import React from "react";
import "./App.css";
import { useGlobalContext } from "./context";

export default function Body() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="page-body" onMouseOver={closeSubmenu}>
      Body here...
    </section>
  );
}
