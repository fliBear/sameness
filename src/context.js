import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuContent, setSubmenuContent] = useState("");
  const [location, setLocation] = useState({});

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
