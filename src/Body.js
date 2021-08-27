import React from "react";
import Player from "./Player";
import { useGlobalContext } from "./context";

export default function Body() {
    const { players } = useGlobalContext();

    return (
        <section>
            <div className="players-container center">
                {players.map((player) => {
                    return <Player key={player.name} {...player} />;
                })}
            </div>
        </section>
    );
}
