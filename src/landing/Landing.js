import React from "react";
import "../App.css";
import Submenu from "./Submenu";
import Body from "./Body";
import Menu from "./Menu";

export default function Landing() {
    return (
        <main>
            <Submenu></Submenu>
            <Body></Body>
            <Menu></Menu>
        </main>
    );
}
