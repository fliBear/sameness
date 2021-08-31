import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function PlayerForm(player) {
    const { playerNewRound } = useGlobalContext();
    const scoreInputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        playerNewRound(player.name, e.target.roundScore.value);
        scoreInputRef.current.value = "";
    };

    return (
        <div
            className={
                player.inputtingNextRound
                    ? "edit-score-form"
                    : "edit-score-form no-show"
            }
        >
            <form className="flex-display" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={`${player.name}-score`}>
                        <h4 className="score-input-text">
                            Enter score for new round:
                        </h4>
                    </label>
                    <input
                        required
                        type="number"
                        id={`${player.name}-score`}
                        name="roundScore"
                        ref={scoreInputRef}
                    />
                </div>
                <button className="btn btn-player">
                    <FaCheck></FaCheck>
                </button>
            </form>
        </div>
    );
}
