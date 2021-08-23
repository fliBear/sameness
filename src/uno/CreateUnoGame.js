import React from "react";
import "../App.css";
import "./Uno.css";
import axios from "axios";
import { useGlobalContext } from "../context";

export default function CreateUnoGame() {
    const { unoGameId, createUnoGame } = useGlobalContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Create uno game function...");
        //const res = await axios.post("http://localhost:3001/uno/create-game");
        createUnoGame("something else");
        window.location.href = "/uno-game";
    };

    return (
        <section className="create-uno-container center">
            <form onSubmit={handleSubmit}>
                <button className="btn">Create game</button>
            </form>
        </section>
    );
}
