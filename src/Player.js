import React, { useState } from "react";
import { useGlobalContext } from "./context";
import PlayerData from "./PlayerData";
import PlayerForm from "./PlayerForm";

const Player = () => {
    const [player, setPlayer] = useState({ name: "John", score: 0, id: 1 });
    const { inputtingNewRound } = useGlobalContext();

    return (
        <article className="player-container">
            <PlayerData {...player}></PlayerData>
            <PlayerForm {...{ player, inputtingNewRound }}></PlayerForm>
        </article>
    );
};

export default Player;
