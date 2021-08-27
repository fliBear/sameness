import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayer] = useState([
        { name: "John", score: 0 },
        {
            name: "Dave",
            score: 5,
        },
    ]);
    const [inputtingNewRound, setInputtingNewRound] = useState(false);

    return (
        <AppContext.Provider
            value={{
                players,
                inputtingNewRound,
                setInputtingNewRound,
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
