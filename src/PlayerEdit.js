import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function PlayerEdit(player) {
    const { finishPlayerEdit } = useGlobalContext();
    const nameRef = useRef(null);
    const scoreRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        finishPlayerEdit(
            player.name,
            e.target.name.value,
            e.target.lastRoundScore.value
        );
        nameRef.current.value = "";
        scoreRef.current.value = "";
    };

    return (
        <div
            className={
                player.isEditing ? "edit-score-form" : "player-form no-show"
            }
        >
            <form className="flex-display" onSubmit={handleSubmit}>
                <div className="flex-display edit-element-container">
                    <div className="edit-element">
                        <label htmlFor={`${player.name}-new-name`}>
                            <h4 className="score-input-text">
                                Enter new name:
                            </h4>
                        </label>
                        <input
                            type="text"
                            id={`${player.name}-new-name`}
                            name="name"
                            ref={nameRef}
                        />
                    </div>
                    <div className="edit-element">
                        <label htmlFor={`${player.name}-last-round-score`}>
                            <h4 className="score-input-text">
                                Enter last round score:
                            </h4>
                        </label>
                        <input
                            type="number"
                            id={`${player.name}-last-round-score`}
                            name="lastRoundScore"
                            ref={scoreRef}
                        />
                    </div>
                </div>
                <button className="btn btn-player" type="submit">
                    <FaCheck></FaCheck>
                </button>
            </form>
        </div>
    );
}
