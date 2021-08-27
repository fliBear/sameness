import React from "react";
import PlayerData from "./PlayerData";
import PlayerForm from "./PlayerForm";
import PlayerEdit from "./PlayerEdit";

const Player = (player) => {
    return (
        <article className="player-container">
            <PlayerData {...player}></PlayerData>
            <PlayerEdit {...player}></PlayerEdit>
            <PlayerForm {...player}></PlayerForm>
        </article>
    );
};

export default Player;
