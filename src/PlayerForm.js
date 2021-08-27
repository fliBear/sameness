import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function PlayerForm(player) {
    const { inputtingNewRound } = useGlobalContext();

    useEffect(() => {
        return;
    }, [inputtingNewRound]);

    return (
        <div
            className={
                inputtingNewRound
                    ? "edit-score-form"
                    : "edit-score-form no-show"
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
