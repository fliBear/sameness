import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function PlayerEdit(player) {
    const [isEditting, setIsEditting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditting(false);
    };

    return (
        <div className={isEditting ? "edit-score-form" : "player-form no-show"}>
            <form className="flex-display" onSubmit={handleSubmit}>
                <div className="flex-display edit-element-container">
                    <div className="edit-element">
                        <label htmlFor={`${player.name}-new-name`}>
                            <h4 className="score-input-text">
                                Enter new name:
                            </h4>
                        </label>
                        <input type="text" id={`${player.name}-new-name`} />
                    </div>
                    <div className="edit-element">
                        <label htmlFor={`${player.name}-last-round-score`}>
                            <h4 className="score-input-text">
                                Enter last round score:
                            </h4>
                        </label>
                        <input
                            type="text"
                            id={`${player.name}-last-round-score`}
                        />
                    </div>
                </div>
                <button className="btn" type="submit">
                    <FaCheck></FaCheck>
                </button>
            </form>
        </div>
    );
}
