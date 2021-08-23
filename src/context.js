import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [submenuContent, setSubmenuContent] = useState("");
    const [location, setLocation] = useState({});
    const [unoGameId, setUnoGameId] = useState("");

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openSubmenu = (newSubmenuContent, positions) => {
        setIsSubmenuOpen(true);
        setSubmenuContent(newSubmenuContent);
        setLocation(positions);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const createUnoGame = (id) => {
        console.log(id, "trying...");
        setUnoGameId(id);
    };

    return (
        <AppContext.Provider
            value={{
                isMenuOpen,
                isSubmenuOpen,
                openMenu,
                openSubmenu,
                closeMenu,
                closeSubmenu,
                setSubmenuContent,
                submenuContent,
                location,
                unoGameId,
                createUnoGame,
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
