import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [showComplete, setShowComplete] = useState(false);

  const todoContext = {
    numberOfItems,
    setNumberOfItems,
    showComplete,
    setShowComplete,
  };
  return (
    <SettingsContext.Provider value={todoContext}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettingsContext = () => useContext(SettingsContext);

export default SettingsContextProvider;