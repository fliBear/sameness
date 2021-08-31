import React, { useState, useContext } from "react";
import {
    finishEdit,
    startEdit,
    playerNextRound,
    playerCalculateScore,
    checkIfInputtingNextRound,
    addPlayer,
} from "./utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [round, setRound] = useState(0);

    const createPlayer = (name) => {
        if (!name) {
            return;
        }
        const newPlayers = addPlayer(players, name);
        setPlayers(
            newPlayers.map((player) => {
                return player;
            })
        );
    };

    const finishPlayerEdit = (name, newName, lastRoundScore) => {
        setPlayers(
            players.map((player) => {
                if (player.name === name) {
                    return finishEdit(player, newName, lastRoundScore);
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

    const startNextRound = () => {
        const finishedInputtingRound = checkIfInputtingNextRound(players);
        if (!finishedInputtingRound || players.length === 0) {
            return;
        }
        setPlayers(
            players.map((player) => {
                return playerNextRound(player);
            })
        );
        setRound(round + 1);
    };

    const playerNewRound = (name, score) => {
        setPlayers(
            players.map((player) => {
                if (player.name === name) {
                    return playerCalculateScore(player, score);
                } else {
                    return player;
                }
            })
        );
    };

    return (
        <AppContext.Provider
            value={{
                players,
                createPlayer,
                startPlayerEdit,
                finishPlayerEdit,
                deletePlayer,
                startNextRound,
                playerNewRound,
                round,
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
