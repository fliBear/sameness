import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import Body from "./Body";
import Menu from "./Menu";

export default function Landing() {
  return (
    <main>
      <Navbar></Navbar>
      <Submenu></Submenu>
      <Body></Body>
      <Menu></Menu>
    </main>
  );
}
