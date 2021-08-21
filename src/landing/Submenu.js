import React, { useEffect, useRef } from "react";
import "../App.css";
import { useGlobalContext } from "../context";

export default function Submenu() {
    const container = useRef(null);
    const { isSubmenuOpen, location, submenuContent } = useGlobalContext();

    useEffect(() => {
        const submenu = container.current;
        submenu.style.left = `${location.horizontal}px`;
        submenu.style.top = `${location.vertical}px`;
    }, [location, submenuContent]);

    return (
        <aside
            className={isSubmenuOpen ? "submenu show" : "submenu"}
            ref={container}
        >
            <h4>Page</h4>
            <div>
                <a href="/">{submenuContent}</a>
            </div>
        </aside>
    );
}
