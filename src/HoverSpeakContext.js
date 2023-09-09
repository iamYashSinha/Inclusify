// HoverSpeakContext.js
import React, { createContext, useContext, useState } from "react";

const HoverSpeakContext = createContext();

export function useHoverSpeak() {
  return useContext(HoverSpeakContext);
}

export function HoverSpeakProvider({ children }) {
  const [hoverSpeakEnabled, setHoverSpeakEnabled] = useState(true);

  const toggleHoverSpeak = () => {
    setHoverSpeakEnabled(!hoverSpeakEnabled);
  };

  return (
    <HoverSpeakContext.Provider value={{ hoverSpeakEnabled, toggleHoverSpeak }}>
      {children}
    </HoverSpeakContext.Provider>
  );
}
