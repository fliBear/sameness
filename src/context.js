import React, { useState, useContext } from "react";
import { finishEdit, startEdit } from "./utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([
        { name: "John", score: 0, isEditing: false },
        {
            name: "Dave",
            score: 5,
            isEditing: false,
        },
    ]);
    const [inputtingNewRound, setInputtingNewRound] = useState(false);
    const finishPlayerEdit = (name) => {
        setPlayers(
            players.map((player) => {
                if (player.name === name) {
                    return finishEdit(player);
                } else {
                    return player;
                }
            })
        );
    };
    const startPlayerEdit = (name) => {
        setPlayers(
            players.map((player) => {
                if (player.name === name) {
                    return startEdit(player);
                } else {
                    return player;
                }
            })
        );
    };
    const deletePlayer = (name) => {
        setPlayers(players.filter((player) => player.name !== name));
    };

    return (
        <AppContext.Provider
            value={{
                players,
                inputtingNewRound,
                setInputtingNewRound,
                startPlayerEdit,
                finishPlayerEdit,
                deletePlayer,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
