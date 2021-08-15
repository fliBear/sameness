import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import Body from "./Body";

export default function Landing() {
  return (
    <main>
      <Navbar></Navbar>
      <Submenu></Submenu>
      <Body></Body>
    </main>
  );
}
