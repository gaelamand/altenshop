// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

// Créé un context qui va stocker les informations sur le mode sombre
const DarkModeContext = createContext();

// Création du fournisseur DarkModeProvider
export const DarkModeProvider = ({ children }) => {
  // Utilisation de l'état local pour suivre si le mode sombre est activé ou non
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour basculer entre le mode sombre et le mode clair
  const toggleDarkMode = () => {
    // Inverse la valeur actuelle du mode sombre
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  };

  // Le composant DarkModeProvider enveloppe ses enfants dans le contexte DarkModeContext. Cela permet aux composants enfant d'accéder à l'état
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Utilitaire personnalisé pour accéder au contexte DarkMode
export const useDarkMode = () => {
  // Utilise useContext pour accéder au contexte DarkModeContext
  return useContext(DarkModeContext);
};
