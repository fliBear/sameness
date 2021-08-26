import React from "react";
import { FaCheck } from "react-icons/fa";

export default function PlayerForm({ player, inputtingNewRound }) {
    return (
        <div
            className={
                inputtingNewRound ? "player-form" : "player-form no-show"
            }
        >
            <form className="flex-display">
                <div>
                    <label htmlFor={`${player.name}-score`}>
                        <h4 className="score-input-text">
                            Enter score for new round:
                        </h4>
                    </label>
                    <input type="text" id={`${player.name}-score`} />
                </div>
                <button className="btn">
                    <FaCheck></FaCheck>
                </button>
            </form>
        </div>
    );
}
