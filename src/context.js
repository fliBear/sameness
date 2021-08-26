import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayer] = useState([]);
    const [inputtingNewRound, setInputtingNewRound] = useState(false);

    return (
        <AppContext.Provider
            value={{
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
