import React from "react";
import "../App.css";
import "./Uno.css";
import axios from "axios";

export default function CreateUnoGame() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Create uno game function...");
        await axios
            .post("http://localhost:3001/uno/create-game")
            .then(function (response) {
                console.log(response.data.gameId);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section className="create-uno-container center">
            <form onSubmit={handleSubmit}>
                <button className="btn">Create game</button>
            </form>
        </section>
    );
}
