import React from "react";
import { FaTimes, FaPen } from "react-icons/fa";

export default function PlayerData(player) {
    return (
        <div className="flex-display">
            <h3>{player.name}</h3>
            <h3>{player.score}</h3>
            <div className="flex-display player-buttons-container">
                <button className="btn">
                    <FaPen></FaPen>
                </button>
                <button className="btn">
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    );
}
