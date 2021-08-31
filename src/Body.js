import React, { useRef } from "react";
import Player from "./Player";
import { useGlobalContext } from "./context";

export default function Body() {
    const { players, startNextRound, createPlayer, round } = useGlobalContext();
    const newPlayerRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        createPlayer(e.target.createPlayer.value);
        newPlayerRef.current.value = "";
    };

    return (
        <section>
            <div className="round">
                <h3 className="center">{round}</h3>
            </div>
            <button
                className="btn body-btn center-horizontaly"
                onClick={startNextRound}
            >
                <h4>Next round</h4>
            </button>

            <div className="players-container center-horizontaly">
                {players.map((player) => {
                    return <Player key={player.name} {...player} />;
                })}
            </div>
            <form
                className="flex-display create-player-form"
                onSubmit={handleSubmit}
            >
                <button className="btn body-btn" type="submit">
                    <h4>Create player</h4>
                </button>
                <input
                    type="text"
                    id="create-player"
                    name="createPlayer"
                    ref={newPlayerRef}
                />
            </form>
        </section>
    );
}
