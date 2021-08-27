import React from "react";
import { FaTimes, FaPen } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function PlayerData(player) {
    const { startPlayerEdit, deletePlayer } = useGlobalContext();

    return (
        <div className="flex-display">
            <h3>{player.name}</h3>
            <h3>{player.score}</h3>
            <div className="flex-display player-buttons-container">
                <button
                    className="btn"
                    onClick={() => {
                        startPlayerEdit(player.name);
                    }}
                >
                    <FaPen></FaPen>
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        deletePlayer(player.name);
                    }}
                >
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    );
}
