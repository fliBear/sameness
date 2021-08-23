import React from "react";
import { useGlobalContext } from "../context";

export default function UnoGame() {
    const { unoGameId } = useGlobalContext();

    return (
        <section>
            <h2>Uno game...</h2>
            <h4>{unoGameId}</h4>
        </section>
    );
}
